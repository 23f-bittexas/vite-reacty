import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import { mockRestaurants } from "../data/mockRestaurants";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1 className="hero-title">Order Food Online</h1>
        <p className="hero-subtitle">
          Delicious meals delivered to your doorstep
        </p>
      </div>
      <div className="restaurants-section">
        <h2 className="section-title">Available Restaurants</h2>
        <div className="restaurants-grid">
          {mockRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
