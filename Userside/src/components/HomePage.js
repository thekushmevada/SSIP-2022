import React from "react";
import "./HomePage.css";
import HomePageContent from "./HomePageContent";
import Navbar from "./Navbar";
const HomePage = () => {
  return (
    <>
      <div className="forMap">
        <Navbar />
        <iframe
          src="https://evspdrivermap.netlify.app/"
          allow="midi; geolocation;"
          height="820px"
          width="100%"
          style={{position:"absolute"}}
        ></iframe>
        <div style={{ zIndex: "1" }}>
          <HomePageContent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
