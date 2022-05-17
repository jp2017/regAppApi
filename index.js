const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRouter = require("./routers/productRoutes");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo"))
  .catch((err) => console.log("err in Mongo", err));

//ROUTES
app.use("/api/v1/products", productRouter);

app.listen(4000, () => console.log("Backend is running!"));
