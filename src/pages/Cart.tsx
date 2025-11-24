import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} — ${item.price} x {item.qty}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
