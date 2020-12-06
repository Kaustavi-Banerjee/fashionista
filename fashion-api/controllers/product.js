const express=require("express");
const mongoose=require("mongoose");

const router=express.Router();
const ProductModel = mongoose.model("Product");

router.get("/add", (req, res)=>{
    res.render("add");
});

router.post("/add", (req, res)=>{
    var product = new ProductModel();
    product.pname = req.body.pname;
    product.pimage = req.body.pimage;
    product.pcategory = req.body.pcategory;
    product.price = req.body.price;
    product.save((err, doc)=>{
        if(!err){
            res.redirect("/product/list");
        }else {
            res.send("Error Occured");
        }
    });
    //res.render("add");
});

router.get("/list", (req, res)=>{
    //Getting
    ProductModel.find((err, docs)=>{
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
  res.render('/product/edit/:id');
  ProductModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
      .then(data =>{
          if(!data) {
              res.status(404).send({
                  message: `Cannot update Product with id=${id}. Maybe product is not found.`
              });
          } else {
              
              res.send({
                  message: `Product is updated successfully`
              })
          }
          
      })
      .catch(err => {
          res.status(500).send({
              message: `Error updating Product with id=` + id
          });
      });
});

// Delete a Tutorial with the specified id in the request
router.delete("/:id", (req, res)=>{
  const id = req.params.id;
  ProductModel.findByIdAndRemove(id)
  .then(data => {
      if (!data) {
      res.status(404).send({
          message: `Cannot delete Product with id=${id}. Maybe Tutorial was not found!`
      });
      } else {
      res.send({
          message: `Product was deleted successfully!`
      });
      }
  })
  .catch(err => {
      res.status(500).send({
      message: `Could not delete Product with id=` + id
      });
  });
});

module.exports = router;
