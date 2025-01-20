// Getters and Setters คือ การกำหนดสิทธิ์ให้กับ property ของ object ให้สามารถเข้าถึงได้และสามารถแก้ไขค่าได้ โดยใช้ method ที่เรียกว่า getter และ setter ในการกำหนดสิทธิ์ซึ่งเป็นการป้องกันการเข้าถึงค่าของ property โดยตรง และสามารถกำหนดเงื่อนไขในการกำหนดค่าได้

// Example 5
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this._price = price; // private variable
    this._stock = stock; // private variable
  }

  // Getter for price
  get price() {
    // รับค่า price และแสดงเป็นรูปแบบเงินทศนิยม 2 ตำแหน่ง
    return `$${this._price.toFixed(2)}`;
  }

  // Setter for price
  set price(newPrice) {
    if (newPrice < 0.01) {
      console.error('Price must be at least 0.01.');
    } else {
      this._price = newPrice;
    }
  }

  // Getter for stock
  get stock() {
    return this._stock + ` pieces`;
  }

  // Setter for stock
  set stock(value) {
    if (!Number.isInteger(value) || value < 0) {
      console.error('Stock level must be a non-negative integer.');
    } else {
      this._stock = value;
    }
  }

  // ถ้าต้องการเพิ่ม stock ให้ใช้ method นี้
  increaseStock(amount) {
    if (!Number.isInteger(amount) || amount < 0) {
      console.error('Stock level must be a non-negative integer.');
    } else {
      this._stock += amount;
    }
  }

  // ถ้าต้องการลด stock ให้ใช้ method นี้
  decreaseStock(amount) {
    if (!Number.isInteger(amount) || amount < 0) {
      console.error('Stock level must be a non-negative integer.');
    } else if (this._stock < amount) {
      console.error('Stock level must be greater than or equal to the amount to decrease.');
    } else {
      this._stock -= amount;
    }
  }

  // ถ้าต้องการเพิ่มส่วนลดให้ใช้ method นี้
  applyDiscount(percentage) {
    if (!Number.isInteger(percentage) || percentage < 0) {
      console.error('Discount percentage must be a non-negative integer.');
    } else {
      this._price *= 1 - percentage / 100;
    }
  }
}

const product = new Product('Phone', 500, 10);
console.log(product.price); // $500.00
console.log(product.stock); // 10 pieces
product.stock = 20; // เพิ่ม stock ผ่านการ set stock เป็น 20 ชิ้น set ไม่่ใช่เพิ่ม
console.log(product.stock); // 20 pieces
product.increaseStock(5); // เพิ่ม stock 5 ชิ้น
console.log(product.stock); // 25 pieces
product.decreaseStock(1); // ลด stock 1 ชิ้น
console.log(product.stock); // 24 pieces
// ถ้าเซ็ท price น้อยกว่า 0.01 จะแสดงข้อความ Price must be at least 0.01.
product.price = 0.005; // Price must be at least 0.01.

// ถ้าเซ็ท stock ที่ไม่ใช่จำนวนเต็มหรือน้อยกว่า 0 จะแสดงข้อความ Stock level must be a non-negative integer.
product.stock = 5.5; // Stock level must be a non-negative integer.
product.stock = -1; // Stock level must be a non-negative integer.

// ถ้าเพิ่มส่วนลดที่ไม่ใช่จำนวนเต็มหรือน้อยกว่า 0 จะแสดงข้อความ Discount percentage must be a non-negative integer.
product.applyDiscount(10.5); // Discount percentage must be a non-negative integer. ต้องใส่เป็นจำนวนเต็มและไม่ติดลบท่านั้น
product.applyDiscount(-10); // Discount percentage must be a non-negative integer. ต้องใส่เป็นจำนวนเต็มและไม่ติดลบท่านั้น
// ตัวอย่างการใช้งานส่วนลด 50%
product.applyDiscount(50);
// 500 * 1 - 50 / 100 = 500 * 0.5 = 250
console.log(product.price); // $250.00

