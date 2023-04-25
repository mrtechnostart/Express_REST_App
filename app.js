// Imports
const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const {connect} = require("./db/connect")
require("dotenv").config()
// Middleware

app.use(express.json())


// Routes

app.use("/api/v1/tasks",tasks)

async function connectDB(){
    try{
        await connect(process.env.MONGO_URI)
        console.log("Connection Established To Database")
        app.listen(3000,console.log("Listening at port 3k"))
    }
    catch(err){
        console.log(err)
    }
}
connectDB()