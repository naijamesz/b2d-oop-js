// Old standard
/* class User {
  constructor(name, age) {
    let _age = age; // Private variable
    this.name = name;

    this.getAge = () => _age; //
    this.setAge = newAge => {
      if (newAge >= 0) _age = newAge;
    };
  }
} */

// Modern standard ES2022
class User {
  #age; // Private variable

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (newAge >= 0) {
      this.#age = newAge;
    }
  }
}

const user = new User('John Farmer', 35);
console.log(user.age); // 35
user.age = 38; // Change age
console.log(user.age); // 36

// Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  static speak() {
    console.log(`${this.name} makes a noise.`);
  }

  eat() {
    console.log(`${this.name} eats food.`);
  }
}
const animal = new Animal('Animal');
Animal.speak();
animal.eat();

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak();
dog.eat();

// Polymorphism Example
class Shape {
  draw() {
    console.log('Drawing shape');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing circle');
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing square');
  }
}

const shapes = [new Shape(), new Circle(), new Square()];
shapes.forEach(shape => shape.draw());

// Real-world example
class Account {
  #balance; // Private variable
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
      console.log('Insufficient balance');
    }
  }
  // Getter
  get balance() {
    return this.#balance;
  }
}

const myAccount = new Account(1000);
myAccount.deposit(500); // deposited: 500
myAccount.withdraw(200); // withdraw: 200
console.log(`Account balance: ${myAccount.balance}`); // Account balance: 1300

/* import { loginUser, logoutUser } from './src/auth/auth.js';
import { addToCart, cartTotal, removeFromCart } from './src/cart/carts.js';
import { fetchProducts, getProductDetails } from './src/products/products.js';

loginUser();
logoutUser();
fetchProducts();
getProductDetails(2);
addToCart(1, 5);
addToCart(2, 5);
removeFromCart(1);
cartTotal(10); */

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