// Example 4
/* class User {
  constructor(name, role) {
    this.name = name;
    this.role = role; // e.g. 'admin', 'editor', 'viewer'
  }

  // Getter for permissions กำหนดสิทธิ์การเข้าถึงการจัดการให้กับ role ต่าง ๆ
  get permissions() {
    const rolePermissions = {
      // กำหนดสิทธิ์ให้กับ role ต่าง ๆ 
      admin: ['create', 'read', 'update', 'delete'],
      editor: ['create', 'read', 'update'],
      viewer: ['read'],
    };
    // ส่งค่า role ไปเพื่อเข้าถึงสิทธิ์ที่เกี่ยวข้องที่อยู่ใน this.role
    return rolePermissions[this.role] || [];
  }
}

const adminUser = new User('John', 'admin'); // ชื่อ John มีสิทธิ์(role) เป็น admin
// แสดงสิทธิ์ที่ admin สามารถทำได้
console.log(adminUser.permissions); // ['create', 'read', 'update', 'delete']

const editorUser = new User('Jane', 'editor'); // ชื่อ Jane มีสิทธิ์(role) เป็น editor
// แสดงสิทธิ์ที่ editor สามารถทำได้
console.log(editorUser.permissions); // ['create', 'read', 'update']

const viewerUser = new User('Bob', 'viewer'); // ชื่อ Bob มีสิทธิ์(role) เป็น viewer
console.log(viewerUser.permissions); // ['read'] */

// Example 3 Temperature
/* class Temperature {
  constructor(celsius) {
    // constructor สำหรับกำหนดค่าเริ่มต้น
    this._celsius = celsius; // private variable
  }
  // Getter for celsius
  get fahrenheit() {
    return this._celsius;
  }

  // Setter for celsius
  set celcius(value) {
    this._celsius = value;
  }

  // Getter for fahrenheit
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  // Setter for fahrenheit
  set fahrenheit(value) {
    this._celsius = ((value - 32) * 5) / 9;
  }
}

const temp = new Temperature(0);
console.log(temp.celsius); // 0

console.log(temp.fahrenheit); // 32
// set temperature in fahrenheit
temp.fahrenheit = 200; // 200 องศาฟาเรนไฮต์
// ทำการแปลงองศาฟาเรนไฮต์เป็นองศาเซลเซียส โดยใช้สูตร
// (200 - 32) * 5 / 9 = 93.33333333333333
console.log(temp.celsius); // 93.33333333333333

// หรือ 93.33 ถ้าใช้ toFixed(2) จะได้ 93.33
temp.celsius = 37; // set temperature in celsius 37 องศาเซลเซียส
// ทำการแปลงองศาเซลเซียสเป็นองศาฟาเรนไฮต์ โดยใช้สูตร
// 37 * 9 / 5 + 32 = 98.6
console.log(temp.fahrenheit); // 98.6
 */

// Example 2
/* class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }

  // Getter for balance
  get balance() {
    // ใช้ toFixed() เพื่อกำหนดจำนวนทศนิยมgxHo 2 ตำแหน่ง
    return `$${this._balance.toFixed(2)}`;
  }

  // Setter for balance is intentionally omitted to protect the balance
  deposit(amount) {
    // ถ้าฝากเงินน้อยกว่าหรือเท่ากับ 0 จะแสดงข้อความว่า Deposit amount must be positive.
    if (amount <= 0) {
      console.error('Deposit amount must be positive.');
      return;
    }
    this._balance += amount;
  }

  withdraw(amount) {
    // ถ้าถอดเงินมากกว่ายอดเงินที่มีจะแสดงข้อความว่า Insufficient balance. และจะไม่ทำการถอนเงิน
    if (amount > this._balance) {
      console.error('Insufficient balance.');
      return;
    }
    this._balance -= amount;
  }
}

let account = new BankAccount('Bob', 1000);
console.log(account.balance); // $1000.00
account.deposit(500);
console.log(account.balance); // $1500.00

// กรณีถอนเงินมากกว่ายอดเงินที่มี
account.withdraw(2000); // Insufficient balance.
*/

/* // Example 1
class Person {
  constructor(name) {
    this._name = name; // private variable
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(value) {
    if (value.length < 2) {
      console.error('Name is too short.');
      return; // ถ้าไม่มี return จะได้ undefined และ ออกจาก function
    }
    this._name = value;
  }
}

// constructor(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Getter
// get fullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

// // Setter
// set fullName(value) {
//   const parts = value.split(' ');
//   this.firstName = parts[0];
//   this.lastName = parts[1];
// }
// }

let person = new Person('John');
console.log(person.name); // John ถัาไม่มี getter จะได้ undefined
person.name = 'Pop';
console.log(person.name); // Pop

person.name = 'P';
console.log(person.name); // Name is too short.
 */
