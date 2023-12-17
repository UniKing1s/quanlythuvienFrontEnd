import React, { useState } from "react";
import { docGiaApiCaller } from "../../../utils/bookApiCaller";
// import { NavLink } from "react-router-dom";
// import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "react-datepicker/dist/react-datepicker.css";
const AddDocGia = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(
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
        : new Date().getMinutes())
  );
  const [maDocGia, setMaDocGia] = useState("");
  //   const [date, setDate] = useState(new Date());
  console.log("date " + date);
  //   console.log(datetime);

  //   useEffect(() => {
  //     console.log(date.toString());
  //   }, [date]);
  const handleDocGiaName = (e) => {
    setName(e.target.value);
    setMaDocGia(
      new Date().getFullYear() +
        (new Date().getMonth() + 1 < 10
          ? "0" + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1) +
        "" +
        (new Date().getUTCDate() < 10
          ? "0" + new Date().getUTCDate()
          : new Date().getUTCDate()) +
        "" +
        (new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours()) +
        "" +
        (new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes()) +
        "" +
        (new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds()) +
        "" +
        new Date().getMilliseconds()
    );
  };
  const addSubmit = () => {
    ///Ngày tạo phù hợp form
    const ngayTao =
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
        : new Date().getMinutes());
    ////
    if (name !== "" && name !== " ") {
      docGiaApiCaller("", "post", {
        maDocGia: maDocGia,
        tenDocGia: name,
        ngaySinh: date.toString(),
        ngayTao: ngayTao,
      })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Đăng ký độc giả thành công");
          } else {
            toast.warning(res.data.info);
          }
        })
        .catch((err) => {
          toast.error("Đăng ký độc giả thất bại");
        });
    }
  };
  return (
    <div classname="container">
      <ToastContainer />
      <div
        className="container mt-10 w-50"
        style={{ border: "solid", borderRadius: "10px" }}
      >
        <div className="mt-10 w-90">
          <div className="form-floating mb-3">
            <h1>Thông tin Độc Giả</h1>
          </div>
          <label htmlFor="password" className="form-label f-l">
            Tên độc giả
          </label>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Tên đọc giả"
              onChange={(e) => {
                handleDocGiaName(e);
              }}
            />
          </div>
          <label htmlFor="userName" className="form-label f-l">
            Mã Độc Giả
          </label>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Tài khoản"
              value={maDocGia}
              disabled
            />
          </div>
          {/* <label htmlFor="password" className="form-label f-l">
            Mật khẩu
          </label>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Mật khẩu"
            />
          </div> */}
          <label
            htmlFor="dateOfBirth"
            className="form-label f-l"
            style={{ marginRight: "10px" }}
          >
            Ngày sinh
          </label>
          <div className="form-floating mb-3 f-l">
            <input
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {/* <DatePicker
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
              selected={date}
              onChange={(e) => setDate(e)}
            /> */}
          </div>
          <br></br>
          <div className="form-floating mb-3">
            {name !== "" && name !== " " ? (
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={() => addSubmit()}
              >
                Đăng ký
              </button>
            ) : (
              <button type="button" className="btn btn-primary w-100" disabled>
                Đăng ký
              </button>
            )}
          </div>
          {/* <div className="form-floating mb-3">
            <NavLink
              type="button"
              className="btn btn-primary w-50"
              to="/login"
              // style={{ position: "absolute", left: "auto" }}
            >
              Đăng nhập
            </NavLink>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddDocGia;
