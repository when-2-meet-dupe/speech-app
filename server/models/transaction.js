import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  title: String,
  amount: Number,
  date: Date,
  category: String,
});

const transaction = mongoose.model("Transaction", transactionSchema);

export default transaction;
