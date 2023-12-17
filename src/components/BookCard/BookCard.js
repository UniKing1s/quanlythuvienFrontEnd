import React, { Component } from "react";

class BookCard extends Component {
  state = {
    follow: false,
  };

  changeFollow = () => {
    this.setState({
      follow: !this.state.follow,
    });
  };

  render() {
    const { book } = this.props;
    // const [follow,changeFollow] = useState(false)
    return (
      <div className="col-lg-3 col-md-6 col-sm-6" style={{ height: "50%" }}>
        <div className="card my-2 shadow-0" style={{ height: "100%" }}>
          <a
            href={"/book?maSach=" + book.maSach}
            style={{ height: "275px" }}
            className=""
          >
            <div className="mask" style={{ height: "50px" }}>
              {/* <div className="d-flex justify-content-start align-items-start h-100 m-2">
                <h6>
                  <span className="badge bg-danger pt-1">New</span>
                </h6>
              </div> */}
            </div>
            <img
              src={book.imgUrl}
              className="card-img-top rounded-2"
              style={{ width: "50%" }}
              //style="aspect-ratio: 1 / 1"
              alt=""
            />
          </a>
          <div className="card-body p-0 pt-3" style={{ height: "250px" }}>
            <h5 className="card-title" style={{ height: "50px" }}>
              {book.tenSach}
            </h5>
            {/* <p className="card-text mb-0">Python cơ bản</p> */}
            <p
              className="text-muted"
              style={{
                height: "120px",
                overflow: "scroll",
                overflow: "hidden",
              }}
            >
              Tóm tắt: {book.tomTat}
            </p>
            <button type="button" className="btn btn-primary mb-3">
              Mượn Sách
            </button>
            {!this.state.follow ? (
              <button
                type="button"
                className="btn btn-primary mb-3"
                style={{ marginLeft: "3px" }}
                onClick={() => this.changeFollow()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary mb-3"
                style={{ marginLeft: "3px" }}
                onClick={() => this.changeFollow()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
