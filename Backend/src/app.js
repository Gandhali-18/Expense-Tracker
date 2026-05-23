const express = require('express')
const expenseModel = require('../src/models/expense.model')
const { now } = require('mongoose')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

app.post("/create-expense" ,async(req,res)=>{
    //console.log(req.body);

    const expense = await expenseModel.create({
        date: Date.now(),
        amount : req.body.amt,
        category : req.body.cat
    });

    return res.status(200).json({
        message : "Expense is recorded successfully",
        expense
    });
});

app.get("/expenses",async(req,res)=>{

    const expenses = await expenseModel.find();
    const totalExpense = expenses.reduce((acc, curr) => acc + (curr.amount || 0), 0);

    return res.status(200).json({
        message:"Feteched expenses sucessfully",
        expenses,
        totalExpense
    });
});

app.delete("/delete-expense/:id" , async(req,res)=>{
    const id = req.params.id;

    const expense = await expenseModel.findByIdAndDelete(id);

    res.status(200).json({
        message:"Expense is deleted successfully",
        expense
    })
})

module.exports = app