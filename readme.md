# 🎮 Sayı Tahmin Oyunu

Bu proje, hem terminal (CLI) hem de web (HTML/CSS/JS) üzerinden oynanabilen basit bir sayı tahmin oyunudur.

---

## 🖥️ Terminal Sürümü

- 1 ile belirli bir sayı arasında rastgele bir sayı seçilir.
- Kullanıcıdan tahmin alınır.
- İpuçları: Daha büyük / Daha küçük.
- Zorluk seviyesi, deneme hakkı ve geçen süre hesaplanır.
- Renkli çıktılar için `chalk` paketi kullanılır.

### Başlatmak için:

```bash
npm install
node index.js
````

---

## 🌐 Web Sürümü

`web/` klasörü içinde bulunur.
Tarayıcıda çalışır. İçerik:

* `index.html`
* `style.css`
* `script.js`

Yapman gereken tek şey: `web/index.html` dosyasını tarayıcıda açmak.

---

## 📁 Klasör Yapısı

```
guess-number/
├── index.js
├── package.json
├── README.md
└── web/
    ├── index.html
    ├── style.css
    └── script.js
```

---