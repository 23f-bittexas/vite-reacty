import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🍕</span>
            <span className="logo-text">FoodDelivery</span>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/cart" className="nav-link cart-link">
              🛒 Cart
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
