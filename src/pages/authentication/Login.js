import React, { useContext } from "react";
import { Link, Form, json, redirect, useNavigation } from "react-router-dom"; // Import Link
import styles from "./Signup.module.css";
import CartContext from "../../componenets/Store/cart-context";
import { BASE_URL } from "../../helper";
function Login() {
  console.log("running");
  const ctx = useContext(CartContext);
  ctx.clearCart();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className={styles.background}>
      <div className={styles.secondarybg}>
        <div className={styles.signupForm}>
          <h2>Log In</h2>
          <Form method="POST">
            <input type="email" placeholder="Email" name="loginEmail" />
            <input
              type="password"
              placeholder="Password"
              name="loginPassword"
            />
            <button>{isSubmitting ? "Logging In..." : "Log In"}</button>
          </Form>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className={styles.switchLink}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

export async function action({ request, params }) {
  const data = await request.formData();
  const signupData = {
    email: data.get("loginEmail"),
    password: data.get("loginPassword"),
  };
  const response = await fetch(`${BASE_URL}/api/v1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  if (!response.ok) {
    throw json({ message: "Erro occured while signing up" }, { status: 500 });
  }

  // GETTING THE TOKEN
  const resData = await response.json();
  const token = resData.token;

  // Setting the token in local storage
  localStorage.setItem("token", token);

  const expiration = new Date();

  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/Meals");
}
