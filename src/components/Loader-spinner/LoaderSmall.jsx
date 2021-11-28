import React from "react";
import Loader from "react-loader-spinner";
import { CenterContainerForLoader } from "../../App.styled";

export default function LoaderSmall() {
  return (
    <CenterContainerForLoader>
      <Loader
        type="Bars"
        color="red"
        height={50}
        width={50}
        timeout={1000} //1 secs
      />
    </CenterContainerForLoader>
  );
}
