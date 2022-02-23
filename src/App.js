import React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Switch, Route, useHistory } from "react-router-dom";
import { Home } from "./Components/Home";
import { Addbook } from "./Components/Addbook";
import { Createbooks } from "./Components/Createbook";
import { Readbook } from "./Components/Readbook";
import { Editbook } from "./Components/Editbook";


function App() {
  const history = useHistory();
  return (
    <div>
      ValidationTextFields
      <div className="container">
        <AppBar id="appbar-container">
          <Toolbar>
            <Button onClick={() => history.push("/")} color="inherit">
              Home
            </Button>
            <Button onClick={() => history.push("/addbook")} color="inherit">
              Add Book
            </Button>
            <Button onClick={() => history.push("/library")} color="inherit">
              Library
            </Button>
          </Toolbar>
        </AppBar>
      </div>

    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addbook">
            <Addbook />
          </Route>
          <Route exact path="/library">
            <Createbooks />
          </Route>
          <Route exact path="/addbook/read/:id">
            <Readbook />
          </Route>
          <Route exact path="/addbook/edit/:id">
            <Editbook />
           
          </Route>
        
        </Switch>
      </div>
    
  );
}

export default App;
