import React from "react";
import "../Styles/Home.css";

export function Home() {
  return (
    <div>
      <div className="container" id="home-container">
        <div className="row" id="home-row">
          <div className="col-3 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
          <h3 className="card-title">Create book</h3>
            <div className="card">
              <div className="card-body">
              <img className="img-fluid" style={{width : "100%" ,height:"100%"}} src="https://openlibrary.org/static/images/onboarding/track.png" alt="person"></img>
              </div>
            </div>
          </div>
          <div className="col-3 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
          <h3 className="card-title">Read book</h3>
            <div className="card">
              <div className="card-body">
                 <img className="img-fluid" style={{width : "100%" ,height:"100%"}} src="https://openlibrary.org/static/images/onboarding/library_explorer.png" alt="person"></img>
              </div>
            </div>
          </div>
          <div className="col-3 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
          <h3 className="card-title">Edit book</h3>
            <div className="card">
              <div className="card-body">
              <img className="img-fluid" style={{width : "100%" ,height:"100%"}} src="https://openlibrary.org/static/images/onboarding/read.png" alt="person"></img>
              </div>
            </div>
          </div>

          <div className="col-3 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
          <h3 className="card-title">Delete book</h3>
            <div className="card">
             
              <div className="card-body">
              <img className="img-fluid" style={{width : "100%" ,height:"100%"}} src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="person"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
