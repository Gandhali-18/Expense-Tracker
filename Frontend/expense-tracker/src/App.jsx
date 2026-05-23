import React from 'react'
import AddExpense from './pages/AddExpense'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import Feed from './pages/Feed'
import Home from './pages/Home'

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';
  
  return (
    <aside className="sidebar">
      <h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
        ExpenseTracker
      </h2>
      
      <nav className="sidebar-nav">
        <Link to="/" className={isActive('/')}>
          <span>🏠</span> Dashboard
        </Link>
        <Link to="/expenses" className={isActive('/expenses')}>
          <span>📄</span> Transactions
        </Link>
        <Link to="/create-expense" className={isActive('/create-expense')}>
          <span>➕</span> Add Expense
        </Link>
      </nav>
    </aside>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-expense" element={<AddExpense />} />
            <Route path="/expenses" element={<Feed />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App