function Cat(name) {
	this.name = name
	this.stomach = [];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.die();
}


var mouse = new Mouse('mickey');
var cat = new Cat('Tom')
cat.eat(mouse);
console.log(cat)

module.exports = Cat;