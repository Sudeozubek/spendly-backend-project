# Spendly — API Tasarım Dokümanı

**Base URL:** `http://localhost:3000`

Tüm harcama endpoint'leri: `/api/expenses`

---

## 1. Harcama oluştur

| | |
|---|---|
| **Method / URL** | `POST /api/expenses` |
| **Amaç** | Yeni harcama kaydı ekler |

**Headers:** `Content-Type: application/json`

**Request body (örnek):**

```json
{
  "title": "Kahve",
  "amount": 45,
  "category": "Food",
  "description": "latte",
  "date": "2026-10-14"
}
```

**Response 201:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Kahve",
    "amount": 45,
    "category": "Food",
    "description": "latte",
    "date": "2026-10-14",
    "createdAt": "2026-10-14T18:14:55.761Z",
    "updatedAt": "2026-10-14T18:14:55.761Z"
  }
}
```

**Status kodları:** `201` başarı, `400` validasyon, `400` geçersiz JSON

---

## 2. Harcamaları listele

| | |
|---|---|
| **Method / URL** | `GET /api/expenses` |
| **Amaç** | Tüm kayıtları döner |

**Request body:** Yok

**Response 200:**

```json
{
  "success": true,
  "data": []
}
```

Kayıt varsa `data` dizi içinde expense objeleri içerir.

**Status kodları:** `200`

---

## 3. Harcama detayı

| | |
|---|---|
| **Method / URL** | `GET /api/expenses/:id` |
| **Amaç** | Tek kayıt |

**Response 200:**

```json
{
  "success": true,
  "data": { }
}
```

**Response 404:**

```json
{
  "success": false,
  "message": "id 999 ile harcama bulunamadı."
}
```

---

## 4. Harcama güncelle (tam güncelleme)

| | |
|---|---|
| **Method / URL** | `PUT /api/expenses/:id` |
| **Amaç** | Kaydın tüm iş alanlarını yeniler |

**Headers:** `Content-Type: application/json`

**Request body:** POST ile aynı zorunlu alanlar (`title`, `amount`, `category`, `date`; `description` opsiyonel). Eksik alan → `400`.

**Response 200:**

```json
{
  "success": true,
  "data": { }
}
```

**Status kodları:** `200`, `400`, `404`

---

## 5. Harcama sil

| | |
|---|---|
| **Method / URL** | `DELETE /api/expenses/:id` |
| **Amaç** | Kaydı kaldırır |

**Request body:** Yok

**Response 200:**

```json
{
  "success": true,
  "message": "id 1 harcama silindi."
}
```

**Response 404:** Kayıt yoksa `success: false` ve bulunamadı mesajı.

---

## Diğer endpoint'ler

| Method / URL | Amaç | Kod |
|--------------|------|-----|
| `GET /` | API ayakta mesajı | 200 |
| Bilinmeyen path | Route yok | 404 — `Route bulunamadı: ...` |

## Validasyon mesajları (400 örnekleri)

- `title zorunludur ve boş olamaz.`
- `amount pozitif bir sayı olmalıdır.`
- `category zorunludur ve boş olamaz.`
- `date zorunludur (örnek: 2026-10-14).`
- `Geçersiz JSON gövdesi. İstek gövdesini kontrol edin.`
