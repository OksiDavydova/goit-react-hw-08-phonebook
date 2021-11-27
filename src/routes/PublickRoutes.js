import { Navigate } from "react-router-dom";

export function PublicRoute({ isAuth, navigateTo = "/", children }) {
  return isAuth ? <Navigate to={navigateTo} /> : children;
}
