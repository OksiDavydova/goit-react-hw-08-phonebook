import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuth, children }) => {
  // const isAuthenticated = true;

  if (isAuth) {
    return children;
  }

  return <Navigate to="/" />;
};
// export function PrivateRoute({
//   isAuth,
//   component: Component,
//   navigateTo = "/",
// }) {
//   return isAuth ? Component : <Navigate to={navigateTo} />;
// }

// import { Navigate } from "react-router-dom";
// export function PrivateRoute({ isAuth, component: C }) {
//   return (
//     <>
//       <h1>PRIVATE</h1>
//       {isAuth ? <C /> : <Navigate to="/login" />}
//     </>
//   );
// }
