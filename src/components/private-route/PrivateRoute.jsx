import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContextProvider } from '../../AuthContex';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContextProvider);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
