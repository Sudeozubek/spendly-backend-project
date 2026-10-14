// Express paketini projeme dahil ediyorum.
// CommonJS'de dış paketleri require ile çağırırım.
const express = require("express");

// Uygulama nesnesi: route'ları ve middleware'leri buraya bağlayacağım.
// Henüz sunucu dinlemiyor; sadece "nasıl cevap vereceğim" planı burada.
const app = express();

// express.json() bir middleware'dir.
// İstemci POST/PUT ile JSON gönderdiğinde gövdeyi okuyup req.body'ye yazması için bunu eklemem gerekir.
// CRUD aşamasında harcama verisini req.body üzerinden alacağım.
app.use(express.json());

// Geçici test route: sunucunun ayakta olduğunu kontrol etmek için.
// Tarayıcı veya Postman ile GET http://localhost:3000/ yapılabilir.
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Spendly API çalışıyor. Harcama endpoint'leri Stage 5-6'da eklenecek.",
  });
});

// Bu dosyayı başka dosyalarda (server.js) kullanmak için dışa aktarıyorum.
module.exports = app;
