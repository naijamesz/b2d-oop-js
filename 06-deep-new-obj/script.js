class User {
  // ถ้าชื่อคลาสมี s ในชื่อของ class มักจะเป็นคลาสที่เป็น Array
  // Constructor to initialize the object
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Method to display user information
  displayInfo() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

class Users {
  constructor() {
    this.users = [];
  }
  // method add user and parameter is object
  addUser(user) {
    this.users.push(user);
  }

  displayAllUsers() {
    // console.log(this.users);
    // ใช้ forEach ในการวนลูปแสดงข้อมูลของ user ทุกคน
    this.users.forEach(user => user.displayInfo());
  }

  findUserByName(name) {
    return this.users.find(user => user.name === name);
  }
}

let userList = new Users(); // ประกาศตัวแปร userList และสร้าง object ใหม่ของ Users โดยใช้ new

// อะไรที่ประกาศใช้ครั้งเดียวไม่ต้องประกาศตัวแปรมากเก็บไว้ก็ได้ เหมือนหลัง new คือ ข้อมูลก้อนนึงที่เราจะใช้
userList.addUser(new User('John', 'john@farmer.com'));
userList.addUser(new User('Duck', 'duck@development.com'));
userList.addUser(new User('Dan', 'dan@development.com'));

userList.displayAllUsers();

// ค้นหา user ด้วยชื่อ
let foundUser = userList.findUserByName('Duck');
if (foundUser) {
  foundUser.displayInfo(); // "Name: "Duck", Email: "duck@development.com"
} else {
  console.log('User not found');
}

// console.log(userList.displayAllUsers());

// Create an instance of User
// let user1 = new User(prompt('User 1 :'), prompt('Email :'));

// let user1 = new User('John', 'john@farmer.com');
// // console.log(user1.displayInfo());

// let user2 = new User('Duck', 'duck@development.com');
// // console.log(user2.displayInfo());

// let user3 = new User('Dan', 'dan@development.com'));
// console.log(user3.displayInfo());

// แบบเพิ่ม user ด้วย method addUser ทีละคน
// userList.addUser(user1);
// userList.addUser(user2);
// userList.addUser(user3);

// Refactoring userList.addUser() เพราะอะไรที่ใช้แสดงผล หรือ นำมาใช้แค่ครั้งเดียวไม่จำเป็นต้องประกาศตัวแปรรมากเก็บไว้ก็ได้ เหมือนหลัง new คือ ข้อมูลก้อนนึงที่เราจะใช้
