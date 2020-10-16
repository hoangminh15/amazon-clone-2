import React, { useEffect } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>Login page</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
