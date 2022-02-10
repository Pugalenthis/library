import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Contacts } from "./Contacts";
import { About } from "./About";
import { Blog } from "./Blog";
import { Getmovie } from "./Getmovie";
import { Createmovie } from "./Createmovie";

function App() {
  return (
    <div className="App">
      <ul>
        <Link to="/home">Home</Link>
      </ul>
      <ul>
        <Link to="/projects">Projects</Link>
      </ul>
      <ul>
        <Link to="/blog">Blog</Link>
      </ul>
      <ul>
        <Link to="/about">About</Link>
      </ul>
      <ul>
        <Link to="/contacts">Contacts</Link>
      </ul>
      <ul>
        <Link to="/getmovie">Getmovie</Link>
      </ul>

      <Switch>
        <Route path="/home">
          <Home myname="pugal" />
        </Route>
        <Route path="/projects">
          <Projects myname="pugal" />
        </Route>
        <Route path="/blog">
          <Blog myname="pugal" />
        </Route>

        <Route path="/about">
          <About myname="pugal" />
        </Route>
        <Route path="/contacts">
          <Contacts myname="pugal" />
          <Createmovie />
        </Route>
        <Route path="/getmovie">
          <Getmovie />
        
         
        </Route>
      </Switch>
    </div>
  );
}




export default App;