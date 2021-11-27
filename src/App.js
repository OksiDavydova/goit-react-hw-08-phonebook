import "./App.styled.jsx";
import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/Appbar";
import { PrivateRoute } from "./routes/PrivateRoute";
// import { PublicRoute } from "./routes/PublickRoutes";
import { useDispatch, useSelector } from "react-redux";
import { currentThunk } from "./redux/auth/auth-thunks";
import { getIsAuth } from "./redux/auth/auth-selector";
import LoaderSpinner from "./components/Loader-spinner/Loader-spinner";

import page from "./pageImportLazy";
const { HomePage, ContactsPage, RegisterPage, LoginPage, NotFound } = page;

function App() {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
