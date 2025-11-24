import React from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "../data/mockRestaurants";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card">
      <div className="restaurant-image">{restaurant.image}</div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <p className="restaurant-cuisine">{restaurant.cuisine}</p>
        <div className="restaurant-details">
          <span className="rating">⭐ {restaurant.rating}</span>
          <span className="delivery-time">🕐 {restaurant.deliveryTime}</span>
          <span className="minimum-order">
            💵 Min: ${restaurant.minimumOrder}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
