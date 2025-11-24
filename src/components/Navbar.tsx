import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}
