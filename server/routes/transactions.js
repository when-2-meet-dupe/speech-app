import express from "express";

import {
  createTrans,
  getTrans,
  updateTrans,
  deleteTrans,
} from "../controllers/transactions.js";

const router = express.Router();

router.get("/", getTrans);
router.get("/", createTrans);
router.patch("/:id", updateTrans);
router.delete("/:id", deleteTrans);

export default router;
