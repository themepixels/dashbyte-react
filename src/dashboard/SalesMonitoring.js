import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

export default function SalesMonitoring() {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <div className="main main-app p-3 p-lg-4">This is sales monitoring</div>
    </React.Fragment>
  )
}