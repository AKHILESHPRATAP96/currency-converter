import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const nav = useNavigate();

  function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function signupHandler(e) {
    e.preventDefault();

    setEmailError("");

    if (!validateEmailFormat(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    let auth = JSON.parse(localStorage.getItem("users")) || {};
    console.log(auth);

    if (auth[email]) {
      alert("Account already exists");
    } else if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      auth[email] = { email, password };
      localStorage.setItem("users", JSON.stringify(auth));
      alert("Sign Up Successful");
      nav("/");
    }
  }

  return (
    <div className="formBack">
      <div className="row d-flex justify-content-center  align-items-center  w-100 ">
        <div className="col-md-8 rounded-3">
          <div className="heading">
            <h1>currency</h1>
            <h1>converter</h1>
            <p>
              Seamlessly Convert Currencies, Empowering Your Finances Across the
              Globe.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <form className="formx w-100">
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
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <div className="invalid-feedback">{emailError}</div>
                )}
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

            {/* ** */}
            <div className="row d-flex flex-row align-item-center ">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-primary w-100 "
                  onClick={signupHandler}
                >
                  Sign Up
                </button>
              </div>
              <div className="col-sm-8 d-flex flex-row justify-content-end mt-3   ">
                <h6>Have an account !</h6>
              </div>
              <div
                className="col-sm-4 text-primary d-flex flex-row justify-content-start  mt-3 "
                style={{ cursor: "pointer" }}
              >
                <h6
                  onClick={() => {
                    nav("/");
                  }}
                >
                  SignIn
                </h6>
              </div>
              <div
                className="col-sm-12 text-primary d-flex flex-row justify-content-center  mt-3 "
                style={{ cursor: "pointer" }}
              >
                <h6
                  onClick={() => {
                    nav("/forgot");
                  }}
                >
                  Forget Password?
                </h6>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
