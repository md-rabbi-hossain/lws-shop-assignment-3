import { products } from "../data/Data.js";
export const initialState = {
  productList: products,
  searchTerm: "",
  sortType: "",
  cart: [],
  discountRate: 0.2, 
  deliveryFee: 15, 
};

export function calculateTotals(cart, discountRate = 0.2, deliveryFee = 15) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * discountRate;
  const total = subtotal - discount + deliveryFee;

  return { subtotal, discount, deliveryFee, total };
}


export function productReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, searchTerm: action.payload };

    case "SET_SORT":
      return { ...state, sortType: action.payload };

    case "ADD_TO_CART": {
      const productToAdd = action.payload;
      const existing = state.cart.find((item) => item.id === productToAdd.id);
      let updatedCart;

      if (existing) {
        if (existing.quantity < productToAdd.stock) {
          updatedCart = state.cart.map((item) =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else return state; 
      } else {
        if (productToAdd.stock > 0) {
          updatedCart = [...state.cart, { ...productToAdd, quantity: 1 }];
        } else return state;
      }

      const totals = calculateTotals(updatedCart);
      return { ...state, cart: updatedCart, ...totals };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      const totals = calculateTotals(updatedCart);
      return { ...state, cart: updatedCart, ...totals };
    }

    case "INCREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity < item.stock) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      const totals = calculateTotals(updatedCart);
      return { ...state, cart: updatedCart, ...totals };
    }

    case "DECREASE_QUANTITY": {
      const updatedCart = state.cart
        .map((item) => {
          if (item.id === action.payload && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      const totals = calculateTotals(updatedCart);
      return { ...state, cart: updatedCart, ...totals };
    }

    default:
      return state;
  }
}

