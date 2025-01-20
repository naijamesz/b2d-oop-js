import { loginUser, logoutUser } from './src/auth/auth.js';
import { addToCart, cartTotal, removeFromCart } from './src/cart/carts.js';
import { fetchProducts, getProductDetails } from './src/products/products.js';

loginUser();
logoutUser();
fetchProducts();
getProductDetails(2);
addToCart(1, 5);
addToCart(2, 5);
removeFromCart(1);
cartTotal(10);

/* import { divide, minus, multiply, sum } from './mathUtils.js';
import { User } from './User.js';

console.log(sum(10, 5)); // 15
console.log(minus(10, 5)); // 5
console.log(multiply(10, 5)); // 50
console.log(divide(10, 5)); // 2
const user = new User('Jack');
user.greet();
// console.log(users.greet()); // Hello, Jack

// console.log(sum(1, 53)); // 54
 */
