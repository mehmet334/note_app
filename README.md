# 📝 Note App

React kullanılarak geliştirilmiş basit ama işlevsel bir **not uygulaması**.
Kullanıcılar farklı renklerde notlar ekleyebilir, listeleyebilir ve arama kutusu sayesinde notlarını filtreleyebilirler.

---

## 🚀 Özellikler

* 🗒️ Textarea üzerinden yeni not ekleme
* 🎨 Renk seçimi (5 farklı renk seçeneği)
* 📋 Notları seçilen renge göre listeleme
* 🔍 Arama kutusu ile filtreleme
* 💾 (İsteğe bağlı) Notları LocalStorage’da saklama desteği
* 🧩 React Hooks (useState) kullanımı

---

## 📁 Klasör Yapısı

```
note-app/
├── index.html
├── package.json
└── src/
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

---

## ⚙️ Kurulum

1️⃣ **Projeyi klonla**

```bash
git clone https://github.com/mehmet334/note_app.git
cd note_app
```

2️⃣ **Bağımlılıkları yükle**

```bash
npm install
```

3️⃣ **Projeyi çalıştır**

```bash
npm run dev
```

Tarayıcıda otomatik olarak açılmazsa [http://localhost:5173](http://localhost:5173) adresine git.

---

## 🧠 Kullanım

1. Not alanına yazı gir.
2. Renklerden birini seç.
3. “ADD” butonuna tıklayarak notu ekle.
4. Notlar alt kısımda seçilen renk ile birlikte listelenir.
5. Üstteki “Search” alanı ile daha önce yazılmış notları filtreleyebilirsin.



## 🛠️ Teknolojiler

| Teknoloji        | Açıklama             |
| ---------------- | -------------------- |
| React 19         | Bileşen tabanlı yapı |
| Vite 7           | Geliştirme sunucusu  |
| CSS3             | Stil ve renk yapısı  |
| JavaScript (ES6) | İşlevsel yapı        |

---

## 💡 Geliştirme Fikirleri

* Notları **LocalStorage** veya **IndexedDB**’de saklama
* Notlara **düzenle/sil** fonksiyonu ekleme
* **Koyu tema (Dark Mode)** ekleme
* Renk paletini özelleştirme

---

