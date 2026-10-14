const {
  addExpense,
} = require("../data/expenses");

// Stage 6'da diğer işlemler tek tek eklenecek.
function notImplementedYet(req, res) {
  res.status(501).json({
    success: false,
    message: "Bu işlem bir sonraki Stage 6 adımında eklenecek.",
  });
}

/**
 * POST /api/expenses — yeni harcama kaydı oluşturur.
 * İstemci id ve timestamp göndermemeli; sunucu addExpense içinde üretir.
 */
function createExpense(req, res) {
  // express.json() sayesinde gövde req.body'de; Content-Type: application/json gerekir.
  const { title, amount, category, description, date } = req.body;

  // Başlık zorunlu ve boşluklardan arındırıldığında anlamlı olmalı.
  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "title zorunludur ve boş olamaz.",
    });
  }

  // Tutar sayı olmalı; string "50" kabul etmem — JSON'da number gönderilmeli.
  if (typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({
      success: false,
      message: "amount pozitif bir sayı olmalıdır.",
    });
  }

  if (typeof category !== "string" || category.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "category zorunludur ve boş olamaz.",
    });
  }

  if (typeof date !== "string" || date.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "date zorunludur (örnek: 2026-10-14).",
    });
  }

  if (description !== undefined && typeof description !== "string") {
    return res.status(400).json({
      success: false,
      message: "description metin (string) olmalıdır.",
    });
  }

  const newExpense = addExpense({
    title: title.trim(),
    amount,
    category: category.trim(),
    description,
    date: date.trim(),
  });

  // 201 Created: yeni kaynak başarıyla oluşturulduğunu belirtir.
  return res.status(201).json({
    success: true,
    data: newExpense,
  });
}

module.exports = {
  createExpense,
  getAllExpenses: notImplementedYet,
  getExpenseById: notImplementedYet,
  updateExpense: notImplementedYet,
  deleteExpense: notImplementedYet,
};
