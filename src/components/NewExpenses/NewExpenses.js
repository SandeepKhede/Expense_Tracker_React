import React, { useState } from 'react';
import "./NewExpenses.css"
import ExpenseForm from './ExpenseForm';
const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
            const expenseData = {
                ...enteredExpenseData,
                id:Math.random().toString()
            };
            props.onAddExpense(expenseData);
            setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler =()=>{
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
            {isEditing  && 
                 <ExpenseForm 
                 onSaveExpenseData={onSaveExpenseDataHandler}
                 onCancel={stopEditingHandler}/>
            }
        </div>
    )
}
export default NewExpenses;