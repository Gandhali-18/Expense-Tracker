import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [expenses, setExpense] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/expenses")
      .then((res) => {
        setExpense(res.data.expenses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3000/delete-expense/${id}`);

      setExpense(expenses.filter((expense) => expense._id !== id));
    } 
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="expenses-grid">
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <div key={expense._id} className="expense-card">
            <h3 className="expense-amount">₹ {expense.amount}</h3>
            <p className="expense-category">Category: {expense.category}</p>
            <p className="expense-date">Date: {new Date(expense.date).toLocaleDateString()}</p>
            <button className="danger-btn" onClick={()=>handleDelete(expense._id)}>Delete</button>
          </div>
        ))
      ) : (
        <h1 style={{ color: 'var(--muted)', width: '100%', textAlign: 'center', gridColumn: '1 / -1' }}>No expense available</h1>
      )}
    </div>
  );
};

export default Feed;
