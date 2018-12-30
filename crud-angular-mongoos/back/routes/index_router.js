var express = require('express');
var router = express.Router();
var inventory = require('../model/schema')

/* GET home page. */
router.get('/', async function(req, res, next) {
  let allInventory = await inventory.find({});
  res.json(allInventory);
});

//Update by id//
router.put('/:id', async function(req,res){
    let id= req.params.id;
    let allInventory = await inventory.findOneAndUpdate({_id:id},req.body)
    res.json(allInventory);
})
//insert

router.post('/', async function(req,res){
   let newItem = new inventory(req.body);
   // new item goes throw a constructor of inventory, no constructor needed because, model-mongoose does it itself
   let insertedItem= await newItem.save();
   // save function doesnot require an input, its connected to the instance of inventory.
   // mongodb adds "" _id" automatically. 
   res.json(insertedItem)
});


// delete by id;
router.delete('/:id' , async function(req,res){
    console.log(req.params.id)
   // find one works with object;
    let deletedItem= await inventory.findOneAndDelete({_id:req.params.id})
    console.log(deletedItem)
    res.json(deletedItem)
})

// get one by id
router.get('/:id', async function(req,res){
    console.log(req.params);
    let  oneInventory= await inventory.findOne({_id:req.params.id});
    res.json(oneInventory);
});


module.exports = router;

