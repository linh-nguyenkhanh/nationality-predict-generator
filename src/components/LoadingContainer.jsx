import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import "../index.css";

const LoadingContainer = () => {
  return (
    <div className="loading-container">
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default LoadingContainer;
