import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import MealsRoot from "./pages/MealsPages/MealsRoot";
import MealsPageOne from "./pages/MealsPages/MealsPageOne";
import MealsPageTwo from "./pages/MealsPages/MealsPageTwo";
import MealsPageThree from "./pages/MealsPages/MealsPageThree";
import HomePage from "./pages/LandingPage/HomePage";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import { action as loginAction } from "./pages/authentication/Login";
import { action as signupAction } from "./pages/authentication/Signup";
import Error from "./pages/error/Error";
import { checkAuthLoader, tokenLoader } from "./utils/auth";
import { action as logoutAction } from "./utils/logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error></Error>,
    loader: tokenLoader,
    id: "root",
    children: [
      {
        path: "Home",
        element: <HomePage />,
      },
      {
        path: "signup",
        element: <Signup />,
        action: signupAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "Meals",
        element: <MealsRoot />,
        loader: checkAuthLoader,
        children: [
          {
            path: "",
            element: <MealsPageOne />,
          },
          {
            path: "one",
            element: <MealsPageOne />,
          },
          {
            path: "two",
            element: <MealsPageTwo />,
          },
          {
            path: "three",
            element: <MealsPageThree />,
          },
        ],
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
const RouterApp = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default RouterApp;
