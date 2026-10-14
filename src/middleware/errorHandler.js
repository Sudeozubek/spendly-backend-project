/**
 * Express hata middleware'i — dört parametre alır: (err, req, res, next).
 * express.json() bozuk JSON gördüğünde hata fırlatır; burada yakalayıp 400 döndürürüm.
 */
function errorHandler(err, req, res, next) {
  // JSON parse hatası (gövde { veya } eksik, virgül hatası vb.)
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Geçersiz JSON gövdesi. İstek gövdesini kontrol edin.",
    });
  }

  // Beklenmeyen sunucu hatası — stack trace'i istemciye göstermiyorum.
  console.error("Beklenmeyen hata:", err.message);

  return res.status(500).json({
    success: false,
    message: "Sunucu hatası oluştu.",
  });
}

module.exports = errorHandler;
