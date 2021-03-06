import React from "react";
import Loader from "react-loader-spinner";
import { CenterContainerForLoader } from "../../App.styled";

export default function LoaderSpinner() {
  return (
    <CenterContainerForLoader>
      <Loader
        type="Bars"
        color="#e74c3c"
        height={150}
        width={150}
        timeout={3000} //3 secs
      />
    </CenterContainerForLoader>
  );
}
