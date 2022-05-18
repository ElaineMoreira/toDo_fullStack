const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
	text: { required: true, type: String },
});

module.exports = mongoose.model("toDo", toDoSchema);
