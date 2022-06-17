import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/Login"}) => {
    const [loggedUser, setLoggedUser]=useState(null)

    useEffect= () =>{
        setLoggedUser(localStorage.getItem("user") || null)
        window.addEventListener("storage", handleStorage)
    }

    const handleStorage=(e)=>{
        setLoggedUser(localStorage.getItem("user") || null)
    }

    if (!loggedUser) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />; 
};
