import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KAppBar from "../COMPONENTS/AppBar";
import BlogPage from "./BlogPage";
import MainPage from "./MainPage";

function RouterPage() {
  return (
    <>
      <Router>
        <KAppBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterPage;
