// model
const Expense = require("../model/Expense");

// route= GET ('/api/v1/expenses')
const getAllExpense = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res
      .status(200)
      .json({ success: true, count: expenses.length, data: expenses });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

// route= GET ('/api/v1/expenses/:id')
const getExpense = async (req, res) => {
  try {
    const { id: expenseID } = req.params;
    const expense = await Expense.findOne({ _id: expenseID });
    if (!expense) {
      return res
        .status(404)
        .json({ sucess: false, msg: `No expense with id: ${expenseID}` });
    }
    res.status(200).json({ success: true, data: expense });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

// route= POST ('/api/v1/expenses')
const createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json({ success: true, data: expense });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

// route= PATCH ('/api/v1/expenses/:id')
const updateExpense = async (req, res) => {
  try {
    const { id: expenseID } = req.params;
    const expense = await Expense.findOneAndUpdate(
      { _id: expenseID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!expense) {
      return res
        .status(404)
        .json({ sucess: false, msg: `No expense with id: ${expenseID}` });
    }
    res.status(200).json({ success: true, data: expense });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

// route= DELETE ('/api/v1/expenses/:id')
const deleteExpense = async (req, res) => {
  try {
    const { id: expenseID } = req.params;
    const expense = await Expense.findOneAndDelete({ _id: expenseID });
    if (!expense) {
      return res
        .status(404)
        .json({ sucess: false, msg: `No expense with id: ${expenseID}` });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

module.exports = {
  getAllExpense,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
};
