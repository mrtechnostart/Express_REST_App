const Task = require("../models/task");

const getAllTask = (req, res) => {
  res.send("All Tasks Here");
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("Update Here");
};
const postTask = async (req, res) => {
  // const sendData = req.body; Will return send data, because of express.json() middleware
  try{
    const task = await Task.create(req.body);
    res.status(201).json(task);
  }
  catch(e){
    res.status(404).json(e)
  }
};
const deleteTask = (req, res) => {
  res.send("Delete Here");
};
module.exports = {
  getAllTask,
  postTask,
  getTask,
  updateTask,
  deleteTask,
};
