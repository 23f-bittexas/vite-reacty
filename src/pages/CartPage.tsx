import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { saveOrder } from "../utils/storage";

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } =
    useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    if (items.length === 0) return;

    const order = {
      id: `ORD-${Date.now()}`,
      items: [...items],
      total: totalPrice,
      date: new Date().toISOString(),
      status: "pending" as const,
    };

    saveOrder(order);
    clearCart();
    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="cart-page">
        <div className="order-success">
          <h2>✅ Order Placed Successfully!</h2>
          <p>Thank you for your order. We'll deliver it soon!</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some delicious items to get started!</p>
          <Link to="/" className="browse-restaurants-btn">
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
              <div className="quantity-controls">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="remove-btn"
              >
                🗑️
              </button>
            </div>
            <div className="cart-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span>Total:</span>
          <span className="total-price">${totalPrice.toFixed(2)}</span>
        </div>
        <button onClick={handlePlaceOrder} className="place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
