import React, { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signupHandler(e) {
    e.preventDefault();
    let auth = JSON.parse(localStorage.getItem("users")) || {};
    console.log(auth);

    if (auth[email]) {
      alert("Account already exists");
    } else if (email == "" || password == "") {
      alert("Please fill all fields");
    } else {
      auth[email] = { email, password };
      localStorage.setItem("users", JSON.stringify(auth));
      alert("Sign Up Successful");
    }
  }

  return (
    <div className="formBack">
      <form className="formx">
        <div className="mb-3">
          <h2>Sign Up </h2>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <div class="input-group mb-3">
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
        <button
          type="submit"
          className="btn btn-primary w-100 "
          onClick={signupHandler}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
