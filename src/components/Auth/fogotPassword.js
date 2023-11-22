import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  let nav = useNavigate();

  function resetPasswordHandler(e) {
    e.preventDefault();
    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || {};

    // Check if the user with the entered email exists
    if (users[email]) {
      // Update the password for the user in local storage

      users[email].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Password reset successfully!");
      nav("/");
    } else if (newPassword == "" || email == "") {
      alert("Please fill all fields");
    } else {
      alert("User with this email does not exist.");
    }
  }

  return (
    <div className="formBack">
      <div className="heading">
        <h1>currency</h1>
        <h1>converter</h1>
        <p>
          Seamlessly Convert Currencies, Empowering Your Finances Across the
          Globe.
        </p>
      </div>
      <form className="formx">
        <div className="mb-3">
          <h2>Reset Password </h2>
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
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="bi bi-person-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>

        {/* ** */}
        <div className="row d-flex flex-row align-item-center ">
          <div className="col-sm-12">
            <button
              type="submit"
              className="btn btn-primary w-100 "
              onClick={resetPasswordHandler}
            >
              Reset Password
            </button>
          </div>
          <div className="col-sm-7 d-flex flex-row justify-content-end mt-3   ">
            <h6>Or go back to</h6>
          </div>
          <div
            className="col-sm-2 text-primary d-flex flex-row justify-content-end  mt-3 "
            style={{ cursor: "pointer" }}
          >
            <h6
              onClick={() => {
                nav("/");
              }}
            >
              signIn
            </h6>
          </div>
          <div
            className="col-sm-2 text-primary d-flex flex-row justify-content-center  mt-3 "
            style={{ cursor: "pointer" }}
          >
            <h6
              onClick={() => {
                nav("/signup");
              }}
            >
              signUp
            </h6>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
