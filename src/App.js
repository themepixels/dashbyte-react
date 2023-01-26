import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';

// import css
import "./assets/css/remixicon.css";

// import scss
import "./scss/style.scss";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}