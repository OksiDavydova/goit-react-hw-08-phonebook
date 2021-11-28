import "./App.styled.jsx";
import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/Appbar";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublickRoutes.jsx";
import { useDispatch, useSelector } from "react-redux";
import { currentThunk } from "./redux/auth/auth-thunks";
import LoaderSpinner from "./components/Loader-spinner/Loader-spinner";
import { selectIsRefreshing } from "./redux/auth/auth-selector";
import page from "./pageImportLazy";
const { HomePage, ContactsPage, RegisterPage, LoginPage, NotFound } = page;

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {!isRefreshing && (
        <>
          <Suspense fallback={<LoaderSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/">
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts">
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
