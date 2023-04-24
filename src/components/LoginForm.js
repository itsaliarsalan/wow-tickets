import React from "react";
import "./Style.css";

function LoginForm() {
  return (
    <section className="component sign-in">
      <div className="container">
        <h1>Hey, Welcome Back!</h1>
        <h4>Provide required info to login.</h4>
        <form className="login" action="">
          <input type="text" placeholder="Username" required="" />
          <input type="password" placeholder="Password" required="" />
          <button type="submit" className="btn btn-main">
            Login
          </button>
          <a href="#">Forgot Password?</a>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
