// static method เป็นการบอกว่า Method เราสร้างขึ้นนี้จะเป็นระดับ class ไม่ใช่ระดับ instance หรือ object ที่สร้างขึ้นจาก class นั้นๆ ซึ่งต้องทำการสร้าง new object นั้นขึ้นก่อนถึงจะเรียกใช้ method นี้ได้

// static method สามารถเรียกใช้ได้โดยไม่ต้องสร้าง object ขึ้นมาก่อน
// Example 1 static method
class MathUtility {
  static pi = 3.14159; // สามารถกำหนดค่าให้กับ property ของ class ได้โดยตรง ถ้าไม่กำหนดค่าจที่ไม่ใช่ static ไม่งั้นจะเกิด error จะต้องเป็น static เหมือนกัน

  static areaOfCircle(radius) {
    // return this.pi * radius ** 2; แบบนี้คือต้องทำการสร้าง constructor ขึ้นมาก่อน ถึงจะเรียกใช้ this.pi ได้ ดังนั้นให้ใช้ MathUtility.pi แทน this.pi
    // ตัวอย่างของการเรียกใช้ระดับ class โดยไม่ต้องสร้าง object ขึ้นมาก่อน
    return MathUtility.pi * radius ** 2;
  }
}

// ถ้าเป็น static ไม่ต้องสร้าง object ขึ้นมาใหม่ แต่สามารถเรียกใช้ method ได้เลย
console.log(MathUtility.areaOfCircle(5));
console.log(MathUtility.pi);

// Example 2 static method with array

class ArrayUtility {
  static Max(arr) {
    return Math.max(...arr);
  }

  static Min(arr) {
    return Math.min(...arr);
  }
}

console.log(ArrayUtility.Max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output 10
console.log(ArrayUtility.Min([1, 2, 3, 4, 5]));
// Output 1

// ไม่ต้องสร้าง object ขึ้นมาใหม่ แต่สามารถเรียกใช้ class ตามดว้ย.method() ได้เลย

// Example 3 static method with Singleton Pattern
class AppConfig {
  static instance; // instance ต้องเป็น static ถึงจะสามารถเรียกใช้ได้โดยไม่ต้องสร้าง object ขึ้นมาก่อน

  constructor(settings) {
    if (AppConfig.instance) {
      return AppConfig.instance;
    }

    this.settings = settings;
    AppConfig.instance = this;
  }

  static getInstance(settings) {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig(settings);
      // ถ้าไม่มี instance จะสร้าง instance ขึ้นมา
    }
    return AppConfig.instance;
  }
}

const config1 = AppConfig.getInstance({ language: 'English' }); // บอกให้้สร้าง instance ขึ้นมา 1 ตัว และส่งค่าเข้าไป
console.log(config1.settings);
// Output { language: 'English' }

const config2 = AppConfig.getInstance({ language: 'Thai' });
// object config2 จะต้องไม่เหมือนกันกับ config1 แต่จะเหมือนกันเพราะเป็น Singleton Pattern
console.log(config1 === config2); // true
// แสดงว่า config1 กับ config2 เป็น object เดียวกัน นั่นคือ คุณสมบัติของ Singleton Pattern ที่ผลิต object ออกมาได้เพียง object เดียว ถ้า instance อยู่ในระดับ class จะเป็น static method ถ้า instance จะออกเป็น instance ตัวเดียว

// ถ้าต้องการแก้ไขค่าใน instance ต้องทำการสร้าง instance ใหม่ และส่งค่าเข้าไปใหม่
AppConfig.instance = { language: 'Thai' };
console.log(AppConfig.instance); // { language: 'Thai' }
console.log(config1.settings); // { language: 'English' }

// Example 4 Constants with api endpoint
// ถ้าชื่อตัวแปรที่เป็นตัวพิมพ์ใหญ๋(UPPERCASE) จะถือว่าเป็นค่าคงที่ และไม่ควรทำการแก้ไขค่าได้
class Constants {
  static API_ENDPOINT = 'https://api.example.com';
  static TIMEOUT = 10000; // 10 seconds
}

console.log(Constants.API_ENDPOINT); // Access namespaced constant
// Output https://api.example.com

// Example 5 static method
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role; // admin, editor, viewer
  }

  static roles = {
    admin: 'admin',
    editor: 'editor',
    viewer: 'viewer',
  };

  static hasAdminAccess(user) {
    return user.role === User.roles.admin;
  }

  static hasEditAccess(user) {
    return user.role === User.roles.admin || user.role === User.roles.editor;
  }
}

