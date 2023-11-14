import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import style from "./LandingPage.module.css";
import logo2 from "../../assets/logo2Png.gif";
import logo4 from "../../assets/logo4.gif";
import sushi from "../../assets/chopstick-sushi-flat.png";
import ramen from "../../assets/chopstick-ramen.png";
const LandingPage = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <section className={style.landingPage}>
        <div className={style["top-right-logo-container"]}>
          <img src={logo4} alt="sushi jumping" />
        </div>
        <div className={style["top-right-logo-container-two"]}></div>

        <div className={`${style.circle} ${style.circle1}`}></div>

        <div className={style["top-left-logo-container"]}>
          <img src={logo2} alt="Animated logo" />
        </div>
        <div className={style.slogan}>
          <div className={style.ramen}>
            <div className={`${style.circle} ${style.circle3}`}>
              <img src={ramen} alt="" />
            </div>
            <p>
              Ramen <span>&</span>
            </p>
          </div>
          <div className={style.sushi}>
            <div className={`${style.circle} ${style.circle2}`}>
              <img src={sushi} alt="" />
            </div>
            <p>Sushi Fusion:</p>
          </div>
          <div className={style.endText}>
            <p>Where Flavor Meets Tradition!</p>
          </div>
          <Link to="Home" className={style.landingLink}>
            PROCEED &rarr;
          </Link>
        </div>
      </section>
    );
  } else {
    return <Outlet></Outlet>;
  }
};

export default LandingPage;
