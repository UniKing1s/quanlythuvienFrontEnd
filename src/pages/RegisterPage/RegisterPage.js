import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./RegisterPage.scss";
class RegisterPage extends Component {
  // "2023-12-07T21:52"
  state = {
    date:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1) +
      "-" +
      (new Date().getUTCDate() < 10
        ? "0" + new Date().getUTCDate()
        : new Date().getUTCDate()) +
      "T" +
      (new Date().getHours() < 10
        ? "0" + new Date().getHours()
        : new Date().getHours()) +
      ":" +
      (new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes()),
  };
  render() {
    console.log("date " + this.date);
    console.log(this.datetime);
    return (
      <div classname="container">
        <div
          className="container mt-10 w-50"
          style={{ border: "solid", borderRadius: "10px" }}
        >
          <div className="mt-10 w-90">
            <div className="form-floating mb-3">
              <h1>Đăng Ký</h1>
            </div>
            <label htmlFor="password" className="form-label f-l">
              Tên đọc giả
            </label>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Tên đọc giả"
              />
            </div>
            <label htmlFor="userName" className="form-label f-l">
              Tài khoản
            </label>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Tài khoản"
              />
            </div>
            <label htmlFor="password" className="form-label f-l">
              Mật khẩu
            </label>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Mật khẩu"
              />
            </div>
            <label htmlFor="dateOfBirth" className="form-label f-l">
              Ngày sinh
            </label>
            <div className="form-floating mb-3 f-l">
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
                value={this.state.date}
              />
            </div>
            <div className="form-floating mb-3">
              <button type="button" className="btn btn-primary w-100">
                Đăng ký
              </button>
            </div>
            <div className="form-floating mb-3">
              <NavLink
                type="button"
                className="btn btn-primary w-50"
                to="/login"
                // style={{ position: "absolute", left: "auto" }}
              >
                Đăng nhập
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
