// Class
class Counter {
  constructor() {
    this.count = 0;
    this.decreaseBtn = document.querySelector('#decreaseBtn');
    this.resetBtn = document.querySelector('#resetBtn');
    this.increaseBtn = document.querySelector('#increaseBtn');
    this.countLabel = document.querySelector('#countLabel');

    this.increaseBtn.onclick = () => this.increaseCount();
    this.decreaseBtn.onclick = () => this.decreaseCount();
    this.resetBtn.onclick = () => this.resetCount();
  }

  increaseCount() {
    this.count++;
    this.updateLabel();
  }

  decreaseCount() {
    this.count--;
    this.updateLabel();
  }

  resetCount() {
    this.count = 0;
    this.updateLabel();
  }

  updateLabel() {
    this.countLabel.textContent = this.count;
  }
}

const counter = new Counter();

// Counter program
// Module in Javascript

// const decreaseBtn = document.querySelector('#decreaseBtn');
// const resetBtn = document.querySelector('#resetBtn');
// const increaseBtn = document.querySelector('#increaseBtn');
// const countLabel = document.querySelector('#countLabel');

// let count = 0;

// increaseBtn.onclick = () => {
//   count++;
//   countLabel.textContent = count;
// };

// decreaseBtn.onclick = () => {
//   count--;
//   countLabel.textContent = count;
// };

// resetBtn.onclick = () => {
//   count = 0;
//   countLabel.textContent = count;
// };
