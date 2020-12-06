const express=require("express");
const mongoose=require("mongoose");

const router=express.Router();
const AuthModel = mongoose.model("Auth");


router.get("/list", (req, res)=>{
    //Getting
    AuthModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs});
        }
    })
});
// Update a product
router.update("/:id", (req, res)=>{
  if(!req.body) {
      return res.status(400).send({
          message: "Data to update can not be empty!"
      });
  }
  const id = req.params.id;
  res.render('/auth/edit/:id');
  AuthModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
      .then(data =>{
          if(!data) {
              res.status(404).send({
                  message: `Cannot update Authentication with id=${id}. Maybe data is not found.`
              });
          } else {
              
              res.send({
                  message: `Authentication is updated successfully`
              })
          }
          
      })
      .catch(err => {
          res.status(500).send({
              message: `Error updating Person with id=` + id
          });
      });
});

// Delete a Tutorial with the specified id in the request
router.delete("/:id", (req, res)=>{
  const id = req.params.id;
  AuthModel.findByIdAndRemove(id)
  .then(data => {
      if (!data) {
      res.status(404).send({
          message: `Cannot delete authentication with id=${id}. Maybe data was not found!`
      });
      } else {
      res.send({
          message: `Data was deleted successfully!`
      });
      }
  })
  .catch(err => {
      res.status(500).send({
      message: `Could not delete data with id=` + id
      });
  });
});

module.exports = router;
