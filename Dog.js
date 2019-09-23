function Dog() {
	this.stomach = []
}

Dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};