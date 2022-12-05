import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "./component/AddBook/AddBook";
import BookList from "./component/BookList/BookList";
import Edit from "./component/Edit/Edit";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";

const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
