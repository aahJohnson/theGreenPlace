import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

// Components
import Header from "./components/header";
import About from "./components/about";
import ProductsOne from "./components/productsOne";
import ProductsTwo from "./components/productsTwo";
import Events from "./components/events";
import Socials from "./components/socials";
import Footer from "./components/footer";

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <div class="appMain">
          <div class="appHeader">
            <Header />
          </div>
          <div class="appAbout">
            <About />
          </div>
          <div class="appProductsOne">
            <ProductsOne />
          </div>
          <div class="appEvents">
            <Events />
          </div>
          <div class="appProductsTwo">
            <ProductsTwo />
          </div>
          <div class="appSocials">
            <Socials />
          </div>
          <div class="appFooter">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
