const express = require('express');
const router = express.Router();
require("../db/connection");
const Your = require("../model/yourSchema");
const Count = require("../model/countSchema");
const address  = '63012edef8a7e9a6803a372f';

router.post('/', async (req, res) => {
    const data = req.body;
    const newPerson = new Your(data);
    const savePerson = await newPerson.save();
    if (savePerson) {
        Count.findById(address,(err,doc)=>{
            if(!err){
                Count.findByIdAndUpdate(address,{add:++doc.add},(err,doc)=>{})
            }
        })
        res.status(201).json({ message: "Thanks, Your data Saved Successfully" });
    }
    else {
        res.status(500).json({ error: "Failed To Add Your data successfully" });
    }
})
router.get('/',(req,res)=>{
    Your.find((err,docs)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json(docs);
        }
    })
})
router.delete('/:id',(req,res)=>{
    const id = req.params.id
    Your.findByIdAndDelete(id,(err,doc)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({Deleted:doc})
        }
    })
})
router.patch('/:id',(req,res)=>{
    const id = req.params.id
    const update = req.body
    Your.findByIdAndUpdate(id,update,(err,doc)=>{
        if(err){
            res.json({err:err})
        }
        else{
            Count.findById(address,(err,doc)=>{
                Count.findByIdAndUpdate(address,{add:++doc.update})
            })
            res.json({Updated:doc})
        }
    })
})
module.exports = router;