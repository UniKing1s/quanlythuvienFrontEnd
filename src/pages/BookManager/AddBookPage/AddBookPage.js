import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { NavLink } from "react-router-dom";
import "./AddBookPage.scss";
import bookApiCaller from "../../../utils/bookApiCaller";
class AddBookPage extends Component {
  state = {
    maSach: "",
    tenSach: "",
    tacGia: "",
    soTrang: "",
    tomTat: "",
    NXB: "",
    imgUrl: "",
  };
  onChange = (event) => {
    var target = event.target;
    var id = target.id;
    var value = target.value;
    this.setState({
      [id]: value,
    });
  };
  addBook = () => {
    bookApiCaller("", "post", this.state)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Thêm sách thành công");
        }
      })
      .catch((err) => {
        toast.error("Thêm sách thất bại thông tin thiếu");
      });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="container">
          <div
            className="container mt-10 w-50"
            style={{ border: "solid", borderRadius: "10px" }}
          >
            <div className="mt-10 w-90">
              <div className="form-floating mb-3">
                <h1>Thông tin sách</h1>
              </div>
              <div class="mb-3">
                <label for="maSach" class="form-label f-l">
                  Mã Sách
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="maSach"
                  placeholder="Mã sách"
                  value={this.state.maSach}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="tenSach" class="form-label f-l">
                  Tên Sách
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="tenSach"
                  placeholder="Tên Sách"
                  value={this.state.tenSach}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="tacGia" class="form-label f-l">
                  Tác Giả
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="tacGia"
                  placeholder="Tác giả"
                  value={this.state.tacGia}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="soTrang" class="form-label f-l">
                  Số Trang
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="soTrang"
                  placeholder="Số trang"
                  min={1}
                  value={this.state.soTrang}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="tomTat" class="form-label f-l">
                  Tóm tắt
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="tomTat"
                  placeholder="Tóm tắt"
                  maxLength={100}
                  value={this.state.tomTat}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="NXB" class="form-label f-l">
                  NXB
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="NXB"
                  placeholder="Nhà Xuất Bản"
                  value={this.state.NXB}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="imgUrl" class="form-label f-l">
                  Hình ảnh
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="imgUrl"
                  placeholder="Link ảnh"
                  value={this.state.imgUrl}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="form-floating mb-3">
                <img
                  className="imgAddProduct"
                  src={
                    this.state.imgUrl === ""
                      ? "https://product.hstatic.net/200000239353/product/100_ways_to_motivate_others-01_d59bf4b009bd48e7aca9dc48b190761f_master.jpg"
                      : this.state.imgUrl
                  }
                  alt=""
                ></img>
              </div>
              <div className="form-floating mb-3">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={() => this.addBook()}
                >
                  Thêm Sách
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
      </div>
    );
  }
}

export default AddBookPage;
