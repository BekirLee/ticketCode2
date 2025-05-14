import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="heroTag row">
        <div className="heroImg col-lg-6 col-md-12">
          <img
            src="https://preview.colorlib.com/theme/shop/img/header-img.png"
            alt=""
          />
        </div>
        <div className="heroContent col-lg-6 col-md-12">
          <p>Flat 75%Off</p>
          <h1>It’s Happening this Season!</h1>
          <button className="btnP">Purchase Now</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
