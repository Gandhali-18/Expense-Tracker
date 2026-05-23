import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Feed from './Feed';
import '../index.css';

const Home = () => {
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/expenses")
      .then(res => setTotalExpense(res.data.totalExpense))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="hero-card">
        <h1>Good Morning, User 👋</h1>
        <p>Here's what's happening with your finances today.</p>

        <div className="total-expense-display">
          <span>Total Expenses This Month</span>
          <h2 className="amount">₹ {totalExpense}</h2>
        </div>

        <Link to="/create-expense" style={{ textDecoration: 'none' }}>
          <button className="primary-btn">
            + Add New Expense
          </button>
        </Link>
      </div>

      <div>
        <h2 className="feed-section-title">Recent Expenses</h2>
        <Feed />
      </div>
    </div>
  );
};

export default Home;

