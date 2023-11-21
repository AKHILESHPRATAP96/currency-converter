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
        <button
          type="submit"
          className="btn btn-primary w-100 "
          onClick={resetPasswordHandler}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
