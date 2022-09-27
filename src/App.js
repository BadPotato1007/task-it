import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/main.css";

//Pages
import Home from "./pages/Home";
import AboutUs from  "./pages/AboutUs";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about-us' exact component={AboutUs} />
            <Route path='/tasks' exact component={Tasks} />
            <Route path='/profile' exact component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
