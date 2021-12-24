import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Page1, Page2, Page3, Page4, Page5 } from "../../pages";
import Header from "../Header";

import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/point1" element={<Page1 />} />
          <Route path="/point2" element={<Page2 />} />
          <Route path="/point3" element={<Page3 />} />
          <Route path="/point4" element={<Page4 />} />
          <Route path="/point5" element={<Page5 />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
