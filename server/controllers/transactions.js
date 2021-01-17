import mongoose from "mongoose";
import Transaction from "../models/transaction.js";

export const getTrans = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    console.log(transactions);

    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTrans = async (req, res) => {
  const transaction = req.body;

  const newTransaction = new Transaction(transaction);

  try {
    await newTransaction.save();

    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTrans = () => {};

export const deleteTrans = () => {};
