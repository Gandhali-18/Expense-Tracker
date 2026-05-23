import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const AddExpense = () => {
  const [amt, setAmt] = useState("");
  const [cat, setCate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      amt: amt,
      cat: cat,
    };

    axios
      .post("http://localhost:3000/create-expense", data)
      .then((res) => {
        //console.log(res.data);
        alert("Expense added successfully");

        // clear inputs after submit
        setAmt("");
        setCate("");
        useNavigate("/feed")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-expense-form">
      <h1>Track your expense</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          placeholder="Enter expense amount"
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
        />

        <input
          type="text"
          name="category"
          placeholder="Expense caption"
          value={cat}
          onChange={(e) => setCate(e.target.value)}
        />

        <button type="submit" className="primary-btn">Add an expense</button>
      </form>
    </div>
  );
};

export default AddExpense;