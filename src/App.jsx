import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Outlet } from "react-router-dom";
import BottomMenu from "./components/BottomMenu";
import "./App.css";

const App = () => {
  return (
    <>
      <BottomMenu />
      <Outlet />
    </>
  );
};

export default App;
