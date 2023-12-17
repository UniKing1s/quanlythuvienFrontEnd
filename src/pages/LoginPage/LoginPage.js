import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div classname="container">
        <div
          className="container mt-10 w-50"
          style={{ border: "solid", borderRadius: "10px" }}
        >
          <div className="mt-10 w-90">
            <div className="form-floating mb-3">
              <h1>Đăng Nhập</h1>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Tài khoản</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Mật khẩu</label>
            </div>
            <div className="form-floating mb-3">
              <button type="button" class="btn btn-primary w-100">
                Đăng nhập
              </button>
            </div>
            <div className="form-floating mb-3">
              <NavLink
                type="button"
                class="btn btn-primary w-50"
                to="/register"
                // style={{ float: "left" }}
              >
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
