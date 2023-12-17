import React, { Component } from "react";
import BookCard from "../../components/BookCard/BookCard";
import Nav from "../../components/Navigation/Nav";
import bookApiCaller from "../../utils/bookApiCaller";

class HomePage extends Component {
  state = {
    books: {},
  };
  loading = true;
  componentDidMount() {
    bookApiCaller("", "get", null).then((res) => {
      this.setState({
        books: res.data,
      });
      // console.log(res.data);
      this.loading = false;
    });
  }
  showBookItem = () => {
    var result = null;
    if (this.state.books.length > 0) {
      result = this.state.books.map((book, index) => {
        return <BookCard key={index} book={book} />;
      });
    }
    return result;
  };
  render() {
    return (
      <>
        {this.loading ? (
          <div className="container mt-10">
            <div className="spinner-border text-primary m-a" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="container">
            <Nav></Nav>
            <div className="container mt-10">
              <div className="text-center">
                <div className="row" id="itemContent">
                  {/* <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard> */}
                  {this.showBookItem()}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default HomePage;
