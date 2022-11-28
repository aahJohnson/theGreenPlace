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
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import ProductListPage from "./components/productListPage";

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <div class="appHeader">
          <Header />
        </div>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/productListPage" element={<ProductListPage />} />
        </Routes>

        <div class="appFooter">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
