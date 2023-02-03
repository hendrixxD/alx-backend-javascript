class Rectangle {
  //privaye class a fields
  #height = 0;
  #width;
  
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  // getter
  get area() {
    return this.area.calcArea();
  }

  // method
  calcArea() {
    return this.height * this.width;
  }

  * getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
