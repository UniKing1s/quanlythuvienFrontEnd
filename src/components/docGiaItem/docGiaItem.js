import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class DocGiaItem extends Component {
  onDelete = (maDocGia) => {
    if (window.confirm("Bạn chắc chắc muốn xóa không ?")) {
      console.log(maDocGia);
      this.props.onDelete(maDocGia);
    }
  };
  render() {
    const { index, docGia } = this.props;
    return (
      <tr className="">
        <td>{index + 1}</td>
        <td>{docGia.maDocGia}</td>
        <td>{docGia.tenDocGia}</td>
        <td>
          <input
            type="datetime-local"
            id="birthdaytime"
            name="birthdaytime"
            value={docGia.ngaySinh}
            disabled
          />
        </td>
        <td>
          <input
            type="datetime-local"
            id="birthdaytime"
            name="birthdaytime"
            value={docGia.ngayTao}
            disabled
          />
        </td>
        <td>
          <NavLink
            to={"/editDocGia/" + docGia.maDocGia}
            className="btn btn-success mr-10 mb-3"
            style={{ marginRight: "3px", marginLeft: "3px" }}
          >
            Sửa
          </NavLink>
          <button
            type="button"
            className="btn btn-danger mr-10 mb-3"
            style={{ marginRight: "3px", marginLeft: "3px" }}
            onClick={() => this.onDelete(docGia.maDocGia)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default DocGiaItem;
