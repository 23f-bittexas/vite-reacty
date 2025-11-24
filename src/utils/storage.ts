import { CartItem } from "../context/CartContext";

const CART_KEY = "food-delivery-cart";
const ORDERS_KEY = "food-delivery-orders";

export const loadCart = (): CartItem[] => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveCart = (items: CartItem[]): void => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save cart:", error);
  }
};

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: "pending" | "confirmed" | "delivered";
}

export const loadOrders = (): Order[] => {
  try {
    const data = localStorage.getItem(ORDERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveOrder = (order: Order): void => {
  try {
    const orders = loadOrders();
    orders.unshift(order);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  } catch (error) {
    console.error("Failed to save order:", error);
  }
};
