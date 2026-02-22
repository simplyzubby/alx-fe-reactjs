import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth"; // ✅ Use custom auth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ Lab expects this

  if (!isAuthenticated) {
    // Redirect unauthenticated users
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;