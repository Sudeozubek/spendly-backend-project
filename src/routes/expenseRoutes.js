// express.Router: ilgili endpoint'leri tek bir modülde toplamak için mini bir uygulama gibi kullanılır.
const express = require("express");
const expenseController = require("../controllers/expenseController");

const router = express.Router();

// POST   /api/expenses      → oluştur (Stage 6)
router.post("/", expenseController.createExpense);

// GET    /api/expenses      → liste
router.get("/", expenseController.getAllExpenses);

// GET    /api/expenses/:id  → :id route parametresi — URL'deki id değeri req.params.id olur
router.get("/:id", expenseController.getExpenseById);

// PUT    /api/expenses/:id  → tam güncelleme (Stage 6)
router.put("/:id", expenseController.updateExpense);

// DELETE /api/expenses/:id  → sil
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
