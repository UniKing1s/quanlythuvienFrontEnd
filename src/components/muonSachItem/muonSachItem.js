import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
class MuonSachItem extends Component {
  onDelete = (maDocGia, maSach) => {
    if (window.confirm("Bạn chắc chắc muốn xóa không ?")) {
      //   console.log(maDocGia);
      this.props.onDelete(maDocGia, maSach);
    }
  };
  submitDaTra = (maDocGia, maSach) => {
    const ngayTra =
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
    if (window.confirm("Bạn chắc chắc đặt ngày trả là hôm nay ?")) {
      // console.log(maDocGia);
      this.props.updateDaTra(maDocGia, maSach, ngayTra);
    }
  };
  submitChuaTra = (maDocGia, maSach) => {
    const ngayTra = " ";
    if (window.confirm("Bạn chắc chắc id này chưa trả sách ?")) {
      // console.log(maDocGia);
      this.props.updateDaTra(maDocGia, maSach, ngayTra);
    }
  };
  render() {
    const { index, muonSachInf } = this.props;
    return (
      <tr className="">
        <td>{index + 1}</td>
        <td>{muonSachInf.maDocGia}</td>
        <td>{muonSachInf.maSach}</td>
        <td>
          <input
            type="datetime-local"
            id="birthdaytime"
            name="birthdaytime"
            value={muonSachInf.ngayMuon}
            disabled
          />
        </td>
        <td>
          {muonSachInf.ngayTra === "" || muonSachInf.ngayTra === " " ? (
            <></>
          ) : (
            <input
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
              value={muonSachInf.ngayTra}
              disabled
            />
          )}
        </td>
        <td>
          {muonSachInf.ngayTra === "" || muonSachInf.ngayTra === " " ? (
            <button
              className="btn btn-success mr-10 mb-3"
              style={{ marginRight: "3px", marginLeft: "3px" }}
              disabled
            >
              Chưa trả
            </button>
          ) : (
            <button
              className="btn btn-success mr-10 mb-3"
              style={{ marginRight: "3px", marginLeft: "3px" }}
              onClick={() =>
                this.submitChuaTra(muonSachInf.maDocGia, muonSachInf.maSach)
              }
            >
              Chưa trả
            </button>
          )}
          {muonSachInf.ngayTra === "" || muonSachInf.ngayTra === " " ? (
            <button
              type="button"
              className="btn btn-primary mr-10 mb-3"
              style={{ marginRight: "3px", marginLeft: "3px" }}
              onClick={() =>
                this.submitDaTra(muonSachInf.maDocGia, muonSachInf.maSach)
              }
            >
              Đã trả
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary mr-10 mb-3"
              style={{ marginRight: "3px", marginLeft: "3px" }}
              disabled
            >
              Đã trả
            </button>
          )}
          <button
            type="button"
            className="btn btn-danger mr-10 mb-3"
            style={{ marginRight: "3px", marginLeft: "3px" }}
            onClick={() =>
              this.onDelete(muonSachInf.maDocGia, muonSachInf.maSach)
            }
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default MuonSachItem;
