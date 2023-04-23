// Imports
const express = require("express");
const app = express();
const tasks = require("./routes/tasks")

// Middleware

app.use(express.json())


// Routes

app.use("/api/tasks",tasks)


app.listen(3000,console.log("Listening at port 3k"))