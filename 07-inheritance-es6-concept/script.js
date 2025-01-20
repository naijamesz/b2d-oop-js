// Concept oop คือการเขียนโปรแกรมเพื่อลดความซ้ำซ้อนของโค้ดและเพิ่มความยืดหยุ่นในการใช้งานโปรแกรม สามารถนำไปใช้ในการเขียนโปรแกรมใหญ่ขึ้นได้

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  // Method to start the vehicle
  start() {
    console.log(`Starting the ${this.brand} in parent class`);
  }
}

// Inheritance สืบทอดคุณสมบัติจากคลาส Vehicle
class Car extends Vehicle {
  // สืบทอดคุณสมบัติจากคลาส Vehicle และเพิ่มคุณสมบัติใหม่เข้าไป
  constructor(brand, model) {
    // Call the parent class constructor
    // ใช้ super ในการเรียก constructor ของคลาสแม่
    super(brand);
    this.model = model;
  }
  // Method start override จากคลาส Vehicle ถ้าลบ method start จากคลาส Car จะใช้ method start จากคลาส Vehicle(คลาสแม่)
  start() {
    console.log(`Starting My ${this.brand} ${this.model} in child class`);
  }

  display() {
    console.log(`This is a ${this.brand} ${this.model} in child class or subclass`);
  }

  playMusic() {
    console.log('Playing music! from subclass');
  }
}

// Using the Vehicle class
let myVehicle = new Vehicle('Honda');
myVehicle.start();
// myVehicle.playMusic(); // Error

let myCar = new Car('Toyota', 'Supra');
myCar.start();
myCar.display();
myCar.playMusic();

//  Example 2 Shape and Circle
// Shape class
class Shape {
  constructor(name, height, width) {
    this.height = height;
    this.width = width;
    this.name = name;
  }

  // Method to display shape name
  draw() {
    console.log(`Drawing a ${this.name}`);
  }

  // Method to calculate area
  calculateArea(height, width) {
    console.log(`Calculating area : ${height * width}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('circle'); // ส่งค่า name ที่เป็น string ไปให้ constructor ของคลาสแม่ได้เลย คือ การ fix ค่า name ให้เป็น circle
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing a ${this.name} with radius ${this.radius}`);
  }
}

let square = new Shape('Square');
square.draw(); // output : Drawing a Square
square.calculateArea(10, 10); // output : Calculating area : 100

let circle = new Circle(15);
circle.draw(); // output : Drawing a Circle with radius 15

// Example 3 Animal and Cat
// Animal
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     console.log(`Some generic sound`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }

//   makeSound() {
//     console.log('Meow');
//   }
// }

// let animal = new Animal('Generic Animal');
// animal.makeSound();
// console.log(animal.makeSound());
// // output : Animal { name: 'Generic Animal' }
// let cat = new Cat('Kitty', 'White');
// cat.makeSound(); // Meow

// Example 4 User
//  Example 3 User

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    console.log(`${this.username} is logged in`);
    // Add login logic here
  }

  logout() {
    console.log(`${this.username} is logged out`);
    // Add logout logic here
  }
}

// AdminUser class inherits from User class
class AdminUser extends User {
  constructor(username, password) {
    super(username, password);
  }

  deleteUser() {
    console.log(`Deleting user ${this.username}`);
    // Add delete user logic here
  }
}

// Using User class
let user = new User('john', '123456');
user.login();
// output : john is logged in
user.logout();
// output : john is logged out

let admin = new AdminUser('admin_user', 'admin123');
admin.login();
// output : admin_user is logged in
admin.deleteUser();
// output : Deleting user admin_user
