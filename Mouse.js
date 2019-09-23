function Mouse(name) {
	this.name = name;
	this.dead = true;
}

Mouse.prototype.die = function(){
	this.dead = true
}

module.exports = Mouse; 