import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="bgimg">
        <div className="topleft">
          <p>Watch This Space</p>
        </div>
        <div className="middle">
          <h1>
            Hi, welcome to our Housing Web-App. You can add your Properties,
            View Available Properties. Sign in with Facebook to Save & View your
            Favourite Properties.
          </h1>
          <p>....serving you to lead the house listings.</p>
        </div>
        <div className="bottomleft">
          <p>Keep Keeping on.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
