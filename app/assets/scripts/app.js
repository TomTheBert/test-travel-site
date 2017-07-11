var Person = require('./modules/Person');

var john = new Person("John Doe", "blue");
var jane = new Person("Jane Smith", "green");

jane.greet();
john.greet();