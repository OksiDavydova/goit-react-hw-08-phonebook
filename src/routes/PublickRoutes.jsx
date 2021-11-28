import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth-selector";

function PublicRoute({ children, redirectTo }) {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? <Navigate to={redirectTo} /> : children;
}
export default PublicRoute;
