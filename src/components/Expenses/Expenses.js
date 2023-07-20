import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  function filterYearSelectedHandler(selectedYear) {
    setFilterYear(selectedYear);
  }
  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          defaultFilterYear={filterYear}
          onFilterYearSelected={filterYearSelectedHandler}
        ></ExpensesFilter>
        <ExpensesChart filteredExpenses={filteredExpenses}></ExpensesChart>
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
