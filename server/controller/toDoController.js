const ToDoModel = require("../models/ToDoModel");
/** pega todas as tarefas adicionadas */
module.exports.getAllToDo = async (_req, res) => {
	const todo = await ToDoModel.find();
	res.send(todo);
};
/** cria novas tarefas*/
module.exports.createTodo = (req, res) => {
	const { text } = req.body;

	ToDoModel.create({ text })
		.then(() => res.status(201).send("Adicionado com sucesso!"))
		.catch((err) => console.log(err));
};
/** atualiza as tarefas por id e texto */
module.exports.updateToDo = (req, res) => {
	const { id, text } = req.body;
	/** tem que desestruturar o text para ele ser atualizado */
	ToDoModel.findByIdAndUpdate(id, { text } )
		.then(() => res.status(201).send("Atualizado com sucesso!"))
		.catch((err) => console.log(err));
};
/** apaga as tarefas por id */
module.exports.deleteToDo = (req, res) => {
	const { id } = req.body;

	ToDoModel.findByIdAndDelete(id)
		.then(() => res.status(201).send("Deletado com sucesso!"))
		.catch((err) => console.log(err));
};
