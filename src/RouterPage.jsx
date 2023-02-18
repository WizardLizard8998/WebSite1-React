import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KAppBar from "./COMPONENTS/AppBar";
import BlogPage from "./PAGES/BlogPage";
import LeaveANote from "./PAGES/LeaveANote";
//import ConnectionPage from "./ConnectionPage";
import MainPage from "./PAGES/MainPage";

function RouterPage() {
  return (
    <>
      <Router>
        <KAppBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/BirNotBırak" element={<LeaveANote />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterPage;

//<Route path="/Connection" element={<ConnectionPage/>} />
