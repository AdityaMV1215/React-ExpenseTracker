import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let expensesContent = <p className="expenses-list__fallback">No expenses found.</p>;

  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        ></ExpenseItem>
      );
    });
  }

  return (
    <ul className="expenses-list">
        {expensesContent}
    </ul>
  );
}

export default ExpensesList;
