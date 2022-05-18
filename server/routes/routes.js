const { Router } = require("express");
const { getAllToDo } = require("../controller/getAllToDo");

const router = Router();

router.get("/getAll", getAllToDo);
