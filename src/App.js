import "./App.css";
import Header from "./components/Header/Header";
// import AddProductPage from "./pages/AddProductPage/AddProductPage";
// import ListProduct from "./pages/ProductListPage/ListProduct";
import routes from "./routes";
import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [screenHeight, setScreenHeight] = useState();
  useEffect(() => {
    return () => {
      setScreenHeight(window.innerHeight);
    };
  }, []);
  const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  return (
    <>
      <Router>
        <Header />
        <div
          className="App"
          style={{ minHeight: "100vh", height: { screenHeight } + "px" }}
        >
          {/* <ListProduct /> */}
          {showContentMenus(routes)}
        </div>
      </Router>
      {/* <AddProductPage />; */}
    </>
  );
};

export default App;
