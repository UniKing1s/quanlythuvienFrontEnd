import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bookApiCaller, {
  docGiaApiCaller,
  muonSachApiCaller,
} from "../../utils/bookApiCaller";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class MBPage extends Component {
  state = {
    maDocGia: "",
    maSach: "",
    loading: false,
    // ngayTra: "",
    // new Date().getFullYear() +
    // "-" +
    // (new Date().getMonth() + 1 < 10
    //   ? "0" + (new Date().getMonth() + 1)
    //   : new Date().getMonth() + 1) +
    // "-" +
    // (new Date().getUTCDate() < 10
    //   ? "0" + new Date().getUTCDate()
    //   : new Date().getUTCDate()) +
    // "T" +
    // (new Date().getHours() < 10
    //   ? "0" + new Date().getHours()
    //   : new Date().getHours()) +
    // ":" +
    // (new Date().getMinutes() < 10
    //   ? "0" + new Date().getMinutes()
    //   : new Date().getMinutes()),
  };
  changeMaDocGia = (e) => {
    this.setState({
      maDocGia: e.target.value,
    });
  };
  changeMaSach = (e) => {
    this.setState({
      maSach: e.target.value,
    });
  };
  // changeDate = (e) => {
  //   this.setState({
  //     ngayTra: e.target.value,
  //   });
  // };
  onSubmit = async () => {
    this.setState({
      loading: true,
    });
    const thongTin = {
      ngayMuon:
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
      maDocGia: this.state.maDocGia,
      maSach: this.state.maSach,
    };
    try {
      await bookApiCaller("byId/", "put", thongTin)
        .then((res) => {
          if (res.status === 200) {
            docGiaApiCaller("byId/", "put", thongTin)
              .then((res) => {
                if (res.status === 200) {
                  muonSachApiCaller("", "post", thongTin)
                    .then((res) => {
                      if (res.status === 200) {
                        toast.success("Thêm thông tin mượn sách thành công");
                      } else {
                        toast.warning(res.data.info);
                      }
                    })
                    .catch((err) => {
                      toast.error("Mã đăng ký lỗi");
                    });
                }
              })
              .catch((err) => {
                toast.warning("Độc giả không tồn tại");
              });
          }
        })
        .catch((err) => {
          toast.warning("Sách không tồn tại");
        });
    } catch (error) {
    } finally {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 2000);
    }
  };
  render() {
    return (
      <div classname="container">
        <ToastContainer />
        <div
          className="container mt-10 w-50"
          style={{ border: "solid", borderRadius: "10px" }}
        >
          <div className="mt-10 w-90">
            <div className="form-floating mb-3">
              <h1>Thông tin mượn sách</h1>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="maDocGia"
                placeholder="Mã độc giả"
                value={this.state.maDocGia}
                onChange={(e) => this.changeMaDocGia(e)}
              />
              <label htmlFor="floatingInput">Mã độc giả</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="maSach"
                placeholder="Mã sách"
                value={this.state.maSach}
                onChange={(e) => this.changeMaSach(e)}
              />
              <label htmlFor="floatingPassword">Mã sách</label>
            </div>
            {/* <label
              htmlFor="dateOfBirth"
              className="form-label f-l"
              style={{ marginRight: "10px" }}
            >
              Ngày trả sách
            </label>
            <div className="form-floating mb-3 f-l">
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
                value={this.state.ngayTra.toString()}
                onChange={(e) => this.changeDate(e)}
              />
            </div> */}
            {/* <label htmlFor="birthdaytime f-l">Ngày trả sách</label>

            <div className="form-floating mb-3">
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
                value={this.state.date.toString()}
                onChange={(e) => this.changeDate(e)}
              />
            </div> */}
            <br></br>
            <div className="form-floating mb-3">
              {this.state.loading ? (
                <></>
              ) : this.state.maDocGia === "" ||
                this.state.maDocGia === " " ||
                this.state.maSach === "" ||
                this.state.maSach === " " ? (
                <button type="button" class="btn btn-primary w-100" disabled>
                  Xác nhận thông tin mượn sách
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-primary w-100"
                  onClick={this.onSubmit}
                >
                  Xác nhận thông tin mượn sách
                </button>
              )}
            </div>
            <div className="form-floating mb-3">
              <NavLink
                type="button"
                class="btn btn-primary w-50"
                to="/register"
                // style={{ float: "left" }}
              >
                Trả sách
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MBPage;
