import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
const ProtectedRoutes = ({ children }) => {
  const { user } = auth;
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoutes;
