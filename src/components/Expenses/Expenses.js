import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  // save selected year in a state
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        {/* prop onChangeFilter can be used now in ExpenseFilter.js */}
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
