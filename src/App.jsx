import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import BottomMenu from "./components/BottomMenu";

const App = () => {
  return (
    <>
      <BottomMenu />
      <Outlet />
    </>
  );
};

export default App;
