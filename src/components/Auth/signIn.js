import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  function navSignUp() {
    navigate("/signup");
  }
  function navforgot() {
    navigate("/forgot");
  }

  function signinHandler(e) {
    e.preventDefault();
    let auth = JSON.parse(localStorage.getItem("users"));

    if (auth[email]) {
      let userPassword = auth[email].password;
      if (userPassword === password) {
        alert("Success! You are now signed in.");
        onSuccess();
      } else {
        alert("Invalid password. Please try again.");
      }
    } else if (email == "" || password == "") {
      alert("fields are empty");
    } else {
      alert("User with this email does not exist.");
    }
  }

  return (
    <div className="formBack">
      <form className="formx">
        <div className="mb-3">
          <h2>Sign In </h2>
          <label htmlFor="email " className="form-label">
            Email address
          </label>
          <div class="input-group mb-3 ">
            <span class="input-group-text">
              <i class="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="bi bi-person-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row d-flex flex-row align-item-center ">
          <div className="col-sm-12">
            <button
              type="submit"
              className="btn btn-primary w-100 "
              onClick={signinHandler}
            >
              Sign In
            </button>
          </div>
          <div className="col-sm-8 d-flex flex-row justify-content-end mt-3   ">
            <h6>dont have an account</h6>
          </div>
          <div
            className="col-sm-4 text-primary d-flex flex-row justify-content-start  mt-3 "
            style={{ cursor: "pointer" }}
          >
            <h6 onClick={navSignUp}>sign Up</h6>
          </div>
          <div
            className="col-sm-12 text-primary d-flex flex-row justify-content-center  mt-3 "
            style={{ cursor: "pointer" }}
          >
            <h6 onClick={navforgot}>Forget Password?</h6>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;