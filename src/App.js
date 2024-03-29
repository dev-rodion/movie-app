import React from "react";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "swiper/css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => {
          return (
            <>
              <Header {...props} />
              <Routes />
              <Footer />
            </>
          );
        }}
      />
    </BrowserRouter>
  );
}

export default App;
