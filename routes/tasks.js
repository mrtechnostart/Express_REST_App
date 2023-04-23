const express = require("express");
const router = express.Router();
const {getTask} = require("../controllers/tasks")
// Syntax : router.route("/").get/put/push(controller)

router.route("/").get(getTask);

module.exports = router