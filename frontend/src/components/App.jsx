import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HomePage } from "./home/home";
import { MainFeed } from "./mainfeed/MainFeed";
import { Navbar } from "./navFooter/Navbar";
import { Footer } from "./navFooter/Footer";

export function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mainfeed" element={<MainFeed />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}
