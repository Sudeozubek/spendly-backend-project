/**
 * Logger middleware — PDF'de zorunlu olan temel middleware.
 * Her gelen istekte method, path ve zaman damgasını terminale yazdırırım.
 *
 * Middleware: (req, res, next) => { ... } şeklinde bir fonksiyondur.
 * - req  → istemcinin gönderdiği istek (URL, method, body, ...)
 * - res  → sunucunun döndüreceği cevap
 * - next → bir sonraki middleware veya route handler'a geçmek için çağrılır
 *
 * next() çağırmazsam istek burada takılır; route hiç çalışmaz.
 */
function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  // originalUrl: mount edilmiş router path'leri dahil tam istek yolu (ör. /api/expenses)
  const endpoint = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${endpoint}`);

  next();
}

module.exports = logger;
