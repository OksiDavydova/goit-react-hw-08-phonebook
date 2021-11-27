import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuth, children }) => {
  // const isAuthenticated = true;

  if (isAuth) {
    return children;
  }

  return <Navigate to="/" />;
};
