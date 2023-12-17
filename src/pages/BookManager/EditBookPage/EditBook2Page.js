import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import bookApiCaller from "../../../utils/bookApiCaller";
const EditBook2Page = () => {
  // const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [maSach, setMaSach] = useState("");
  const [tenSach, setTenSach] = useState("");
  const [tacGia, setTacGia] = useState("");
  const [soTrang, setSoTrang] = useState(0);
  const [tomTat, setTomTat] = useState("");
  const [NXB, setNXB] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  //   useEffect(() => {
  //     getParamAndGetInfo();
  //   });

  const getParamAndGetInfo = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // const params = new URLSearchParams(search);
    const foo = urlParams.get("maSach");
    const words = foo.toString().split("%20");
    getInfoBook(words[0]);
  };
  const getInfoBook = (id) => {
    console.log(id);
    const bookID = { maSach: id };
    console.log(bookID);
    bookApiCaller("byId/", "put", bookID)
      .then((res) => {
        setMaSach(res.data.maSach);
        setTenSach(res.data.tenSach);
        setTacGia(res.data.tacGia);
        setSoTrang(res.data.soTrang);
        setTomTat(res.data.tomTat);
        setNXB(res.data.NXB);
        setImgUrl(res.data.imgUrl);
        console.log(res.data);
        // setId(id);
      })
      .catch((err) => {
        toast.error("Không có sách tương ứng");
      });
  };
  if (loading) {
    getParamAndGetInfo();
    setLoading(false);
  }
  const updateBook = () => {
    const book = {
      maSach: maSach,
      tenSach: tenSach,
      tacGia: tacGia,
      soTrang: soTrang,
      tomTat: tomTat,
      NXB: NXB,
      imgUrl: imgUrl,
    };
    bookApiCaller("", "patch", book).then((res) => {
      if (res.status === 200) {
        toast.success("Cập nhật sách mã " + maSach + " thành công");
      } else {
        toast.error("Cập nhật thất bại thông tin không hợp lệ");
      }
    });
  };

  return (
    <div>
      <ToastContainer />
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="container">
          <div
            className="container mt-10 w-50"
            style={{ border: "solid", borderRadius: "10px" }}
          >
            <div className="mt-10 w-90">
              <div className="form-floating mb-3">
                <h1>Thông tin sách</h1>
                <NavLink
                  className="btn btn-primary"
                  style={{
                    with: "20%",
                    float: "right",
                    display: "inline",
                  }}
                  to="/listBook"
                >
                  Hủy
                </NavLink>
              </div>
              <div className="mb-3">
                <label htmlFor="maSach" className="form-label f-l">
                  Mã Sách
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maSach"
                  placeholder="Mã sách"
                  value={maSach}
                  // onChange={(e) => setMaSach(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tenSach" className="form-label f-l">
                  Tên Sách
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tenSach"
                  placeholder="Tên Sách"
                  value={tenSach}
                  onChange={(e) => setTenSach(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tacGia" className="form-label f-l">
                  Tác Giả
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tacGia"
                  placeholder="Tác giả"
                  value={tacGia}
                  onChange={(e) => setTacGia(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="soTrang" className="form-label f-l">
                  Số Trang
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="soTrang"
                  placeholder="Số trang"
                  min={1}
                  value={soTrang}
                  onChange={(e) => setSoTrang(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tomTat" className="form-label f-l">
                  Tóm tắt
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tomTat"
                  placeholder="Tóm tắt"
                  value={tomTat}
                  onChange={(e) => setTomTat(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="NXB" className="form-label f-l">
                  NXB
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="NXB"
                  placeholder="Nhà Xuất Bản"
                  value={NXB}
                  onChange={(e) => setNXB(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imgUrl" className="form-label f-l">
                  Hình ảnh
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imgUrl"
                  placeholder="Link ảnh"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
              </div>
              <div className="form-floating mb-3">
                <img
                  className="imgAddProduct"
                  src={
                    imgUrl === ""
                      ? "https://product.hstatic.net/200000239353/product/100_ways_to_motivate_others-01_d59bf4b009bd48e7aca9dc48b190761f_master.jpg"
                      : imgUrl
                  }
                  alt=""
                ></img>
              </div>
              <div className="form-floating mb-3">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={() => updateBook()}
                >
                  Sửa thông tin
                </button>
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
      )}
    </div>
  );
};

export default EditBook2Page;
