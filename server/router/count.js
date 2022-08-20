const { application } = require('express');
const express = require('express');
const router = express.Router();
require("../db/connection");
const Count = require("../model/countSchema");

const address  = '63012edef8a7e9a6803a372f';
router.get('/',(req,res)=>{
    Count.find((err,docs)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json(docs);
        }
    })
})
// router.patch('/',(req,res)=>{
//     const {add,update} = req.body
//     Count.findById(address,(err,doc)=>{
//         if(err){
//             res.json({err:err});
//         }
//         else{
//             if(add){
//                 Count.findByIdAndUpdate(address,{add:++doc.add},(err1,doc)=>{
//                     if(err){
//                         res.json({err1:err});
//                     }
//                     else{
//                         res.json({message:"updated successfully"})
//                     }
//                 })
//             }
//             else if(update){
//                 Count.findByIdAndUpdate(address,{update:++doc.update},(err1,doc)=>{
//                     if(err){
//                         res.json({err:err1});
//                     }
//                     else{
//                         res.json({message:"updated successfully"})
//                     }
//                 })
//             }
//         }
//     })
// })

module.exports = router;