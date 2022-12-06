const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  expenseName: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  expenseAmount: {
    type: Number,
    required: [true, "Please add a number"],
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
