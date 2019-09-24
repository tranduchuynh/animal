
var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');


var cat = new Cat();
var mouse = new Mouse('Jerry');
try {
	cat.eat(mouse);
}
catch(error) {
	console.log('Error while eating a dog');
}
console.log(cat);
var dog = new Dog('husky');
dog.sayHi();