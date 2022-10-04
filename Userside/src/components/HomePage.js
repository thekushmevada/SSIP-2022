import React from "react";
import "./HomePage.css";
import HomePageContent from "./HomePageContent";
import Navbar from "./Navbar";
const HomePage = () => {
  return (
    <>
      <div className="forMap">
        <Navbar />
        <HomePageContent />
      </div>
    </>
  );
};

export default HomePage;
