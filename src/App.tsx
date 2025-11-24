import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;