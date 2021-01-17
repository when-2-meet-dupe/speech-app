import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  type: String,
  amount: Number,
  category: String,
});

const transaction = mongoose.model("Transaction", transactionSchema);

export default transaction;
