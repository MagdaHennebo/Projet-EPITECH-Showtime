import React, { useEffect } from "react";
const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });
  return (
    <div class="grid grid-cols">
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <div className="divForm">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
