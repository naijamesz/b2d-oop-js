// Polymorphism is the ability to call the same method on different objects and get different results.
// Polymorphism

// Example 4 Logger
class Logger {
  log(message) {
    throw new Error('Method log() must be implemented');
  }
}

class ConsoleLogger extends Logger {
  log(message) {
    console.log(`Console logger: ${message}`);
  }
}

class FileLogger extends Logger {
  log(message) {
    console.log(`File logger: Writing ${message} to a file`);
  }
}

function logMessage(logger, message) {
  logger.log(message);
}

const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger();
logMessage(consoleLogger, 'Hello, World!'); // Console logger: Hello, World!
logMessage(fileLogger, 'Hello, Logger File!'); // File logger: Writing Hello, Logger File! to a file

// Example 3
class PaymentMethod {
  processPayment(amount) {
    throw new Error('Method processPayment() must be implemented');
  }
}

class CreditCardPayment extends PaymentMethod {
  processPayment(amount) {
    return `Processing $${amount} payment with Credit Card`;
  }
}

class PaypalPayment extends PaymentMethod {
  processPayment(amount) {
    return `Processing $${amount} payment with Paypal`;
  }
}

class StripePayment extends PaymentMethod {
  processPayment(amount) {
    return `Processing $${amount} payment with Stripe`;
  }
}
// เรียกใช้งาน
function executePayment(paymentMethod, amount) {
  return paymentMethod.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
console.log(executePayment(creditCardPayment, 100));
const paypalPayment = new PaypalPayment();
console.log(executePayment(paypalPayment, 50)); // จ่ายเงิน 50 ดอลลาร์ด้วย Paypal
const stripePayment = new StripePayment();
console.log(executePayment(stripePayment, 100)); // จ่ายเงิน 100 ดอลลาร์

// Example 2
function sendNotification(notifiable) {
  if (notifiable.notify && typeof notifiable.notify === 'function') {
    notifiable.notify();
  } else {
    throw new Error('Object must implement notify method');
  }
}

const emailNotifier = {
  notify: () => console.log('Sending email notification'),
};

const smsNotifier = {
  notify: () => console.log('Sending SMS notification'),
};

[emailNotifier, smsNotifier].forEach(notifier => sendNotification(notifier));

// Example 1
class Animal {
  speak() {
    throw new Error('Subclass must implement speak method');
    // บังคับใช้ผ่าน subclass ที่จะ implement method speak
  }
}

class Dog extends Animal {
  speak() {
    return 'Hong Hong!';
  }
}

class Cat extends Animal {
  speak() {
    return 'Meow!';
  }
}

// const myAnimal = new Animal(); ถ้าสร้างโดย new Animal จะเกิด error เพราะ method speak ไม่ได้ implement ใน class Animal
const myAnimal = new Dog();
console.log(myAnimal.speak());

// โดยทำการเสร้าง object จาก subclass Dog จะสามารถเรียก method speak ได้ และ ยังสามารถแสดงผลลัพธ์ออกมาได้ตามที่ implement ไว้ใน subclass นั้นๆที่มี method speak ย้ำ ว่าที่มี method speak หรือ ถ้าเป็น method อื่นๆที่มีการ implement ใน superclass จะสามารถเรียกใช้ได้เหมือนกัน override ก็ได้ และที่แสดงออกมาทั้งสองให้สังเกตุข้างล่างที่เก็บเป็น array และใช้ forEach ในการวนลูปเพื่อเรียกใช้ method speak ของแต่ละ object ที่อยู่ใน array นั้นๆ
const animals = [new Dog(), new Cat()];

animals.forEach(animal => console.log(animal.speak()));
