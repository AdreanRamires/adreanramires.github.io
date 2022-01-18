import React, { useState, Fragment } from "react";
import styles from "./Login.module.css";

const Login = () => {

  return (
    <section className={styles["login-wrapper"]}>
      <section className={styles["login-side-a"]}>
        <article className={styles["side-a-inner"]}>
          <h1 className={styles["side-a-heading"]}>
            Welcome to <br /> Fitness Mate
          </h1>

          <div className={styles["sign-in-wrapper"]}>
            <p className={styles.registered}>Already have an account?</p>
            <a href="" className={styles["sign-in"]}>Sign in</a>
          </div>
        </article>
      </section>

      <section className={styles["login-side-b"]}>
        <h2 className={styles["side-b-heading"]}>Sign up</h2>

        <form action="" className={styles.form}>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="email" className={styles["input-label"]}>
              Email address
            </label>
            <input
              type="email"
              className={styles.input}
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles["input-wrapper"]}>
            <label htmlFor="password" className={styles["input-label"]}>
              Password
            </label>
            <input
              type="password"
              className={styles.input}
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className={styles["input-wrapper-checkbox"]}>
            <input type="checkbox" className={styles.checkbox} id="checkbox" />
            <label htmlFor="checkbox">Show password</label>
          </div>

          <button type="submit" className={styles["btn"]}>
            Sign up
            <i className={`far fa-arrow-alt-circle-right ${styles.icon}`}></i>
          </button>
        </form>

        <span className={styles.or}>or</span>
        <button className={styles["btn"]}>
          <i class={`fab fa-google ${styles.icon}`}></i>Continue with Google
        </button>
      </section>
    </section>
  );
};

export default Login;
