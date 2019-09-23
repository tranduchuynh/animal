function Cat(name) {
	this.name = name
	this.stomach = [];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.die();
}

function Mouse(name) {
	this.name = name;
	this.dead = false;
}

Mouse.prototype.die = function(){
	this.dead = true
}
var mouse = new Mouse('mickey');
var cat = new Cat('Tom')
cat.eat(mouse);
console.log(cat)