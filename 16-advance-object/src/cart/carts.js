// Exporting cart functions
export function addToCart(productId, quantity) {
  // logic to add item to cart
  console.log(`Product with id ${productId} added to cart`);
}

export function removeFromCart(productId) {
  // logic to remove item from cart
  console.log(`Product with id ${productId} removed from cart`);
}

export function cartTotal(quantity) {
  // logic to calculate total price
  console.log(`Total products in cart ${quantity}`);
}
