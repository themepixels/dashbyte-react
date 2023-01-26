import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SalesMonitoring from "./dashboard/SalesMonitoring";
import WebsiteAnalytics from "./dashboard/WebsiteAnalytics";
import LayoutGrid from "./docs/LayoutGrid";

// import css
import "./assets/css/remixicon.css";

// import scss
import "./scss/style.scss";

// set skin on load
window.addEventListener("load", function () {
  let skinMode = localStorage.getItem("skin-mode");
  let HTMLTag = document.querySelector("html");

  if (skinMode) {
    HTMLTag.setAttribute("data-skin", skinMode);
  }
});

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dashboard/sales" element={<SalesMonitoring />} />
            <Route path="dashboard/analytics" element={<WebsiteAnalytics />} />
            <Route path="docs/layout/grid" element={<LayoutGrid />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}