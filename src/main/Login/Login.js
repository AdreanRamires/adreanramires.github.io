import React, { useState, useEffect, useRef } from "react";
import styles from "./Login.module.css";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInPage, setSignInPage] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  const showPasswordHandler = (e) => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };

  const signInSingUpToggleHanlder = (e) => {
    e.preventDefault();
    setSignInPage((prevState) => {
      return !prevState;
    });
  };

  const onSignedInHandler = (e) => {
    e.preventDefault();
    setSignedIn((prevState) => {
      return !prevState;
    });
    props.signedIn(signedIn);
  };

  return (
    <section className={styles["login-wrapper"]}>
      <section className={styles["login-side-a"]}>
        <article className={styles["side-a-inner"]}>
          <h1 className={styles["side-a-heading"]}>
            Welcome to <br /> Fitness Mate
          </h1>

          <div className={styles["sign-in-wrapper"]}>
            <p className={styles.registered}>
              {signInPage
                ? "Don`t have an account?"
                : "Already have an account?"}
            </p>
            <a
              href=""
              onClick={signInSingUpToggleHanlder}
              className={styles["sign-in"]}
            >
              {signInPage ? "Sign up" : "Sign in"}
            </a>
          </div>
        </article>
      </section>

      <section className={styles["login-side-b"]}>
        <h2 className={styles["side-b-heading"]}>
          {signInPage ? "Sign in" : "Sign up"}
        </h2>

        <form action="" className={styles.form} onSubmit={onSignedInHandler}>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="email" className={styles["input-label"]}>
              Username
            </label>
            <input
              type="text"
              className={styles.input}
              id="email"
              placeholder="Enter your username"
            />
          </div>

          <div className={styles["input-wrapper"]}>
            <label htmlFor="password" className={styles["input-label"]}>
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div
            className={`${styles["input-wrapper"]} ${
              signInPage ? styles.inactive : ""
            }`}
          >
            <label htmlFor="password" className={styles["input-label"]}>
              Repeat password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              id="password"
              placeholder="Repeat your password"
            />
          </div>

          <div className={styles["input-wrapper-checkbox"]}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id="checkbox"
              onChange={showPasswordHandler}
            />
            <label htmlFor="checkbox">Show password</label>
          </div>

          <button type="submit" className={styles["btn"]}>
            {signInPage ? "Sign in" : "Sign up"}
            <i className={`far fa-arrow-alt-circle-right ${styles.icon}`}></i>
          </button>
        </form>

        <span className={styles.or}>or</span>
        <button className={styles["btn"]}>
          <i className={`fab fa-google ${styles.icon}`}></i>Continue with Google
        </button>
      </section>
    </section>
  );
};

export default Login;
