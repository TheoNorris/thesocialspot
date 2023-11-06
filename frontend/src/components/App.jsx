import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomePage } from "./home/home";
import { MainFeed } from "./mainfeed/MainFeed";

export function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/mainfeed" element={<MainFeed />} />
        </Routes>
      </>
    </Router>
  );
}
