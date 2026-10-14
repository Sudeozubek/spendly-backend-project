// app.js içindeki Express uygulamasını buraya alıyorum.
// Ayrı dosya tutmamın sebebi: test veya farklı ortamda aynı app'i dinlemek isteyebilirim.
const app = require("./app");

// Ortam değişkeni PORT varsa onu kullanırım; yoksa 3000 (Postman ve dokümanlarla uyumlu).
const PORT = process.env.PORT || 3000;

// listen: belirtilen portta HTTP isteklerini dinlemeye başlar.
app.listen(PORT, () => {
  console.log(`Spendly API dinleniyor: http://localhost:${PORT}`);
});
