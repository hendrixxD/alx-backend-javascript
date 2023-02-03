class Animal {
	constructor(name) {
		this.name = name;
	}

	speak () {
		console.log(`${this.name} makes a noise.`);
	}
}

//inheritance
class Dog extends Animal {
	constructor(name) {
		super(name): //call the super class 
		//constructor and pass in a name parameter
	}
	speak() {
		console.log(`${this.name} barks`);
	}
}

const d = new Dog('Mitzie');
d.speak(); //Mitzie barks.
