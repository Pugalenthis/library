import React from "react";
import "../Styles/Addbook.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { API } from "./API";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory, useParams } from "react-router-dom";

export function Editbook() {
  const [books, SetBooks] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    fetch(`${API}/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetBooks(res))
      .catch((error) => console.log(error));
  }, []);

  const Editcopybook = books;
  console.log(Editcopybook);
  console.log(books);

  

  

  return (
    <div>
       {/* const [books, SetBooks] = useState(null); */}
      {books !== null ? <EditbookForm Editcopybook={Editcopybook} books={books}/> :<h1>loading</h1>}
    </div>
  );
}


function EditbookForm({books,Editcopybook}) {

  console.log(EditbookForm)
  console.log(books)

  const history =useHistory();

  const addbookvalidationschema = yup.object({
    bookname: yup.string().required("please enter bookname").max(10,"Maximum 10 characters only allowed"),
    authorname: yup.string().required("please enter authorname"),
    favline: yup.string().required("please enter favline in this book"),
    bookcolor: yup.string().required("please enter bookcolor"),
    category: yup.string().required("please enter book category"),
  });

  const formik = useFormik({
    initialValues: {
      bookname: Editcopybook.bookname,
      authorname: Editcopybook.authorname,
      favline: Editcopybook.favline,
      bookcolor: Editcopybook.bookcolor,
      category: Editcopybook.category,

      // bookname:"" ,
      // authorname:"" ,
      // favline:"" ,
      // bookcolor: "" ,
      // category:""
    },
    validationSchema: addbookvalidationschema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
      // PuteditedBook(values);
      PuteditedBook(values);
    },
  });

  function PuteditedBook(values) {

    

    console.log(values)

    return fetch(`${API}/${Editcopybook.id}`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "content-Type": "application/json",
      },
    }).then(()=>history.push("/library"))
  }

  
  return (
    <div>
      <div className="container" id="addbook-container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={formik.handleSubmit} id="getbook-column">
              <TextField
                error={formik.touched.bookname && formik.errors.bookname}
                helperText={formik.touched.bookname && formik.errors.bookname ? formik.errors.bookname : ""}
                 type="text"
                 id="bookname"
                 name="bookname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bookname}
                className="addbook-input"
                label="Book Name"
                id="filled-hidden-label-normal"
                variant="filled"
              />
              <TextField
                type="text"
                id="authorname"
                name="authorname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.authorname}
                className="addbook-input"
                label="Author Name"
                id="filled-hidden-label-normal"
                variant="filled"
              />
              <TextField
                type="text"
                id="favline"
                name="favline"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.favline}
                className="addbook-input"
                label="Favourite line or quote in book"
                id="filled-hidden-label-normal"
                variant="filled"
              />
              <TextField
                type="text"
                id="bookcolor"
                name="bookcolor"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bookcolor}
                className="addbook-input"
                label="Book color"
                bookcolorid="filled-hidden-label-normal"
                variant="filled"
              />
              <TextField
                type="text"
                id="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
                name="category"
                className="addbook-input"
                label="Category"
                id="filled-hidden-label-normal"
                variant="filled"
              />

              <Button 
                type="submit"
                className="d-block addbook-button"
                variant="contained">
                Save
              </Button>

            </form>
          </div>
        </div>
        {/* {books.map((ele,index)=>(<Createbooks bookname={ele.bookname} authorname={ele.authorname} favline={ele.favline}  id={index} />))} */}
      </div>
    </div>
  );
}
