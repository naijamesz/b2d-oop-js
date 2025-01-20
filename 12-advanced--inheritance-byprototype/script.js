// Prototype chain
// Example 4 Prototype inheritance
const mammal = {
  breath: function () {
    console.log('Breathing');
  },
};

const human = Object.create(mammal, {
  speak: {
    value: function () {
      console.log('Speaking');
    },
  },
});

human.breath(); // Breathing
human.speak(); // Speaking

// Example 3
function Bird(name) {
  this.name = name;
}

Bird.prototype.fly = function () {
  console.log(`${this.name} is flying.`);
};

function Eagle(name, speed) {
  Bird.call(this, name);
  this.speed = speed;
}

Eagle.prototype = Object.create(Bird.prototype);
Eagle.prototype.constructor = Eagle;

const eagle = new Eagle('Eddy', 90);
eagle.fly(); // Eddy is flying.

eagle.speed = 70;
console.log(`${eagle.name} flying speed is ${eagle.speed} km/hrs`); // Eddy flying speed is 70 km/hrs

// Example 1 - 2
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} make a noise.`);
};

function Dog(name) {
  Animal.call(this, name); // Super constructor call
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const dog = new Dog('Drake');
dog.speak(); // Drake barks.

const cat = {
  speak: function () {
    console.log(`${this.name} meows.`);
  },
};

const lion = Object.create(cat, { name: { value: 'Leo' } });
lion.speak(); // Leo meows

// Dynamically chaging prototype
Object.setPrototypeOf(lion, Dog.prototype);
lion.speak(); // Leo barks.