const adminUser = new User('John', User.roles.admin);
console.log(adminUser); // User { name: 'John', role: 'admin' }

// การใช้งานผสมผสานกันระหว่าง static method และ class ทั่วไป
console.log(User.hasAdminAccess(adminUser)); // true

const viewerUser = new User('Jane', User.roles.viewer);
console.log(User.hasAdminAccess(viewerUser)); // false

// Example 6 ConversionUtility

class ConversionUtil {
  // สร้าง static method สำหรับการแปลงอุณหภูมิ celsius เป็น fahrenheit
  static celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32 + `°F`;
  }

  // สร้าง static method สำหรับการแปลงอุณหภูมิ fahrenheit เป็น celsius
  static fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 + `°C`;
  }

  // สร้าง static method สำหรับการแปลงระยะทาง kilometers เป็น miles
  static kilometersToMiles(kilometers) {
    return kilometers * 0.621371 + ` miles`;
  }

  // สร้าง static method สำหรับการแปลงระยะทาง miles เป็น kilometers
  static milesToKilometers(miles) {
    return miles / 0.621371 + `kilometers`;
  }

  // สร้าง static method สำหรับการแปลงน้ำหนัก kilograms เป็น pounds
  static kilogramsToPounds(kilograms) {
    return kilograms * 2.20462 + ` pounds`;
  }

  // สร้าง static method สำหรับการแปลงน้ำหนัก pounds เป็น kilograms
  static poundsToKilograms(pounds) {
    return pounds / 2.20462 + ` kilograms`;
  }

  // สร้าง static method สำหรับการแปลงความยาว meters เป็น feet
  static metersToFeet(meters) {
    return meters * 3.28084 + ` feet`;
  }

  // สร้าง static method สำหรับการแปลงความยาว feet เป็น meters
  static feetToMeters(feet) {
    return feet / 3.28084 + ` meters`;
  }

  // สร้าง static method สำหรับการแปลงความยาว millimeters เป็น inches
  static millimetersToInches(millimeters) {
    return millimeters / 25.4 + ` inches`;
  }

  // สร้าง static method สำหรับการแปลงความยาว inches เป็น millimeters
  static inchesToMillimeters(inches) {
    return inches * 25.4 + ` millimeters`;
  }

  // สร้าง static method สำหรับการแปลงความยาว centimeters เป็น inches
  static centimetersToInches(centimeters) {
    return centimeters / 2.54 + ` inches`;
  }

  // สร้าง static method สำหรับการแปลงความยาว inches เป็น centimeters
  static inchesToCentimeters(inches) {
    return inches * 2.54 + ` centimeters`;
  }
}
// 0 °C = 32 °F
console.log(ConversionUtil.celsiusToFahrenheit(0)); // 32 °F
console.log(ConversionUtil.fahrenheitToCelsius(32)); // 0 °C

// 1 kilometer = 0.621371 miles
console.log(ConversionUtil.kilometersToMiles(10)); // 6.21371 miles
console.log(ConversionUtil.milesToKilometers(6.21371)); // 10 kilometers

// 1 kilogram = 2.20462 pounds
console.log(ConversionUtil.kilogramsToPounds(50)); // 110.231 pounds
console.log(ConversionUtil.poundsToKilograms(150)); // 68.0396 kilograms

// 1 meter = 3.28084 feet
console.log(ConversionUtil.metersToFeet(10)); // 32.8084 feet
console.log(ConversionUtil.feetToMeters(32.8084)); // 10 meters

// 1 millimeter = 0.0393701 inches
console.log(ConversionUtil.millimetersToInches(100)); // 3.93701 inches
console.log(ConversionUtil.inchesToMillimeters(3.93701)); // 100 millimeters

// 1 centimeter = 0.393701 inches Or 1 inch = 2.54 centimeters
console.log(ConversionUtil.centimetersToInches(10)); // 3.93701 inches
console.log(ConversionUtil.inchesToCentimeters(12)); // 30.48 centimeters

// Example 7 static method
class Logger {
  static log(message) {
    console.log(`[LOG] - ${new Date().toISOString()} - ${message}`);
  }

  static error(message) {
    console.error(`[ERROR] - ${new Date().toISOString()} - ${message}`);
  }
}

Logger.log('User logged in'); // [LOG] - 2021-09-29T07:00:00.000Z - User logged in
Logger.error('Database connection failed.'); // [ERROR] - 2021-09-29T07:00:00.000Z - Database connection failed.
