import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
