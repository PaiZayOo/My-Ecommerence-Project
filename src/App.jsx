import React from "react";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import Products from "./components/Products";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </div>
  );
};

export default App;
