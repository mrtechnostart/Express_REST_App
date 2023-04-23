const getAllTask = (req,res)=>{
    res.send("All Tasks Here")
}
const getTask = (req,res)=>{
    res.send("Single Task Here")
}
const updateTask = (req,res)=>{
    res.send("Update Here")
}
const postTask = (req,res)=>{
    res.send("Post Here")
}
const deleteTask = (req,res)=>{
    res.send("Delete Here")
}
module.exports = {
    getAllTask,postTask,getTask,updateTask,deleteTask
}