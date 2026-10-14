// Stage 6'da her fonksiyonu tek tek dolduracağım.
// Şimdilik route bağlantısını test etmek için geçici 501 yanıtı veriyorum.

function notImplementedYet(req, res) {
  res.status(501).json({
    success: false,
    message: "Bu işlem Stage 6'da eklenecek.",
  });
}

module.exports = {
  createExpense: notImplementedYet,
  getAllExpenses: notImplementedYet,
  getExpenseById: notImplementedYet,
  updateExpense: notImplementedYet,
  deleteExpense: notImplementedYet,
};
