var express = require('express');
var router = express.Router();
const Employee = require('../models/employee'); 

/* GET all employees*/
router.get('/', async function (req, res, next) {
  let allEmps = await Employee.find({});
  res.json(allEmps); 
});
 
/* GET all employees*/
router.get('/:id', async function (req, res, next) {
  console.log(req.params.id);
 // let currentEmp = await Employee.findById(req.params.id);
 let currentEmp = await Employee.findOne({_id:req.params.id}); 
  res.json(currentEmp); 
}); 

/* POST add employee*/
router.post('/', async function (req, res, next) { 
  let newEmp= new Employee(req.body);
  let response= await newEmp.save();
  res.json(response); 
}); 
/* PUT update employee*/
router.put('/:id', async function (req, res, next) {
  let empId= req.params.id;
  //update object can be just the fileds you want to update 
  let response=  await Employee.findByIdAndUpdate(empId,req.body); 
  res.json(response); 
});

/* PUT update employee*/
router.delete('/:id', async function (req, res, next) {
  let empId= req.params.id;
  //update object can be just the fileds you want to update 
  let response=  await Employee.findByIdAndDelete(empId);
  res.json(response); 
});
 
 
module.exports = router;
