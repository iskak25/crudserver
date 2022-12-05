import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../api";
import "./AddBook.scss";

const initialValues = {
  title: "",
  author: "",
};

const AddBook = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState(initialValues);
  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };

  const addBookDetails = async () => {
    await addBook(book);
    navigate("/all");
  };

  return (
    <div className="add">
      <form>
        <input
          placeholder="Title:"
          className="chose"
          onChange={(e) => onValueChange(e)}
          name="title"
        />
      </form>
      <form>
        <input
          placeholder="Author:"
          className="chose"
          type="text"
          onChange={(e) => onValueChange(e)}
          name="author"
        />
      </form>

      <button className="addbtn" onClick={() => addBookDetails()}>
        Add{" "}
      </button>
    </div>
  );
};

export default AddBook;
