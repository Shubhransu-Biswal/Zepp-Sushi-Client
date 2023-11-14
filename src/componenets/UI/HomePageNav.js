import React from "react";
import { HashLink } from "react-router-hash-link";
import style from "./HomePageNav.module.css";
import { Link, Form, useRouteLoaderData } from "react-router-dom";
const HomePageNav = () => {
  const token = useRouteLoaderData("root");
  return (
    <header>
      <nav className={style.navigation} id="navigation">
        <div className={style.navBackground}></div>
        <ul>
          <li>
            <HashLink to={"#navigation"} smooth>
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink to={"#order"} smooth>
              BUY
            </HashLink>
          </li>
          <li>
            <HashLink to={"#about"} smooth>
              ABOUT
            </HashLink>
          </li>
          <li>
            <HashLink to={"#contact"} smooth>
              CONTACT US
            </HashLink>
          </li>
          {token ? (
            <li>
              <Form action="/logout" method="POST" className={style.logout}>
                <button>LOG OUT</button>
              </Form>
            </li>
          ) : (
            <ul className={style.loglist}>
              <li>
                <Link to="/login" className={style.log}>
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" className={style.signup}>
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HomePageNav;
