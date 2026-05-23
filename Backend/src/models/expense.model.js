const mongoose = require('mongoose')


const expenseSchema = new mongoose.Schema({
     date: {
        type: Date,
        default: Date.now
    },
    amount : Number,
    category: String
})

const expenseModel = mongoose.model("latest-expense" , expenseSchema)

module.exports = expenseModel;