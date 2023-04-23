const express = require("express");
const router = express.Router();
const {getTask, postTask, getAllTask, updateTask, deleteTask} = require("../controllers/tasks")
// Syntax : router.route("/").get/put/push(controller)

router.route("/").get(getAllTask).post(postTask);
router.route("/:id").patch(updateTask).delete(deleteTask).get(getTask)
module.exports = router