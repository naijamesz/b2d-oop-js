class Car {
  counstructor(brand, model, year) {
    this.brand = brand; // this is a property blueprint
  }
  // Display the brand of the car Method
  display() {
    console.log(`This car is a ${this.brand}.`);
  }
}

let myCar = new Car('Ford');
console.log(myCar.display()); // Accessing method of the object

// Create an HTML element for the car
let carElement = document.createElement('div');
carElement.textContent = `This car is a ${myCar.brand}.`;

// Append the car element to the body of the document
document.body.appendChild(carElement);
