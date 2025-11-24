import React from "react";
import { useParams, Link } from "react-router-dom";
import MenuItemCard from "../components/MenuItemCard";
import { mockRestaurants } from "../data/mockRestaurants";

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = mockRestaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="not-found">
        <h2>Restaurant not found</h2>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const categories = Array.from(
    new Set(restaurant.menu.map((item) => item.category))
  );

  return (
    <div className="restaurant-page">
      <div className="restaurant-header">
        <div className="restaurant-icon">{restaurant.image}</div>
        <div>
          <h1 className="restaurant-title">{restaurant.name}</h1>
          <p className="restaurant-meta">
            {restaurant.cuisine} • ⭐ {restaurant.rating} • 🕐{" "}
            {restaurant.deliveryTime}
          </p>
          <p className="minimum-order-info">
            Minimum order: ${restaurant.minimumOrder}
          </p>
        </div>
      </div>

      <div className="menu-section">
        {categories.map((category) => (
          <div key={category} className="menu-category">
            <h2 className="category-title">{category}</h2>
            <div className="menu-items">
              {restaurant.menu
                .filter((item) => item.category === category)
                .map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    restaurantId={restaurant.id}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="back-link-container">
        <Link to="/" className="back-link">
          ← Back to Restaurants
        </Link>
      </div>
    </div>
  );
};

export default RestaurantPage;
