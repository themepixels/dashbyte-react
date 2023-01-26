import React from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";

export default function Home() {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
    </React.Fragment>
  )
}