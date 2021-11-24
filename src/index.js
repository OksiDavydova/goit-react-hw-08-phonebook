import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./index.styled";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store"; //, persistor
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
