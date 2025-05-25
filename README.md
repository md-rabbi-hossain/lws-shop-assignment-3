# 🛒 LWS.SHOP

**LWS.SHOP** is an e-commerce cart management web application built as part of the **Reactive Accelerator Course** by [Sumit Saha](https://learnwithsumit.com).  
This assignment focuses on applying React fundamentals such as the **Context API**, **useReducer**, component-based architecture, and state management using real-world cart functionality.

---

## 🚀 Features

- 🔄 **Stock Management**: Prevents adding out-of-stock products to the cart. The "Add to Cart" button is disabled when stock reaches 0.
- ➕➖ **Quantity Control**: Easily increase or decrease product quantity in the cart, respecting stock limits.
- ♻️ **Live Stock Update**: Changes in cart quantities are synced with the product list stock.
- ❌ **Remove from Cart**: Removing a product from the cart restores its stock and shows "Add to Cart" again.
- 📊 **Order Summary**: Calculates Subtotal, 20% Discount, fixed Delivery Fee, and Total Amount dynamically.
- 🔎 **Search**: Real-time product filtering by name.
- 📈 **Sort By**: Sort products by Popularity, Newest, and Price.
- ❗ **No Product Found UI**: Displays a friendly message when search results are empty.
- ⚙️ **React Context + useReducer**: Used for global state and cart logic management.

---

## 🧰 Tech Stack

- React.js  
- Context API + useReducer  
- Tailwind CSS (for styling)  
- Vite (development environment)

---

## 🚀 Getting Started

### Install dependencies  
Run this command in your project folder to install all required packages:

```bash
npm install

Start the project locally with 

```bash
npm run dev
