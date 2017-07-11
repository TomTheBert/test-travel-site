function Person(name, color) {
	this.name = name,
	this.favColor = color,
	this.greet = function() {
		console.log("Hello my name is " + this.name + " and my favorite color is " + this.favColor + ".");
	}
}

module.exports = Person;