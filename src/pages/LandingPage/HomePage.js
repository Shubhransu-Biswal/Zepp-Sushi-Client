import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import sushiOne from "../../assets/sushi-1.png";
import sushiTwo from "../../assets/sushi-2.png";
import sushiFour from "../../assets/sushi-4.png";
import sushiFive from "../../assets/sushi-5.png";
import chef from "../../assets/sushi-chef.gif";
import fish from "../../assets/fish-cutting.gif";
import HomePageNav from "../../componenets/UI/HomePageNav";
import HomepageButton from "../../componenets/Layout/HomepageButton";
const HomePage = () => {
  const { home } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [home]);

  const [isTextValid, setIsTextValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTextareaValid, setIsTextareaValid] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const textareaRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    nameRef.current.value = "";
    emailRef.current.value = "";
    textareaRef.current.value = "";
    setIsTextValid(false);
    setIsTextareaValid(false);
    setIsEmailValid(false);
  };

  const nameHandler = (e) => {
    setIsTextValid(e.target.value.trim().length > 0);
  };
  const emailHandler = (e) => {
    setIsEmailValid(
      e.target.value.trim().includes("@") && e.target.value.trim().length > 0
    );
  };
  const textareaHandler = (e) => {
    setIsTextareaValid(e.target.value.trim().length > 0);
  };
  return (
    <div className={style.homepage}>
      <HomePageNav />
      <section className={style.order} id="order">
        <HomepageButton className="orderButton">
          <Link to="/Meals">Order Now </Link>
        </HomepageButton>

        <div className={style["cards-container"]}>
          <Link to="/Meals">
            <div className={style.card}>
              <div className={style.sushiImgContainer}>
                <img src={sushiOne} alt="" />
              </div>
              <div className={style.sushiDescription}>
                <h3>Nigirizushi</h3>
                <p>
                  Hand-pressed sushi rice that comes with wasabi and a topping,{" "}
                  <i>neta</i>, draped over it. This kind of sushi is{" "}
                  <strong>typical in Tokyo</strong>
                </p>
              </div>
            </div>
          </Link>
          <Link to="/Meals">
            <div className={style.card}>
              <div className={style.sushiImgContainer}>
                <img src={sushiTwo} alt="" />
              </div>
              <div className={style.sushiDescription}>
                <h3>Osizushi</h3>
                <p>
                  Marinated or boiled fish on top of rice shaped in rectangular
                  wooden molds, then cut into small pieces. A favourite and{" "}
                  <strong>speciality of Osaka.</strong>
                </p>
              </div>
            </div>
          </Link>
          <Link to="/Meals">
            <div className={style.card}>
              <div className={style.sushiImgContainer}>
                <img src={sushiFour} alt="" />
              </div>
              <div className={style.sushiDescription}>
                <h3>Gunkanmaki</h3>
                <p>
                  A special type of{" "}
                  <strong>
                    <i>nigirizushi</i>
                  </strong>{" "}
                  where the topping, commonly fish roe, is prevented from
                  falling off by a strip of <i>nori</i> around the side.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/Meals">
            <div className={style.card}>
              <div className={style.sushiImgContainer}>
                <img src={sushiFive} alt="" />
              </div>
              <div className={style.sushiDescription}>
                <h3>Makizushi</h3>
                <p>
                  Sushi that has been <strong>rolled with a bamboo mat.</strong>{" "}
                  The rice and filling is typically wrapped in seaweed,{" "}
                  <i>nori</i>, and cut up.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className={style.about} id="about">
        <h3>About Us</h3>
        <div className={style["about-description"]}>
          <p>
            At <strong>ZEPP SUSHI</strong>, we are passionate about bringing the
            authentic flavors of Japan to your doorstep. We believe that sushi
            and ramen are more than just dishes; they're culinary experiences
            that connect people through taste and culture.
          </p>
          <p>
            Founded in 1900, <strong>ZEPP SUSHI</strong> started as a humble
            dream shared by <strong>Shubhransu Biswal</strong>. Their shared
            love for Japanese cuisine, combined with a desire to provide
            exceptional service, led to the creation of this online platform.
            What began as a small venture has now grown into a thriving
            community of sushi and ramen enthusiasts.
          </p>
        </div>

        <div className={style.achievment}>
          <div className={style["achievment-description1"]}>
            <p>
              At our esteemed sushi establishment, we take immense pride in our
              culinary team, whose unmatched expertise and dedication ensure
              that every dish is crafted to perfection. Our accomplished chefs
              are renowned for their skill and precision in preparing exquisite
              sushi, making each visit to our restaurant an exceptional dining
              experience.
            </p>
          </div>
          <div className={style["achievment-gif1"]}>
            <img src={chef} alt="" />
          </div>
        </div>
        <div className={style.achievment}>
          <div className={style["achievment-description2"]}>
            <p>
              At our distinguished sushi restaurant, we exclusively source the
              finest, freshest seafood available. Our commitment to quality
              means that we meticulously select top-class fish to create our
              sushi dishes. Every bite showcases the exceptional taste and
              freshness that sets us apart, ensuring an unparalleled dining
              experience for our valued patrons.
            </p>
          </div>
          <div className={style["achievment-gif2"]}>
            <img src={fish} alt="" />
          </div>
        </div>
      </section>
      <section className={style.contact} id="contact">
        <h3>CONTACT US</h3>
        <form action="#" onSubmit={submitHandler}>
          <div className={style["form-container"]}>
            <input
              ref={nameRef}
              type="text"
              id="name"
              placeholder="Enter Your Name"
              onChange={nameHandler}
              style={{
                borderBottom: isTextValid ? "3px solid green" : "3px solid red",
              }}
            />
            <label htmlFor="#name">Enter Your Name</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="Enter Your Email"
              onChange={emailHandler}
              style={{
                borderBottom: isEmailValid
                  ? "3px solid green"
                  : "3px solid red",
              }}
            />
            <label htmlFor="#email">Enter Your Email</label>
            <textarea
              ref={textareaRef}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="How can we be at your service?"
              onChange={textareaHandler}
              style={{
                borderBottom: isTextareaValid
                  ? "3px solid green"
                  : "3px solid red",
              }}
            ></textarea>
            <HomepageButton className="contactSubmit" type="submit">
              Submit
            </HomepageButton>
          </div>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
