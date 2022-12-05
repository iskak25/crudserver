import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "../../api";
import "./BookList.scss";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksDetails();
  }, []);

  const getBooksDetails = async () => {
    let { data } = await getBooks();
    setBooks(data);
  };

  const deleteBookData = async (id) => {
    await deleteBook(id);
    getBooksDetails();
  };

  return (
    <div className="books">
      <div class="mobile-table">
        <table class="iksweb">
          <thead>
            <tr>
              <th>Titles</th>
              <th>Authors</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr>
                <td> {book.title}</td>
                <td>{book.author}</td>
                <td>
                  <button
                    className="btnDelete"
                    onClick={() => deleteBookData(book.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btnEdit">
                    <Link to={`/edit/${book.id}`}>Edit</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;

// import React from "react";

// import "./BookList.scss";

// const BookList = () => {
//   return (
//     <>

// <div class="mobile-table">
//   <table class="iksweb">
//     <thead>
//       <tr>
//         <th>Заголов ок</th>
//         <th>Заголовок</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Яч</td>
//         <td>Ячейка</td>
//         <td>Ячейка</td>
//         <td>Ячейка</td>
//       </tr>
//       <tr>
//         <td>Я</td>
//         <td>Ячейка</td>
//         <td>Ячейка</td>
//         <td>Ячейка</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
//     </>
//   );
// };

// export default BookList;
