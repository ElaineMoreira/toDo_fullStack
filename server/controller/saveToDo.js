const ToDoModel = require("../models/ToDoModel");

module.exports.saveToDo = (req, res) => {
	const { text } = req.body;

	ToDoModel.create({ text })
		.then(() => res.status(201).send("Successfully added!"))
		.catch((err) => console.log(err));
};
