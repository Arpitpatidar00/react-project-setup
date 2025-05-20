// core/global/AppToastContainer.tsx

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" // or "dark"
    />
  );
};

export default AppToastContainer;
