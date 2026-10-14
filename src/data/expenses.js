// Harcamaları sunucu belleğinde (RAM) tutuyorum.
// const kullanıyorum çünkü dizinin kendisini başka bir değişkene atamak istemiyorum;
// ama dizi içine eleman ekleyip çıkarabilirim (push, splice vb.).
const expenses = [];

// Bir sonraki kayıt için kullanacağım sayaç.
// Her yeni harcamada artırıp benzersiz id üretirim (1, 2, 3, ...).
let nextId = 1;

/**
 * Yeni bir benzersiz id döndürür.
 * Veritabanı olmadığı için id'yi sunucu tarafında ben üretiyorum.
 */
function generateId() {
  const id = nextId;
  nextId += 1;
  return id;
}

/**
 * Tüm harcamaların kopyasını döndürür.
 * [...expenses] ile sığ kopya alıyorum; dışarıdan doğrudan diziyi değiştirmek zorlaşır.
 */
function getAllExpenses() {
  return [...expenses];
}

/**
 * id ile tek bir harcama arar.
 * Bulamazsa null döner — controller tarafında 404 kararı vereceğim.
 */
function findExpenseById(id) {
  const numericId = Number(id);
  return expenses.find((expense) => expense.id === numericId) || null;
}

/**
 * Yeni harcama ekler.
 * payload: istemciden gelen alanlar (title, amount, ...).
 * id ve timestamp alanlarını burada set ediyorum; istemci bunları göndermemeli.
 */
function addExpense(payload) {
  const now = new Date().toISOString();

  const newExpense = {
    id: generateId(),
    title: payload.title,
    amount: payload.amount,
    category: payload.category,
    description: payload.description ?? "",
    date: payload.date,
    createdAt: now,
    updatedAt: now,
  };

  expenses.push(newExpense);
  return newExpense;
}

/**
 * Var olan harcamayı tamamen yeniler (PUT için veri katmanı).
 * existing: dizideki mevcut kayıt referansı.
 * payload: güncellenmiş alanların tamamı (controller zorunlu alanları kontrol edecek).
 * id, createdAt değişmez; updatedAt yenilenir.
 */
function replaceExpense(existing, payload) {
  const now = new Date().toISOString();

  existing.title = payload.title;
  existing.amount = payload.amount;
  existing.category = payload.category;
  existing.description = payload.description ?? "";
  existing.date = payload.date;
  existing.updatedAt = now;

  return existing;
}

/**
 * id ile harcamayı diziden siler.
 * true: silindi, false: böyle bir id yoktu.
 */
function deleteExpenseById(id) {
  const numericId = Number(id);
  const index = expenses.findIndex((expense) => expense.id === numericId);

  if (index === -1) {
    return false;
  }

  expenses.splice(index, 1);
  return true;
}

module.exports = {
  getAllExpenses,
  findExpenseById,
  addExpense,
  replaceExpense,
  deleteExpenseById,
  generateId,
};
