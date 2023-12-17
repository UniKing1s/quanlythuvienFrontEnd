import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
// import * as qs from "qs";
import "react-toastify/dist/ReactToastify.css";
// import { NavLink } from "react-router-dom";
// import "./AddBookPage.scss";
import bookApiCaller from "../../../utils/bookApiCaller";
class EditBookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      book: {
        maSach: "",
        tenSach: "",
        tacGia: "",
        soTrang: "",
        tomTat: "",
        NXB: "",
        imgUrl: "",
      },
    };
  }
  informationCheck = false;
  componentDidMount() {
    this.getParamAndGetInfo();
  }
  getInfoBook = (id) => {
    const _id = { maSach: id };
    bookApiCaller("byId/", "get", _id)
      .then((res) => {
        this.setState({ book: res.data });
        this.informationCheck = true;
      })
      .catch((err) => {
        toast.error("Không có sách tương ứng");
        this.informationCheck = false;
      });
  };
  getParamAndGetInfo = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get("maSach");
    const words = foo.split("%20");
    this.getInfoBook(words[0]);
  };

  // addBook = () => {
  //   bookApiCaller("", "post", this.state)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         toast.success("Thêm sách thành công");
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error("Thêm sách thất bại thông tin thiếu");
  //     });
  // };
  render() {
    // this.getParamAndGetInfo();
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
                  value={this.state.book.maSach}
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
                  value={this.state.book.tenSach}
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
                  value={this.state.book.tacGia}
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
                  value={this.state.book.soTrang}
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
                  value={this.state.book.tomTat}
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
                  value={this.state.book.NXB}
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
                  value={this.state.book.imgUrl}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="form-floating mb-3">
                <img
                  className="imgAddProduct"
                  src={
                    this.state.book.imgUrl === ""
                      ? "https://product.hstatic.net/200000239353/product/100_ways_to_motivate_others-01_d59bf4b009bd48e7aca9dc48b190761f_master.jpg"
                      : this.state.book.imgUrl
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

export default EditBookPage;
