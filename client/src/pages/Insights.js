import React, { useState } from 'react';
import "../App.css";

export default function Insights() {

  // configure these lists with database info
  let incomesList = ["Housing", "$1","Food","$","Clothing","$1", "Business", "$4"]
  let expensesList = ["Investment", "$1","Salary","$","Deposit","$1", "Business", "$4"]

  const [incomes, setIncomes] = useState(incomesList)
  const [expenses, setExpenses] = useState(expensesList)

  const [tempNum, setTempNum] = useState(0)

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
      <h1 className="insightsTitle">Insights</h1>
      <div className="cards">
        <div className="card1">
          <h1>Income</h1>
          <table>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Housing</td>
              <td>$1</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>$2</td>
            </tr>
            <tr>
              <td>Clothing</td>
              <td>$3</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>$4</td>
            </tr>
          </table>
        </div>
        <div className="card2">
          <h1>Expenses</h1>
          <table>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Investment</td>
              <td>$1</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>$2</td>
            </tr>
            <tr>
              <td>Deposit</td>
              <td>$3</td>
            </tr>
          </table>
          </div>
      </div>
    </div>
  );
}
