import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function SignInForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const responseGoogle = (response) => {
    if (response.credential) {
      setTimeout(() => {
        navigate("/convert");
      }, 1500);

      // Extract relevant information from the response
      const { email, givenName, familyName } = jwtDecode(response.credential);

      // Use this information as needed, for example, send it to the server
      console.log("Email:", email);
      console.log("Given Name:", givenName);
      console.log("Family Name:", familyName);

      // Handle user data (e.g., send it to the server, store it in the state)
    } else {
      console.log("Google Sign-In failed:", response);
    }
  };

  let navigate = useNavigate();
  function navSignUp() {
    navigate("/signup");
  }
  function navforgot() {
    navigate("/forgot");
  }
  function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function signinHandler(e) {
    e.preventDefault();

    setEmailError("");

    if (!validateEmailFormat(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    let auth = JSON.parse(localStorage.getItem("users"));

    if (!auth) {
      alert("Please signUp first");
      console.log(auth);
      return;
    }

    if (auth[email]) {
      let userPassword = auth[email].password;
      if (userPassword === password) {
        alert("Success! You are now signed in.");
        onSuccess();
      } else {
        alert("Invalid password. Please try again.");
      }
    } else if (email === "" || password === "") {
      alert("Fields are empty");
    } else {
      alert("User with this email does not exist.");
    }
  }

  return (
    <div className="formBack ">
      <div className="row d-flex justify-content-center  align-items-center w-100 ">
        <div className="col-md-8 rounded-3">
          <div className="heading ">
            <h1>currency</h1>

            <h1>converter</h1>
            <p>
              Seamlessly Convert Currencies, Empowering Your Finances Across the
              Globe.
            </p>
          </div>
        </div>
        {/* 88 */}
        <div className="col-md-4 ">
          <form className="formx ">
            <div className="mb-3">
              <h2>Sign In </h2>
              <label htmlFor="email " className="form-label">
                Email address
              </label>
              <div className="input-group mb-3 ">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
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
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-lock"></i>
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
                <h6>Don't have an account !</h6>
              </div>
              <div
                className="col-sm-4 text-primary d-flex flex-row justify-content-start  mt-3 "
                style={{ cursor: "pointer" }}
              >
                <h6 onClick={navSignUp}>SignUp</h6>
              </div>
              <div className="col-sm-12 d-flex justify-content-center mt-2 w-100">
                <GoogleLogin
                  clientId="764710845627-qo1r0ojmaoo967a7i7638ja2qsg8sjvt.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
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
      </div>
    </div>
  );
}

export default SignInForm;
