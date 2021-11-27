import { Navigate } from "react-router-dom";

export function PublicRoute({ isAuth, navigateTo = "/", children }) {
  if (isAuth) {
    return children;
  }

  return <Navigate to={navigateTo} />;
}
// return isAuth ? <Navigate to={navigateTo} /> : <Component />;
// import { Navigate } from "react-router-dom";
// export function PublicRoute({ isAuth, component: Component }) {
//   return (
//     <>
//       <h1>PUBLIC</h1>
//       {isAuth ? <Navigate to="/" /> : <Component />}
//     </>
//   );
// }

// export function PublicRoute({
//   isAuth,
//   component: Component,
//   restricted = false,
//   navigateTo = "/",
//   ...routeProps
// }) {
//   const shouldRedirect = isAuth && restricted;
//   return (
//     <>
//       <Route {...routeProps}>
//         {shouldRedirect ? <Navigate to={navigateTo} /> : <Component />}
//       </Route>
//     </>
//   );
// }
