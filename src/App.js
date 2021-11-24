import "./App.styled.jsx";
import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { Section, Container, Heading } from "./App.styled";
import { routes } from "./routes";
import AppBar from "./components/AppBar/Appbar";

import { useDispatch } from "react-redux";
import { currentThunk } from "./redux/auth/auth-thunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          {routes.map(({ path, id, component: Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
