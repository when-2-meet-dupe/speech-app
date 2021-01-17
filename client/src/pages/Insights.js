import React, { useState } from "react";
import "../App.css";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTransactions } from "../actions/transactions";

function Insights() {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const getExpenseSums = (transactions) => {
    let expenseSums = {
      housing: 0,
      food: 0,
      clothing: 0,
      business: 0,
      transportation: 0,
    };

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[0].category === "housing") {
        expenseSums.housing++;
      } else if (transactions[0].category === "food") {
        expenseSums.food++;
      } else if (transactions[0].category === "clothing") {
        expenseSums.clothing++;
      } else if (transactions[0].category === "business") {
        expenseSums.business++;
      } else if (transactions[0].category === "transportation") {
        expenseSums.business++;
      }
    }

    return incomeSums;
  };

  const getIncomeSums = (transactions) => {
    let incomeSums = {
      investment: 0,
      earnings: 0,
      deposit: 0,
      etransfer: 0,
    };

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[0].category === "investment") {
        incomeSums.investment++;
      } else if (transactions[0].category === "earnings") {
        incomeSums.earnings++;
      } else if (transactions[0].category === "deposit") {
        incomeSums.deposit++;
      } else if (transactions[0].category === "etransfer") {
        incomeSums.etransfer++;
      }
    }

    return incomeSums;
  };

  const getTypeSums = (transactions) => {
    let typeSums = {
      expense: 0,
      income: 0,
    };

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[0].type === "expense") {
        typeSums.expense++;
      } else if (transactions[0].type === "income") {
        typeSums.income++;
      }
    }

    return typeSums;
  };

  const [incomeSums, setIncomeSums] = useState({
    investment: 0,
    earnings: 0,
    deposit: 0,
    etransfer: 0,
  });

  const [expenseSums, setExpenseSums] = useState({
    housing: 0,
    food: 0,
    clothing: 0,
    business: 0,
    transportation: 0,
  });

  const [typeSums, setTypeSums] = useState({
    expense: 0,
    income: 0,
  });

  setTypeSums(getTypeSums(transactions));
  setIncomeSums(getIncomeSums(transactions));
  setExpenseSums(getExpenseSums(transactions));

  // useEffect(() => {
  //   dispatch(getTransactions());
  //   setTypeSums(getTypeSums(transactions));
  //   setIncomeSums(getIncomeSums(transactions));
  //   setExpenseSums(getExpenseSums(transactions));
  // }, []);

  return (
    <>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Expense Categories</div>}
        data={[
          ["housing", expenseSums.housing],
          ["food", expenseSums.food],
          ["clothing", expenseSums.clothing],
          ["business", expenseSums.business],
          ["transportation", expenseSums.transportation],
        ]}
        options={{
          title: "My Daily Activities",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </>
  );
}

export default Insights;
