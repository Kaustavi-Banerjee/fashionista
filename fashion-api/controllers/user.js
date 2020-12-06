const express=require("express");
const mongoose=require("mongoose");

const router=express.Router();
const UserModel = mongoose.model("User");

router.get("/list", (req, res)=>{
    //Getting
    UserModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs});
        }
    })
});

module.exports = router;
