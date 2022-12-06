const express = require("express");
const router = express.Router();

const {
  getAllExpense,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenses");

router.route("/").get(getAllExpense).post(createExpense);
router.route("/:id").get(getExpense).patch(updateExpense).delete(deleteExpense);

module.exports = router;
