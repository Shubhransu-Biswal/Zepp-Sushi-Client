import React from "react";
import { Link, Form, json, redirect, useNavigation } from "react-router-dom";
import styles from "./Signup.module.css";
import { BASE_URL } from "../../helper";

function Signup() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className={styles.background}>
      <div className={styles.secondarybg}>
        <div className={styles.signupForm}>
          <h2>Sign Up</h2>
          <Form method="POST">
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <button>{isSubmitting ? "Signing Up..." : "Sign Up"}</button>
          </Form>
          <p>
            Already have an account?{" "}
            <Link to="/login" className={styles.switchLink}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

export async function action({ request, params }) {
  const data = await request.formData();
  const signupData = {
    userName: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };
  const response = await fetch(`${BASE_URL}/api/v1/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  if (!response.ok) {
    throw json({ message: "Erro occured while signing up" }, { status: 500 });
  }

  return redirect("/login");
}
