/**
 * Hiçbir route ile eşleşmeyen istekler buraya düşer.
 * Bu middleware'i TÜM route tanımlarından sonra app.use(notFound) ile eklemeliyim.
 */
function notFound(req, res) {
  res.status(404).json({
    success: false,
    message: `Route bulunamadı: ${req.method} ${req.originalUrl}`,
  });
}

module.exports = notFound;
