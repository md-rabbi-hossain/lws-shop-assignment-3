import { createContext, useContext, useReducer } from "react";
import { filterProducts, sortProducts } from "./productUtils.js";
import { initialState, productReducer } from "./productReducer.js";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  let filteredSortedProducts = sortProducts(state.productList, state.sortType);
  filteredSortedProducts = filterProducts(
    filteredSortedProducts,
    state.searchTerm
  );
  return (
    <ProductContext.Provider
      value={{
        productList: filteredSortedProducts,
        searchTerm: state.searchTerm,
        sortType: state.sortType,
        cart: state.cart,
        subtotal: state.subtotal,
        discount: state.discount,
        deliveryFee: state.deliveryFee,
        total: state.total,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);
