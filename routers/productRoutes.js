// const express = require("express");
// const productController = require("../controllers/productController");

// const router = express.Router();

// router
//   .route("/")
//   .post(productController.createProduct)
//   .get(productController.getAllProducts);

// module.exports = router;

const Product = require("../models/productModel");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json({
      status: "success",
      product: savedProduct,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().select(["name", "amount"]);
    res.status(201).json({
      status: "success",
      products,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
});

module.exports = router;
