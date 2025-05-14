import express from "express";

import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;
