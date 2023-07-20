import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const editButton = (
    <button className="new-expense button" onClick={editButtonHandler}>
      Add New Expense
    </button>
  );
  const expenseFormContent = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      stopEditing={stopEditingHandler}
    ></ExpenseForm>
  );

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onReceiveExpenseData(expenseData);
  }
  function editButtonHandler(event) {
    setIsEditing(true);
  }

  function stopEditingHandler(){
    setIsEditing(false);
  }
  return <div className="new-expense">
    {!isEditing && editButton}
    {isEditing && expenseFormContent}
    </div>;
}

export default NewExpense;
