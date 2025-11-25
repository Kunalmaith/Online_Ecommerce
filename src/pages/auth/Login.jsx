import React, { useState } from "react";
import loginImage from "../../assets/images/SL3.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {login} = useAuth()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();
  setError("");
  setSuccessMsg("");

  const getUsersFromStorage = localStorage.getItem("users");

  if (!getUsersFromStorage) {
    setError("No account found. Please sign up first.");
    return;
  }

  try {
    const users = JSON.parse(getUsersFromStorage);
    const userFound = users.find(user => user.email === email);

    if (userFound) {
      if (userFound.password === password) {
        // --- THIS IS THE KEY ---
        // 1. Call the login function from the context with the found user's data
        login(userFound);

        setSuccessMsg("Login Successful! Redirecting...");

        // 2. (Optional but recommended) Remove the alert for better UX
        // alert("Login Successful! Welcome to Exclusive");

        // Navigate to the home page after a short delay
        setTimeout(() => {
          navigate("/");
        }, 1000); // 1-second delay
        
      } else {
        setError("Invalid Password. Please try again!");
      }
    } else {
      setError("No account found with this email.");
    }
  } catch (error) {
    console.error("Failed to parse users from localStorage", error);
    setError("An unexpected error occurred. Please try clearing your site data.");
  }
};

  return (
    <div className="min-h-screen font-poppins bg-gray-50 lg:grid lg:grid-cols-2">
      {/* ... (rest of your JSX remains the same) */}
      <div className="hidden lg:flex items-center justify-center bg-gray-100 p-8">
        <img
          src={loginImage}
          alt="E-commerce promotional"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full p-4">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg lg:bg-transparent lg:shadow-none lg:p-0">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Log in to Exclusive
            </h1>
            <p className="text-gray-600">Enter your details below</p>
          </div>

          {/* 💡 The form should have an onSubmit handler */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email or Phone Number"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-red-500 transition"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-red-500 transition"
              />
            </div>

            {/* 💡 Conditional rendering for messages */}
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
            {successMsg && (
              <p className="text-green-500 text-sm mt-4">{successMsg}</p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              {/* 💡 The button should be inside the form and have type="submit" */}
              <button
                type="submit"
                className="bg-[#DB4444] text-white py-3 px-12 rounded-md font-medium transition-all duration-300 hover:bg-red-600 active:scale-95 w-full sm:w-auto"
              >
                Log In
              </button>
              <a
                href="#"
                className="text-red-500 font-medium transition hover:text-red-700 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
