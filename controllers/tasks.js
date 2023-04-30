const Task = require("../models/task");

const getAllTask = async(req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch(e){
        res.status(500).json({e})
    }
};
const getTask = async (req, res) => {
  try{
    const {id:taskID} = req.params
      const task = await Task.findOne({_id:taskID})
      if(!task){
        return res.status(404).json({msg:`No Such Task Exist With ID ${taskID}`})
      }
        res.status(200).json({task})
  }
  catch(e){
    res.status(500).json({e})
  }
  
};
const postTask = async (req, res) => {
  // const sendData = req.body; Will return send data, because of express.json() middleware
  try{
    const task = await Task.create(req.body);
    res.status(201).json(task);
  }
  catch(e){
    res.status(500).json(e)
  }
};
const deleteTask = async(req, res) => {
  try{
    const {id:TaskId} = req.params.id;
    const task = await Task.findByIdAndDelete({_id:TaskId})
    if(!task){
      return res.status(201).json({status: "failed",value:"Not Found"})
    }
    res.status(201).json({status: "success",value:[task]})
  }
  catch(e){
    res.status(404).json(e)
  }
};
const updateTask = async(req, res) => {
  try{
    const {id:TaskId} = req.params
    const task = await Task.findOneAndUpdate({_id:TaskId},req.body,{
      new:true,
      runValidators:true
    } )
    if(!task){
        return res.status(404).json({status: "failed",value:"Not Found"})
    }
    res.json(task)
  }
  catch(error){
    res.status(500).json({error})
  }
};
module.exports = {
  getAllTask,
  postTask,
  getTask,
  updateTask,
  deleteTask,
};
