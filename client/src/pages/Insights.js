import React, { useState } from "react";
import "../App.css";

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

  // const renderIncomes = incomes.map((income) => {
  //   console.log(incomes)
  //   if (incomes.indexOf(income, tempNum) % 2 !== 0) {
  //     console.log(income)
  //     console.log(tempNum)
  //     setTempNum(prev => prev + 1)
  //     return (
  //       <tr key={tempNum}>
  //         <th>Category</th>
  //         <th>Amount</th>
  //       </tr>
  //     )
  //   }
  // })

  // console.log(renderIncomes)

  // const renderIncomes = incomes.map((income) => {

  // })

  return (
    <div className="App-header">
      <p>yo</p>
    </div>
  );
}
