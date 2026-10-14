// Express paketini projeme dahil ediyorum.
// CommonJS'de dış paketleri require ile çağırırım.
const express = require("express");
const logger = require("./middleware/logger");
const expenseRoutes = require("./routes/expenseRoutes");

// Uygulama nesnesi: route'ları ve middleware'leri buraya bağlayacağım.
// Henüz sunucu dinlemiyor; sadece "nasıl cevap vereceğim" planı burada.
const app = express();

// express.json() bir middleware'dir.
// İstemci POST/PUT ile JSON gönderdiğinde gövdeyi okuyup req.body'ye yazması için bunu eklemem gerekir.
// CRUD aşamasında harcama verisini req.body üzerinden alacağım.
app.use(express.json());

// Logger'ı route tanımlarından ÖNCE ekliyorum.
// Böylece GET /, GET /api/expenses vb. her istek terminale düşer (PDF zorunluluğu).
app.use(logger);

// Harcama API'si: router içindeki path'ler "/" ile başlar, burada önek "/api/expenses" eklenir.
// Örnek: router.post("/") → dışarıdan POST /api/expenses
app.use("/api/expenses", expenseRoutes);

// Geçici test route: sunucunun ayakta olduğunu kontrol etmek için.
// Tarayıcı veya Postman ile GET http://localhost:3000/ yapılabilir.
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Spendly API çalışıyor. CRUD mantığı Stage 6'da tamamlanacak.",
  });
});

// Bu dosyayı başka dosyalarda (server.js) kullanmak için dışa aktarıyorum.
module.exports = app;
