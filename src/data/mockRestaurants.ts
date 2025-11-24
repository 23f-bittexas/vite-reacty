export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  minimumOrder: number;
  image?: string;
  menu: MenuItem[];
}

export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Italian Delight",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    minimumOrder: 15,
    image: "🍝",
    menu: [
      {
        id: "1-1",
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella and basil",
        price: 12.99,
        category: "Pizza",
      },
      {
        id: "1-2",
        name: "Spaghetti Carbonara",
        description: "Creamy pasta with bacon and parmesan",
        price: 14.99,
        category: "Pasta",
      },
      {
        id: "1-3",
        name: "Lasagna",
        description: "Layered pasta with meat sauce and cheese",
        price: 15.99,
        category: "Pasta",
      },
      {
        id: "1-4",
        name: "Tiramisu",
        description: "Classic Italian dessert",
        price: 6.99,
        category: "Dessert",
      },
    ],
  },
  {
    id: "2",
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "25-35 min",
    minimumOrder: 20,
    image: "🍣",
    menu: [
      {
        id: "2-1",
        name: "California Roll",
        description: "Crab, avocado, and cucumber",
        price: 10.99,
        category: "Rolls",
      },
      {
        id: "2-2",
        name: "Salmon Nigiri",
        description: "Fresh salmon over sushi rice",
        price: 12.99,
        category: "Nigiri",
      },
      {
        id: "2-3",
        name: "Spicy Tuna Roll",
        description: "Spicy tuna with cucumber",
        price: 11.99,
        category: "Rolls",
      },
      {
        id: "2-4",
        name: "Miso Soup",
        description: "Traditional Japanese soup",
        price: 3.99,
        category: "Soup",
      },
    ],
  },
  {
    id: "3",
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minimumOrder: 10,
    image: "🍔",
    menu: [
      {
        id: "3-1",
        name: "Classic Burger",
        description: "Beef patty with lettuce, tomato, and cheese",
        price: 9.99,
        category: "Burgers",
      },
      {
        id: "3-2",
        name: "Bacon Cheeseburger",
        description: "Beef patty with bacon and cheese",
        price: 11.99,
        category: "Burgers",
      },
      {
        id: "3-3",
        name: "French Fries",
        description: "Crispy golden fries",
        price: 4.99,
        category: "Sides",
      },
      {
        id: "3-4",
        name: "Milkshake",
        description: "Vanilla, chocolate, or strawberry",
        price: 5.99,
        category: "Drinks",
      },
    ],
  },
  {
    id: "4",
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "25-35 min",
    minimumOrder: 12,
    image: "🌮",
    menu: [
      {
        id: "4-1",
        name: "Beef Tacos",
        description: "Three soft tacos with seasoned beef",
        price: 8.99,
        category: "Tacos",
      },
      {
        id: "4-2",
        name: "Chicken Burrito",
        description: "Large burrito with chicken, rice, and beans",
        price: 10.99,
        category: "Burritos",
      },
      {
        id: "4-3",
        name: "Nachos Supreme",
        description: "Loaded nachos with cheese and toppings",
        price: 9.99,
        category: "Appetizers",
      },
      {
        id: "4-4",
        name: "Churros",
        description: "Sweet fried dough with cinnamon sugar",
        price: 5.99,
        category: "Dessert",
      },
    ],
  },
  {
    id: "5",
    name: "Thai Spice",
    cuisine: "Thai",
    rating: 4.7,
    deliveryTime: "30-45 min",
    minimumOrder: 15,
    image: "🍜",
    menu: [
      {
        id: "5-1",
        name: "Pad Thai",
        description: "Stir-fried rice noodles with shrimp",
        price: 13.99,
        category: "Noodles",
      },
      {
        id: "5-2",
        name: "Green Curry",
        description: "Spicy curry with chicken and vegetables",
        price: 14.99,
        category: "Curry",
      },
      {
        id: "5-3",
        name: "Tom Yum Soup",
        description: "Hot and sour soup with shrimp",
        price: 8.99,
        category: "Soup",
      },
      {
        id: "5-4",
        name: "Mango Sticky Rice",
        description: "Sweet dessert with fresh mango",
        price: 6.99,
        category: "Dessert",
      },
    ],
  },
];
