const ToDoModel = require("../models/ToDoModel");

module.exports.getAllToDo = async (_req, res) => {
	const todo = await ToDoModel.find();
	res.send(todo);
};
