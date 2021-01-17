import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  amount: Number,
  type: String,
  category: String,
});

const transaction = mongoose.model("Transaction", transactionSchema);

export default transaction;
