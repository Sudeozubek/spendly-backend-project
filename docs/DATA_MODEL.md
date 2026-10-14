# Spendly — Veri Modeli

Harcama (`Expense`) kaydı aşağıdaki alanlardan oluşur.

| Alan | Tip | Zorunlu | Açıklama |
|------|-----|---------|----------|
| `id` | number (tam sayı) | Evet (sunucu) | Benzersiz kimlik; istemci göndermez |
| `title` | string | Evet | Kısa ad (ör. Kahve, Otobüs) |
| `amount` | number | Evet | Pozitif tutar; JSON'da number olmalı |
| `category` | string | Evet | Örnek: Food, Transportation, Education, Shopping, Bills |
| `description` | string | Hayır | Ek açıklama; gönderilmezse `""` |
| `date` | string | Evet | Harcama tarihi (ör. `2026-10-14`) |
| `createdAt` | string (ISO 8601) | Evet (sunucu) | Kayıt oluşturulma zamanı |
| `updatedAt` | string (ISO 8601) | Evet (sunucu) | Son güncelleme zamanı |

## Sunucu yönetimli alanlar

- **POST:** `id`, `createdAt`, `updatedAt` otomatik üretilir.
- **PUT:** `id` ve `createdAt` korunur; `updatedAt` yenilenir. İstemci bu alanları body'de gönderse bile kullanılmaz.

## Örnek kayıt (JSON)

```json
{
  "id": 1,
  "title": "Kahve",
  "amount": 45,
  "category": "Food",
  "description": "latte",
  "date": "2026-10-14",
  "createdAt": "2026-10-14T18:14:55.761Z",
  "updatedAt": "2026-10-14T18:14:55.761Z"
}
```

## API yanıt zarfı

Başarılı tek kayıt veya liste:

```json
{
  "success": true,
  "data": { }
}
```

`data` liste endpoint'inde dizi olur.

Hata:

```json
{
  "success": false,
  "message": "Açıklayıcı hata metni"
}
```

Silme başarısı:

```json
{
  "success": true,
  "message": "id 1 harcama silindi."
}
```
