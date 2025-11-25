import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const AuthContext  = createContext()

export  function AuthProvider({children}){
    const [user,setUser] = useState(()=>{
        const storedUsers = localStorage.getItem('loggedInUser')
        try {
            return storedUsers ? JSON.parse(storedUsers) : null; 
        } catch (error) {
            return null
        }
    })
    const login = (userData) => {
    setUser(userData);
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  // The value provided to the rest of your app
  const value = {
    isLoggedIn: !!user, // true if user is not null, false otherwise
    user,
    login,
    logout,
  };



  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}