const { Router } = require("express");
const { getAllToDo, createTodo, updateToDo, deleteToDo } = require("../controller/toDoController");

const router = Router();

router.get("/get-All", getAllToDo);
router.post("/create-todo", createTodo);
router.put("/update-todo", updateToDo);
router.delete("/delete-todo", deleteToDo);

module.exports = router;
