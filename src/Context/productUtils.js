// src/Context/productUtils.js

export function sortProducts(products, sortType) {
  let sortedProducts = [...products];
  switch (sortType) {
    case "Most Popular":
      sortedProducts.sort((a, b) => b.popularity - a.popularity);
      break;
    case "Newest":
      sortedProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      break;
    case "Price: Low to High":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "Price: High to Low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }
  return sortedProducts;
}

export function filterProducts(products, searchTerm) {
  if (!searchTerm) return products;
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
