const mongoose = require('mongoose')

async function connectDB()
{
    await mongoose.connect("mongodb+srv://expense-tracker:zqVOqoU9gwtk9CoI@backend.eespwpy.mongodb.net/expenses")
    console.log("Connected to DB")
}

module.exports = connectDB;