import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./BookItemTable.scss";
class BookItemTable extends Component {
  onDelete = (maSach) => {
    if (window.confirm("Bạn chắc chắc muốn xóa không ?")) {
      console.log(maSach);
      this.props.onDelete(maSach);
    }
  };
  render() {
    const { index, book } = this.props;
    return (
      <tr className="">
        <td>{index + 1}</td>
        <td>{book.maSach}</td>
        <td>{book.tenSach}</td>
        <td>{book.tacGia}</td>
        <td>{book.soTrang}</td>
        <td>{book.tomTat}</td>
        <td>{book.NXB}</td>
        <td>
          <img
            src={book.imgUrl}
            className="img-fluid rounded-top rounded-bottom itemImg"
            alt=""
          />
        </td>
        <td>
          <NavLink
            to={"/editBook?maSach=" + book.maSach}
            className="btn btn-success mr-10 mb-3"
          >
            Sửa
          </NavLink>
          <button
            type="button"
            className="btn btn-danger mr-10"
            onClick={() => this.onDelete(book.maSach)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default BookItemTable;
