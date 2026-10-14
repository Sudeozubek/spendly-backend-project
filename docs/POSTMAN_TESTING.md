# Spendly — Postman Test Rehberi

## Hazırlık

1. Proje klasöründe `npm install` (ilk kez).
2. `npm start` — terminalde `Spendly API dinleniyor: http://localhost:3000` görünmeli.
3. Postman'de koleksiyon import: `postman/Spendly.postman_collection.json`
4. Koleksiyon değişkeni `baseUrl` = `http://localhost:3000` (varsayılan)

## Önerilen test sırası (CRUD)

Sunucu her restart'ta bellek sıfırlanır; sırayı tek oturumda uygulayın.

| Sıra | İstek | Beklenen kod | Not |
|------|--------|--------------|-----|
| 1 | POST Create Expense | 201 | `data.id` değerini not alın |
| 2 | GET List Expenses | 200 | `data` içinde en az 1 kayıt |
| 3 | GET Expense by ID | 200 | URL'deki id = POST'tan gelen id |
| 4 | PUT Update Expense (full) | 200 | Tüm zorunlu alanlar body'de |
| 5 | DELETE Expense | 200 | `message` ile silindi |
| 6 | GET Expense by ID (aynı id) | 404 | Silindikten sonra |

## Örnek POST body

```json
{
  "title": "Kahve",
  "amount": 45,
  "category": "Food",
  "description": "latte",
  "date": "2026-10-14"
}
```

## Örnek PUT body (tam güncelleme)

```json
{
  "title": "Kahve XL",
  "amount": 55,
  "category": "Food",
  "description": "sütlü",
  "date": "2026-10-15"
}
```

## Olmayan ID testi

- `GET http://localhost:3000/api/expenses/99999` → **404**
- Mesaj: `id 99999 ile harcama bulunamadı.`

## Bozuk JSON testi

- POST `/api/expenses`
- Header: `Content-Type: application/json`
- Body (raw): `{"title":`  (kasıtlı hatalı)
- Beklenen: **400**, `Geçersiz JSON gövdesi...`

## Logger kontrolü

`npm start` çalışan terminalde her istekten sonra şuna benzer satır:

```text
[2026-10-14T18:14:55.760Z] POST /api/expenses
```

Method, endpoint ve ISO zaman damgası görünmeli.

## Ekran görüntüleri (teslim — Stage 9)

PDF teslim formu için Postman'den **5 CRUD** isteğinin ekran görüntüsünü alın (status + body görünsün). Dosyaları `docs/screenshots/` klasörüne kaydedin. Bu rehberde screenshot yer tutucu yoktur; görselleri siz üretirsiniz.

Önerilen dosya adları:

- `01-post-create.png`
- `02-get-list.png`
- `03-get-by-id.png`
- `04-put-update.png`
- `05-delete.png`
