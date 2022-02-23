import "../Styles/Readbook.css";
import { useEffect, useState } from "react";
import { API } from "./API.js";
import { useParams } from "react-router-dom";

export function Readbook() {
  const [books, SetBooks] = useState([]);

  

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetBooks(res))
      .catch((error) => console.log(error));
  }, []);

  const readbookstyles={
    backgroundColor : books.bookcolor,
  }

  return (
    <div>
      <div className="container" id="readbook-container">
        <div className="row" id="readbook-row">
          <div className="col-12" id="readbook-column">
            
            <ul style={readbookstyles}>
              <li><bold>BOOKNAME :</bold> {books.bookname}</li>
              <li><bold>AUTHORNAME :</bold> {books.authorname}</li>
              <li><bold>FAVLINE :</bold> {books.favline}</li>
              <li><bold>BOOKCOLOR :</bold> {books.bookcolor}</li>
              <li><bold>CATEGORY :</bold> {books.category}</li>
            </ul>
               
               
            </div>
          </div>
        </div>
      </div>
   
  );
}

