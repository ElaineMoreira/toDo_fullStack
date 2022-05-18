const { Router } = require("express");
const { getAllToDo, saveToDo } = require("../controller/getAllToDo");

const router = Router();

router.get("/get-All", getAllToDo);
router.post("/save-todo", saveToDo);

module.exports = router;
