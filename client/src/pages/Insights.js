import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { PieArcSeries, PieChart } from "reaviz";

function Insights() {
  const transactions = useSelector((state) => state.transactions);

  const getExpenseSums = () => {
    let expenseSums = {
      housing: 0,
      food: 0,
      clothing: 0,
      business: 0,
      transportation: 0
    };

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].category === "housing") {
        expenseSums.housing += transactions[i].amount;
      } else if (transactions[i].category === "food") {
        expenseSums.food += transactions[i].amount;
      } else if (transactions[i].category === "clothing") {
        expenseSums.clothing += transactions[i].amount;
      } else if (transactions[i].category === "business") {
        expenseSums.business += transactions[i].amount;
      } else if (transactions[i].category === "transportation") {
        expenseSums.transportation += transactions[i].amount;
      }
    }
    return expenseSums;
  };

  const getIncomeSums = () => {
    let incomeSums = {
      investment: 0,
      earnings: 0,
      deposit: 0,
      etransfer: 0
    };

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].category === "investment") {
        incomeSums.investment += transactions[i].amount;
      } else if (transactions[i].category === "earnings") {
        incomeSums.earnings += transactions[i].amount;
      } else if (transactions[i].category === "deposit") {
        incomeSums.deposit += transactions[i].amount;
      } else if (transactions[i].category === "etransfer") {
        incomeSums.etransfer += transactions[i].amount;
      }
    }

    return incomeSums;
  };

  const getTypeSums = () => {
    let typeSums = {
      expense: 0,
      income: 0
    };

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type === "expense") {
        typeSums.expense += transactions[i].amount;
      } else if (transactions[i].type === "income") {
        typeSums.income += transactions[i].amount;
      }
    }

    return typeSums;
  };

  const [incomeSums, setIncomeSums] = useState(getIncomeSums);
  const [expenseSums, setExpenseSums] = useState(getExpenseSums);
  const [typeSums, setTypeSums] = useState(getTypeSums);

  const renderExpenses = () => {
    return (
      <Box flexDirection="column" alignContent="center" className="leftChart">
        <h4>Expense</h4>
        <PieChart
          label="Expense"
          height={300}
          width={400}
          data={[
            { key: "Housing", data: expenseSums.housing },
            { key: "Food", data: expenseSums.food },
            { key: "Clothing", data: expenseSums.clothing },
            { key: "Business", data: expenseSums.business },
            { key: "Transportation", data: expenseSums.transportation }
          ]}
          series={<PieArcSeries colorScheme="Accent" />}
        />
      </Box>
    );
  };

  const renderIncome = () => {
    return (
      <Box flexDirection="column">
        <h4>Income</h4>
        <PieChart
          label="Income"
          colorScheme="greens"
          height={300}
          width={400}
          data={[
            { key: "Investments", data: incomeSums.investment },
            { key: "Earnings", data: incomeSums.earnings },
            { key: "Deposit", data: incomeSums.deposit },
            { key: "Etransfer", data: incomeSums.etransfer }
          ]}
          series={<PieArcSeries colorScheme="Accent" />}
        />
      </Box>
    );
  };

  const renderTypes = () => {
    return (
      <>
        <PieChart
          height={400}
          width={400}
          data={[
            { key: "Income", data: typeSums.income },
            { key: "Expense", data: typeSums.expense }
          ]}
          series={<PieArcSeries doughnut={true} colorScheme="Accent" />}
        />
      </>
    );
  };

  return (
    <>
      <Box display="flex" flexDirection="row" textAlign="center">
        {renderExpenses()}
        {renderIncome()}
      </Box>
      {renderTypes()}
    </>
  );
}

export default Insights;
