import React, { useState } from "react";
import "../App.css";
import Chart from "react-google-charts";

export default function Insights() {
  // configure these lists with database info
  let incomesList = [
    "Housing",
    "$1",
    "Food",
    "$",
    "Clothing",
    "$1",
    "Business",
    "$4",
  ];
  let expensesList = [
    "Investment",
    "$1",
    "Salary",
    "$",
    "Deposit",
    "$1",
    "Business",
    "$4",
  ];

  const [incomes, setIncomes] = useState(incomesList);
  const [expenses, setExpenses] = useState(expensesList);

  const [tempNum, setTempNum] = useState(0);

  return (
    <>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7],
        ]}
        options={{
          title: "My Daily Activities",
          // Just add this option
          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </>
  );
}
