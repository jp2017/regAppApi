// const Product = require("../models/productModel");

// exports.createProduct = async (req, res) => {
//   const newProduct = new Product(req.body);
//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json({
//       status: "success",
//       product: savedProduct,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(201).json({
//       status: "success",
//       products,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };
