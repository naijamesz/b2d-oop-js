class Rectangle {
  width = 10;
  height = 10;

  // Method
  area() {
    return this.width * this.height;
  }
}

// Create object "new Classname()" new is instantiate

let rectZero = new Rectangle();
console.log(rectZero.area()); // output: 100

rectZero.height = 5;
console.log(rectZero.area()); // output: 50

let rect1 = new Rectangle(5, 10);
console.log(rect1.area()); // output: 50

/* 
// OLD SCHOOL WAY TO CREATE OBJECT
// object
let car = {
  brand: 'Toyota',
  model: 'Vios',
  year: 2020,
  color: 'red',
  price: 500000,
  isAvailable: true,
  startEngine: function () {
    return `Engine Start!`;
  },
};

console.log(`${car.model} ${car.color} ${car.year}`);
// output: Vios red 2020

let book = {
  title: '1984',
  author: 'George Orwell',
  genres: ['Dystopian', 'Fiction', 'Political fiction'],
  details: {
    published: 1949,
    pages: 328,
  },
  // summary : function()
  summary() {
    return `${this.title} is a dystopian novel by ${this.author} published in ${this.details.published}.`;
  },
};

console.log(book.summary());
console.log(book.genres[1]);
console.log(book.details.published);
console.log(book.details.pages);
console.log(book['title']); // ดึงข้อมูลจาก object ด้วย key โดยใช้ bracket notation
// ค้นหา key ใน object
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(key, book[key]);
  }
}

// สร้าง proto เป็น Prototype ของ object ที่จะใช้เป็นต้นแบบ
let proto = {
  sayHello: function () {
    return `Hello, my name is ${this.name}`;
  },
};
let alice = Object.create(proto);
alice.name = 'Alice';
console.log(alice.sayHello());
// output: Hello, my name is Alice

let james = Object.create(proto);
james.name = 'James';
console.log(james.sayHello());
// output: Hello, my name is James
 */
