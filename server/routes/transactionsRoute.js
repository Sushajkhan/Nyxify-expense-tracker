const express = require("express");
const router = express.Router();

const {
  AddExpense,
  GetExpense,
  DeleteExpense,
} = require("../controllers/expenseController");
const {
  AddIncome,
  GetIncomes,
  DeleteIncome,
} = require("../controllers/incomeController");

router
  .post("/add-income", AddIncome)
  .get("/get-incomes", GetIncomes)
  .delete("/delete-income/:id", DeleteIncome)
  .post("/add-expense", AddExpense)
  .get("/get-expenses", GetExpense)
  .delete("/delete-expense/:id", DeleteExpense);

module.exports = router;
