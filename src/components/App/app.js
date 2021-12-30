import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Page1, Page2, Page3, Page5,FormRegistrashion, FormRegistrPersonal } from "../../pages";
import Header from "../Header";
import Footer from "../Footer";

import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <section className="main-content container">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/point2" element={<FormRegistrPersonal />} />
            <Route path="/point3" element={<Page3 />} />
            <Route path="/registration" element={<FormRegistrashion />} />
            <Route path="/registration/personal" element={<FormRegistrPersonal />} />
            <Route path="/registration/public" element={<FormRegistrPersonal />} />
            <Route path="/point5" element={<Page5 />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
