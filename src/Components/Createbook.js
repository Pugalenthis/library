import "../Styles/Createbook.css";
import { API } from "./API.js";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export function Createbooks() {
  const [books, SetBooks] = useState([]);

  useEffect(() => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetBooks(res))
      .catch((error) => console.log(error));
  }, []);

  const refetch = () => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetBooks(res))
      .catch((error) => console.log(error));
  };

  console.log(books);
  return (
    <div>
      <div className="container-fluid" id="note-container-fluid">
        <div class="alert alert-warning" role="alert">
           Note! <br></br>
           <ul>
             <li> click on the book to read.</li>
             <li>click on <i id="note-edit-icon"class="bi bi-pencil"></i>to edit the book details</li>
             <li>click on<i  id="note-delete-icon" class="bi bi-x-lg text-danger"></i>to delete the book </li>
           </ul>
          
           
        </div>
      </div>
      <div class="container-fluid" id="createbooks-container-fluid">
        <div class="row">
          <div class="col-12" id="book-column">
            {books.map((ele) => {
              return (
                <Createsinglebook
                  refetch={refetch}
                  bookname={ele.bookname}
                  authorname={ele.authorname}
                  favline={ele.favline}
                  bookcolor={ele.bookcolor}
                  category={ele.category}
                  bookid={ele.id}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div class="container-fluid" id="container-fluid">
        <div class="row">
          <div class="col-12" id="book-column"></div>
        </div>
      </div>

      <div class="container-fluid" id="container-fluid">
        <div class="row">
          <div class="col-12" id="book-column"></div>
        </div>
      </div>

      <div class="container-fluid" id="container-fluid">
        <div class="row">
          <div class="col-12" id="book-column"></div>
        </div>
      </div>
    </div>
  );
}

export function Createsinglebook({
  bookname,
  authorname,
  favline,
  bookcolor,
  category,
  bookid,
  refetch,
}) {
  console.log(bookname, authorname, favline, bookcolor, category, bookid);

  const bookstyles = {
    backgroundColor: bookcolor,
  };

  const history = useHistory();
  const { id } = useParams();

  const [books, SetBooks] = useState([]);

  useEffect(() => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetBooks(res))
      .catch((error) => console.log(error));
  }, []);

  function deletebook(bookid) {
    return fetch(`${API}/${bookid}`, { method: "DELETE" }).then(() => {
      refetch();
    });
  }

  // const refreshpage=()=>{
  //    return window.location.reload();
  // }

  return (
    <div style={bookstyles} class="book d-flex">
      <i onClick={() => deletebook(bookid)} class="bi bi-x-lg text-danger"></i>
      <span onClick={() => history.push(`addbook/read/${bookid}`)}>
        {bookname}
      </span>
      <i
        onClick={() => history.push(`addbook/edit/${bookid}`)}
        id="edit-icon"
        class="bi bi-pencil"
      ></i>
    </div>
  );
}

function Getbooks() {
  const [books, SetBooks] = useState([]);
  return fetch(`${API}`, { method: "GET" })
    .then((data) => data.json())
    .then((res) => SetBooks(res))
    .catch((error) => console.log(error));
}
