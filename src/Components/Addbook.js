import React from "react";
import "../Styles/Addbook.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { API } from "./API";
import { useFormik } from "formik";
import * as yup from "yup";
import { Createsinglebook } from "./Createbook";
import { useHistory } from "react-router-dom";
import { getFormLabelUtilityClasses } from "@mui/material";


export function Addbook() {
  const [books, SetBooks] = useState(null)
  
  const history =useHistory();

  const addbookvalidationschema =yup.object({
     bookname : yup.string().required("please enter bookname").max(10,"Maximum 10 characters only allowed"),
     authorname : yup.string().required("please enter authorname"),
     favline : yup.string().required("please enter favline in this book"),
     bookcolor : yup.string().required("please enter bookcolor"),
     category : yup.string().required("please enter book category")
  })

    useEffect(() => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetBooks(res))
      .catch((error) => console.log(error));
  }, []);

  const createbook=(values)=>{
    fetch(`${API}`,{
      method : "POST",
      body : JSON.stringify(values),
      headers : {
        "content-Type" : "application/json",
      },
    }).then(()=>history.push("/library"))
  };

 
    const formik = useFormik({
      initialValues: {
        bookname: "",
        authorname: "",
        favline: "",
        bookcolor: "",
        category: "",
      },
      validationSchema: addbookvalidationschema,
      onSubmit : (values)=>{
        console.log("onSubmit",values)
        createbook(values);
        console.log(books)
      }
    });
 
  return (
    <div>
      <div className="container" id="addbook-container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}  id="getbook-column">
              <TextField
               error={formik.touched.bookname && formik.errors.bookname}
               helperText={formik.touched.bookname && formik.errors.bookname ? formik.errors.bookname : ""}
                type="text"
                id="bookname"
                name="bookname"
                onChange ={formik.handleChange}
                onBlur ={formik.handleBlur}
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
                onChange ={formik.handleChange}
                onBlur ={formik.handleBlur}
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
                onChange ={formik.handleChange}
                onBlur ={formik.handleBlur}
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
                onChange ={formik.handleChange}
                onBlur ={formik.handleBlur}
                value={formik.values.bookcolor}
                className="addbook-input"
                label="Book color (pink,yellow,green)"
                bookcolorid="filled-hidden-label-normal"
                variant="filled"
              />
              
              <TextField
                type="text"
                id="category"
                onChange ={formik.handleChange}
                onBlur ={formik.handleBlur}
                value={formik.values.category}
                name="category"
                className="addbook-input"
                label="Category (motivation,philosophy,subject)"
                id="filled-hidden-label-normal"
                variant="filled"
              />
            
            <Button  type="submit"  className="d-block addbook-button" variant="contained">
              Add book
            </Button>
            </form>
          </div>
          
        </div>
        
        {/* {books.map((ele,index)=>{<Createsinglebook bookname={ele.bookname} authorname={ele.authorname} favline ={ele.favline} bookcolor={ele.bookcolor} category={ele.category} id={index} />})} */}
      </div>
    </div>
  );
}



