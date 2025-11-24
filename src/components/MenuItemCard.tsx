import React from "react";
import { MenuItem } from "../data/mockRestaurants";
import { useCart } from "../context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
  restaurantId: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, restaurantId }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      restaurantId,
      name: item.name,
      price: item.price,
    });
  };

  return (
    <div className="menu-item-card">
      <div className="menu-item-info">
        <h4 className="menu-item-name">{item.name}</h4>
        <p className="menu-item-description">{item.description}</p>
        <div className="menu-item-footer">
          <span className="menu-item-price">${item.price.toFixed(2)}</span>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
