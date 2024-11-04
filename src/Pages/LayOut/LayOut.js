import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../Shared/MenuBar/MenuBar";
import PageFooter from "../Shared/PageFooter/PageFooter";

const LayOut = () => {
  return (
    <div>
      <MenuBar />
      <Outlet />
      <PageFooter/>
    </div>
  );
};

export default LayOut;
