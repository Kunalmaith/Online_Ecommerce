import React, { useState } from "react";
import Googleicon from "../../assets/images/Allicons/Icon-Google.svg?react";
import signUpImage from "../../assets/images/SL3.svg";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  // Each validation function now returns true (valid) or false (invalid)
  const validateName = () => {
    if (!name) {
      setNameError("Please enter your name.");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email cannot be empty.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!password) {
      setPasswordError("Password cannot be empty.");
      return false;
    }
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be 8+ chars, with uppercase, lowercase, number, and special character."
      );
      return false;
    }
    return true;
  };

  const validateMatchPassword = () => {
    if (!confirmPassword) {
      setPasswordMatchError("Please confirm your password.");
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. Reset all previous errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setPasswordMatchError("");

    // 2. Call each validation function and store its result
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPasswordMatchValid = validateMatchPassword();

    // 3. Check if ALL validation functions passed
    if (
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordMatchValid
    ) {
      try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      if (existingUsers.find((user) => user.email === email)) {
        setEmailError("An account with this email already exists.");
        return;
      }
      
      const newUser = {
        name: name,
        email: email,
        password: password,
      };
      
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      
      alert("Account Created Successfully!");
      navigate("/login");

    } catch (error) {
      console.error("Failed to parse or save user data", error);
      // You could set a generic error message for the user here
      setEmailError("An unexpected error occurred. Please try again.");
    }
  }
  };

  return (
    <div className="min-h-screen font-poppins bg-gray-50 lg:grid lg:grid-cols-2">
      <div className="hidden lg:flex items-center justify-center bg-gray-100 p-8">
        <img
          src={signUpImage}
          alt="Promotional banner"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full p-4">
        <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg lg:bg-transparent lg:shadow-none lg:p-0">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Create an Account
            </h1>
            <p className="text-gray-600">Enter your details below</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Name Input */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                // Optional: Validate on blur for better UX
                // onBlur={validateName}
                type="text"
                placeholder="Name"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-red-500 transition"
              />
              {nameError && (
                <p className="text-red-500 text-sm -mt-4">{nameError}</p>
              )}

              {/* Email Input */}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onBlur={validateEmail}
                type="email"
                placeholder="Email"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-red-500 transition"
              />
              {emailError && (
                <p className="text-red-500 text-sm -mt-4">{emailError}</p>
              )}

              {/* Password Input */}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onBlur={validatePassword}
                type="password"
                placeholder="Password"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-red-500 transition"
              />
              {passwordError && (
                <p className="text-red-500 text-sm -mt-4">{passwordError}</p>
              )}

              {/* Confirm Password Input */}
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                // onBlur={validateMatchPassword}
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-red-500 transition"
              />
              {passwordMatchError && (
                <p className="text-red-500 text-sm -mt-4">
                  {passwordMatchError}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <button
                type="submit"
                className="bg-[#DB4444] text-white rounded-md w-full py-3 font-medium transition hover:bg-red-600 active:scale-95"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Social login and Log in link remain the same */}
          <div className="flex flex-col gap-4">
            <button className="flex justify-center items-center gap-3 border border-gray-300 rounded-md py-3 w-full transition hover:bg-gray-100 active:scale-95">
              <Googleicon className="w-6 h-6" />
              <span className="font-medium">Sign up with Google</span>
            </button>
          </div>
          <div className="text-center text-gray-600">
            Already have an account?
            <NavLink
              to="/login"
              className="ml-2 font-medium text-red-500 border-b border-red-500 hover:text-red-700 hover:border-red-700 transition"
            >
              Log in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
