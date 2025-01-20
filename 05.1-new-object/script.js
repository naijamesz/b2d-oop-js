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
    console.log(this.users);
    // ใช้ forEach ในการวนลูปแสดงข้อมูลของ user ทุกคน
    this.users.forEach(user => user.displayInfo());
  }
}

let userList = new Users();
// console.log(userList.displayAllUsers());

// Create an instance of User
let user1 = new User(prompt('User 1 :'), prompt('Email :'));
// console.log(user1.displayInfo());

let user2 = new User('Duck Doe', 'duck@development.com');
// console.log(user2.displayInfo());

let user3 = new User('Dan', 'dan@development.com');
// console.log(user3.displayInfo());

// แบบเพิ่ม user ด้วย method addUser ทีละคน
userList.addUser(user1);
userList.addUser(user2);
userList.addUser(user3);
// console.log(userList.displayAllUsers());

userList.displayAllUsers();
