import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MBPage from "./pages/ManagerBorrowPage/MBPage";
import GBBPage from "./pages/ManagerGiveBBPage/GBBPage";
import LBBPage from "./pages/ManagerBorrowPage/ListBorrowBookPage/LBBPage";
import BookInfoPage from "./pages/BookInfoPage/BookInfoPage";
import BookListPage from "./pages/BookManager/BookListPage/BookListPage";
import AddBookPage from "./pages/BookManager/AddBookPage/AddBookPage";
// import EditBookPage from "./pages/BookManager/EditBookPage/EditBookPage";
import EditBook2Page from "./pages/BookManager/EditBookPage/EditBook2Page";
import AddDocGia from "./pages/DocGiaManagerPage/addDocGia/addDocGia";
import ListDocGia from "./pages/DocGiaManagerPage/listDocGia/listDocGia";
import EditDocGia from "./pages/DocGiaManagerPage/editDocGia/editDocGia";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/login",
    exact: true,
    main: () => <LoginPage />,
  },
  {
    path: "/register",
    exact: true,
    main: () => <RegisterPage />,
  },
  {
    path: "/borrowBook",
    exact: true,
    main: () => <MBPage />,
  },
  {
    path: "/book",
    exact: true,
    main: () => <BookInfoPage />,
  },
  {
    path: "/listBook",
    exact: true,
    main: () => <BookListPage />,
  },
  {
    path: "/giveBookBack",
    exact: true,
    main: () => <GBBPage />,
  },
  {
    path: "/editBook",
    exact: false,
    main: () => <EditBook2Page />,
  },
  {
    path: "/addBook",
    exact: true,
    main: () => <AddBookPage />,
  },
  {
    path: "/listBorrowBook",
    exact: true,
    main: () => <LBBPage />,
  },
  {
    path: "/addDocGia",
    exact: true,
    main: () => <AddDocGia />,
  },
  {
    path: "/listDocGia",
    exact: true,
    main: () => <ListDocGia />,
  },
  {
    path: "/editDocGia/:maDocGia",
    exact: true,
    main: () => <EditDocGia />,
  },
  {
    path: "*",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
