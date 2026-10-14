# Spendly — Proje Tanıtım Dokümanı

## Amaç

Spendly, kullanıcıların günlük harcamalarını kaydetmesini, listelemesini, güncellemesini ve silmesini sağlayan bir **REST API** bitirme projesidir. Proje; Node.js ve Express.js ile backend geliştirme, routing, CRUD işlemleri ve temel middleware (logger) becerilerini uygulamalı göstermek için hazırlanmıştır.

## Çözdüğü problem

Kişisel veya küçük ölçekli bütçe takibinde harcamaların dağınık notlar veya hafızada tutulması hataya açıktır. Spendly, harcama bilgisini standart JSON formatında sunucuya gönderip tek bir yerden yönetmeyi hedefler. İlk sürüm yalnızca **backend API** olduğu için veriler sunucu belleğinde tutulur; uygulama yeniden başladığında kayıtlar sıfırlanır.

## Hedef kullanıcılar

- Harcama kaydı tutmak isteyen bireyler (ileride mobil veya web istemci bağlanabilir)
- Backend staj / eğitim kapsamında API geliştiren geliştiriciler (öğrenme ve demo)

## Temel özellikler

- Harcama oluşturma (POST)
- Tüm harcamaları listeleme (GET)
- Tek harcama detayı (GET `:id`)
- Tam güncelleme (PUT `:id` — tüm zorunlu alanlar gerekli)
- Silme (DELETE `:id`)
- Her istek için konsol logger (method, endpoint, zaman damgası)
- Basit hata yanıtları (400, 404, 500) ve bilinmeyen route kontrolü

## Sistem akışı (özet)

1. İstemci (ör. Postman) HTTP isteği gönderir (`http://localhost:3000/api/expenses`).
2. Express uygulaması isteği alır; logger kaydı yazılır.
3. JSON gövdesi varsa `express.json()` ile `req.body` oluşur.
4. İlgili route, controller fonksiyonunu çalıştırır.
5. Controller veri katmanındaki in-memory diziyi okur veya günceller.
6. Sonuç JSON olarak ve uygun HTTP durum kodu ile döner.

## Teknoloji

- Node.js
- Express.js
- JavaScript (CommonJS)
- In-memory depolama (veritabanı yok)

## Bilinen sınırlamalar

- Kimlik doğrulama (login) yok; herkes aynı bellekteki listeyi görür.
- Veriler kalıcı değildir; sunucu restart ile silinir.
- Filtreleme, sayfalama ve raporlama bu sürümde yoktur.
