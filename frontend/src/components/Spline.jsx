import React from "react";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
const Model = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Set a timeout to simulate loading time

    return () => clearTimeout(loaderTimeout);
  }, []);
  return (
    <>
      <Spline
        style={{
          height: "100vh",
          width: "100vh",
          top: "0",
          position: "absolute",
          zIndex: "-1",
          backgroundColor: "white",
        }}
        scene="https://draft.spline.design/9jOtr8jogEDGTROB/scene.splinecode"
      />
    </>
  );
};

export default Model;
