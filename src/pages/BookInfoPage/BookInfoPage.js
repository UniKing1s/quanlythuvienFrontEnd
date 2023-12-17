import React, { Component } from "react";
import bookApiCaller from "../../utils/bookApiCaller";
import { toast, ToastContainer } from "react-toastify";

class BookInfoPage extends Component {
  state = {
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
  loading = true;
  getParamAndGetInfo = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // const params = new URLSearchParams(search);
    const foo = urlParams.get("maSach");
    const words = foo.toString().split("%20");
    this.getInfoBook(words[0]);
  };
  getInfoBook = (id) => {
    console.log(id);
    const bookID = { maSach: id };
    console.log(bookID);
    bookApiCaller("byId/", "put", bookID)
      .then((res) => {
        this.setState({
          book: res.data,
        });
        console.log(res.data);
        // setId(id);
      })
      .catch((err) => {
        toast.error("Không có sách tương ứng");
      });
  };
  render() {
    if (this.loading) {
      this.getParamAndGetInfo();
      this.loading = false;
    }
    return (
      <div>
        <ToastContainer />
        <div>
          <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img
                    className="card-img-top mb-5 mb-md-0"
                    src={this.state.book.imgUrl}
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  {/* <div className="small mb-1">SKU: BST-498</div> */}
                  <h1 className="display-5 fw-bolder">
                    {this.state.book.tenSach}
                  </h1>
                  <div className="fs-5 mb-5">
                    {/* <span className="text-decoration-line-through">$45.00</span> */}
                    <span>Tác giả: {this.state.book.tacGia}</span>
                  </div>
                  <p className="lead">{this.state.book.tomTat}</p>
                  <div className="d-flex">
                    <input
                      className="form-control text-center me-3"
                      id="inputQuantity"
                      type="num"
                      value="1"
                      style={{ width: "3rem" }}
                    />
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                    >
                      <i className="bi-cart-fill me-1"></i>
                      Mượn sách
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default BookInfoPage;
