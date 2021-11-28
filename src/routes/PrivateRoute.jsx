import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth-selector";

function PrivateRoute({ children, redirectTo }) {
  const isAuth = useSelector(getIsAuth);
  return isAuth ? children : <Navigate to={redirectTo} />;
}
export default PrivateRoute;
