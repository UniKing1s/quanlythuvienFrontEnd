import React, { Component } from "react";
import bookApiCaller from "../../../utils/bookApiCaller";
import BookItemTable from "../../../components/BookItemTable/BookItemTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import "./BookListPage.scss";
class BookListPage extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    bookApiCaller("", "get", null).then((res) => {
      this.setState({
        books: res.data,
      });
      this.loading = false;
    });
  }
  showBookItem = (books) => {
    var result = null;
    if (this.state.books.length > 0) {
      result = this.state.books.map((book, index) => {
        return (
          <BookItemTable
            key={index}
            book={book}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
  onDelete = (maSach) => {
    var { books } = this.state;
    const ma = { maSach: maSach };
    bookApiCaller("", "delete", ma).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success("Xóa sách mã " + maSach + " thành công");
        var index = books.findIndex((obj) => obj.maSach === maSach);
        if (index !== -1) {
          books.splice(index, 1);
          this.setState({
            books: books,
          });
        }
      }
    });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="container">
          <div className="container mt-10 w90" style={{ border: "solid" }}>
            <div className="form-floating mb-3 w-100">
              <NavLink className="btn btn-primary w-100 mt-3" to="/addBook">
                Thêm Sách
              </NavLink>
            </div>
            <table
              className="table table-primary w-100"
              style={{ fontSize: "auto" }}
            >
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Mã Sách</th>
                  <th scope="col">Tên Sách</th>
                  <th scope="col">Tác Giả</th>
                  <th scope="col">Số Trang</th>
                  <th scope="col">Tóm Tắt</th>
                  <th scope="col">NXB</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>{this.showBookItem()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BookListPage;
