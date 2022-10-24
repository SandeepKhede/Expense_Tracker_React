import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">

      <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} />
          <ExpensesChart expenses={filterExpenses}/>
      {/* using ternary operation for no data */}
      {/* 
      you can also use this trick for avoiding ternary conditons
      {filterExpenses.length === 0 && <p>No expense found.</p> }
       */}
      <ExpenseList items={filterExpenses}/>
      
    </Card>
  );
}

export default Expenses;