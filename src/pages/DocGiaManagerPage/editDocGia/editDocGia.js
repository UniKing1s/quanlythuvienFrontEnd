import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { docGiaApiCaller } from "../../../utils/bookApiCaller";
import { useParams } from "react-router-dom";

const EditDocGia = (props) => {
  const [name, setName] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  //   const [ngayTao, setNgayTao] = useState("");
  // const []
  const docGia = useRef();
  const { maDocGia } = useParams();
  console.log(maDocGia);
  const [loading, setLoading] = useState(true);
  console.log(docGia + loading);
  useEffect(() => {
    return async () =>
      await docGiaApiCaller("byId/", "put", { maDocGia: maDocGia })
        .then((res) => {
          if (res.status === 200) {
            setName(res.data.tenDocGia);
            setNgaySinh(res.data.ngaySinh);
            setLoading(false);
          }
        })
        .catch((err) => {
          toast.error("Lỗi tìm dữ liệu");
          setLoading(false);
        });
  }, [maDocGia]);

  const handleDocGiaName = (e) => {
    setName(e.target.value);
  };
  const addSubmit = async () => {
    const docGia = {
      maDocGia: maDocGia,
      tenDocGia: name,
      ngaySinh: ngaySinh,
      ngayTao:
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
    if (name !== "" && name !== " ") {
      await docGiaApiCaller("", "patch", docGia)
        .then((res) => {
          toast.success("Cập nhật thông tin thành công");
        })
        .catch((err) => {
          toast.error("Lỗi cập nhật thông tin");
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
              value={name}
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
              value={ngaySinh.toString()}
              onChange={(e) => setNgaySinh(e.target.value)}
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
                Cập nhật
              </button>
            ) : (
              <button type="button" className="btn btn-primary w-100" disabled>
                Cập nhật
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

export default EditDocGia;
