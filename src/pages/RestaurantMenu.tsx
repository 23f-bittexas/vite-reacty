import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const mockMenu = [
  { id: 1, name: "Margherita Pizza", price: 12 },
  { id: 2, name: "Pepperoni Pizza", price: 15 }
];

export default function RestaurantMenu() {
  const { id } = useParams();
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Menu for Restaurant #{id}</h2>
      {mockMenu.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => addToCart({ ...item, qty: 1 })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
