//javascript class start
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new MyArray();
arr.push("first");
arr.push("second");
arr.push("third");
arr.delete(1);
console.log(arr);

//javascript class end

// Initializing a constructor function start
function fn() {
  this.data = {};
  this.length = 0;
}

fn.prototype.customPush = function (e) {
  this.data[this.length] = e;
  this.length++;
  return this.length;
};

fn.prototype.get = function (index) {
  return this.data[index];
};

fn.prototype.pop = function () {
  const lastItem = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return lastItem;
};

fn.prototype.delete = function (index) {
  for (let i = index; i < this.length - 1; i++) {
    this.data[i] = this.data[i + 1];
  }
  delete this.data[this.length - 1];
  this.length--;
};

const array = new fn();

array.customPush("Hi");
array.customPush("fine");
array.delete(0);

console.log(array);

// Initializing a constructor function end
