import { Link } from "react-router-dom";

const mockRestaurants = [
  { id: 1, name: "Pizza Palace" },
  { id: 2, name: "Burger King" },
];

export default function Restaurants() {
  return (
    <div>
      <h2>Restaurants</h2>
      {mockRestaurants.map((r) => (
        <div key={r.id}>
          <Link to={`/restaurant/${r.id}`}>{r.name}</Link>
        </div>
      ))}
    </div>
  );
}
