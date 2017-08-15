var require = inquirer("require")

var input = process.argv(2);

var NewCard = function (front, back) {
	this.front = front;
	this.back = back;
}

module.exports = regQuestion;

