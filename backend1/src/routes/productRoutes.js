import {
  createProduct,
  deleteProduct,
  getProduct,
} from "../controllers/productControllers.js";

import express from "express";

const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;
