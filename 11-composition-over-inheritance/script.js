/* class Animal {
  eat() {
    console.log('Eating...');
  }
}

class Dog extends Animal {
  bark() {
    console.log('I can bark');
  }
} */

// const myDog = new Dog();
// myDog.eat(); // Inherited from Animal class สืบทอดมาจาก class Animal
// myDog.bark(); // I can bark

// แบบ Composition จะเป็นการสร้าง object ใหม่โดยการรวม method หรือ behavior จาก object อื่นๆ มาเป็นของตัวเอง
function EatingBehavior() {
  return {
    eat: () => console.log('Eating...'),
  };
}
// Composition คือการสร้าง object ใหม่โดยการรวม method หรือ behavior จาก object อื่นๆ มาเป็นของตัวเอง
function BarkBehavior() {
  return {
    bark: () => console.log('BrowwwwwWooww...!'),
    bark2: () => console.log('BrowwwwwWooww... Bruh!'),
    hello: username => console.log('Hello!', username),
  };
}

function createDog() {
  return {
    ...EatingBehavior(),
    ...BarkBehavior(),
  };
}

const myDog = createDog(); // createDog จะ return object ที่มี method eat และ bark ก็คือ รีีเทิร์น EatingBehavior และ BarkBehavior มาเก็บใน createDog ด้วยการ spread operator ...EatingBehavior() และ ...BarkBehavior() เสมือนการเรียกใช้้งาน bark และ eat จาก EatingBehavior และ BarkBehavior โดยตรง
// สร้าง object ขึ้นมาจาก createDog และเรียกใช้ method eat และ bark ได้
// Behavior คือ พฤติกรรม หรือ การกระทำเหมือน method ใน function ที่ return object ที่มี method
myDog.eat(); // Eating...
myDog.bark(); // BrowwwwwWooww...!
myDog.bark2(); // BrowwwwwWooww... Bruh!
myDog.hello('Chackky'); // Hello! Chackky

// Example 2

function VisibilityControl() {
  let isVisible = true;
  return {
    show: () => {
      isVisible = true;
      console.log('Component Shown');
    },
    hide: () => {
      isVisible = false;
      console.log('Component Hidden');
    },
  };
}

function Button(label) {
  const { show, hide } = VisibilityControl(); // รับ method จาก VisibilityControl มาใช้
  return {
    label,
    click: () => console.log(`Button ${label} clicked`),
    show,
    hide,
  };
}

const saveButton = Button('Save');
saveButton.show(); // Component Shown
saveButton.click(); // Button Save clicked
saveButton.hide(); // Component Hidden
