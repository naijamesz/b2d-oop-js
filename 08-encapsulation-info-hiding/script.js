// Example 4: BankAccount 2 Deposit Withdraw Balance (Encapsulation)
class BankAccount {
  constructor(accountNumber) {
    let _balance = 0; // private variable
    this.accountNumber = accountNumber; // public variable

    this.deposit = amount => {
      if (amount > 0) {
        _balance += amount;
        console.log(`Deposited: ${amount} THB`);
      }
    };

    this.withdraw = amount => {
      // ถ้าจำนวนเงินที่ถอนน้อยกว่าหรือเท่ากับยอดเงินที่มี จะทำการถอนได้ ุ แต่ถ้ามากกว่าจะแสดง Insufficient balance
      if (amount <= _balance) {
        _balance -= amount;
        console.log(`Withdrawn: ${amount} THB`);
      } else {
        console.log('Insufficient balance'); // ยอดเงินคงเหลือไม่พอ
      }
    };

    this.getBalance = () => console.log(`Current balance: ${_balance} THB`);
  }
}

let account = new BankAccount(123456789);
account.deposit(500); // Deposited: 500 THB
account.withdraw(200); // Withdrawn: 200 THB
account.getBalance(); // Current balance: 300 THB
account.withdraw(400); // Insufficient balance

/* // Example 3 UserProfile
class UserProfile {
  constructor(username) {
    let _username = username; // _นำหน้าคือ private variable
    // สร้าง password แบบ random โดยใช้ Math.random() และ toString(36) และ slice(-8) ให้ได้ 8 ตัวอักษร
    let _password = Math.random().toString(36).slice(-8);

    this.getUsername = () => _username;
    this.setPassword = newPassword => (_password = newPassword);
    this.validatePassword = password => password === _password;
    this.getPassword = () => _password;
  }
}

let user = new UserProfile('Johnfarmer');
console.log(user.getUsername()); // Johnfarmer (จอห์นชาวไร่)
console.log(user.validatePassword('SomePassword')); // false
user.setPassword('newPassword');
console.log(user.validatePassword('newPassword')); // true
console.log(user.getPassword()); // newPassword

let user2 = new UserProfile('Doe');
console.log(user2.getUsername()); // Doe
console.log(user2.getPassword()); // จะแสดง password ที่สร้างโดย Math.random() และ toString(36) และ slice(-8) ให้ได้ 8 ตัวอักษรที่จะสุ่มมาใหม่ทุกครั้ง */

// Example 2 Temperature Celsius and Fahrenheit
/* class Temperature {
  constructor(celsius) {
    let _celsius = celsius; // private variable

    this.getCelsius = () => _celsius;
    this.setCelsius = newCelsius => {
      _celsius = newCelsius;
    };
    this.getFahrenheit = () => _celsius * 1.8 + 32;
    // this.getFahrenheit = () => (_celsius * 9) / 5 + 32; // same as above
  }
}

let temp = new Temperature(22);
console.log(temp.getCelsius()); // Output: 22
console.log(temp.getFahrenheit()); // Output: 71.6
temp.setCelsius(30); // Set the temperature in Celsius to 30
console.log(`${temp.getCelsius()} Celsius`); // Output: 30 Celsius (String)
console.log(`${temp.getFahrenheit()} fahrenheit`); // Output: 86 fahrenheit (String) */

/* // Encapsulation: Information Hiding

// Example 1 Bank Account
class BankAccout {
  constructor(accountNumber, balance) {
    let _balance = balance; // private variable
    this.accountNumber = accountNumber;

    // getter method ต้องอยู่ใน constructor เท่านั้น ถ้าอยู่นอก constructor จะเป็น property ของ object จึงต้องใช้ this. แล้วตามด้วย getter method
    this.getBalance = function () {
      return _balance;
    };

    this.deposit = function (amount) {
      if (amount > 0) {
        _balance += amount;
        console.log(`Deposit : ${amount} THB`);
      }
    };

    this.withdraw = function (amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
        console.log(`Withdraw : ${amount} THB`);
      } else {
        console.log('Invalid amount to withdraw!');
      }
    };
  }
}

let account = new BankAccout('123456789', 1000);
console.log(account.accountNumber); // 123456789
console.log(account._balance); // undefined

// ถ้าเรียก _balance จะได้ undefined เพราะ _balance เป็น private variable จึงไม่สามารถเข้าถึงได้ ต้องใช้ getter method ที่เขียนไว้ใน constructor เพื่อเข้าถึงค่าของ _balance ได้
console.log(account.getBalance()); // 1000
account.deposit(500); // Deposit 500 THB
console.log(account.getBalance()); // 1500

account.withdraw(2000); // Invalid amount to withdraw!
account.withdraw(50); // Withdraw 50 THB
console.log(account.getBalance()); // 1450
 */
