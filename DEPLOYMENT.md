# Boyut Eğitim Web Sitesi — Yayına Alma (Deployment) Rehberi

Bu proje **Next.js 14 App Router** ile geliştirilmiştir ve Vercel, Netlify veya kendi özel sunucunuza kolayca kurulabilir.

---

## ⚡ 1. Yöntem: Vercel İle Tek Tıkla Yayınlama (Önerilen)

Vercel, Next.js projeleri için en hızlı ve ücretsiz sunucu hizmetidir.

1. [Vercel.com](https://vercel.com) adresine gidin ve üye olun / giriş yapın.
2. **Add New Project** butonuna tıklayın.
3. Proje klasörünü (`BoyutEgitim`) GitHub / GitLab / Bitbucket hesabınıza push edin ve Vercel'e bağlayın.
4. Framework olarak **Next.js** otomatik algılanacaktır.
5. **Deploy** butonuna basın. 1 dakika içinde siteniz canlıya geçecektir!

---

## 🌐 2. Yöntem: Standart Node.js Sunucusu (cPanel / VPS / Ubuntu)

Kendi Linux sunucunuzda çalıştırmak için:

```bash
# Klasöre gidin
cd /path/to/BoyutEgitim

# Bağımlılıkları yükleyin
npm install

# Production sürümünü derleyin
npm run build

# PM2 ile arka planda başlatın
pm2 start npm --name "boyut-egitim" -- start -- -p 3000
```

Nginx yönlendirmesi için proxy pass: `http://localhost:3000`.

---

## 🛠️ Yerel Çalıştırma (Local Development)

```bash
# Geliştirme modu
npm run dev

# Tarayıcıda açın: http://localhost:3000
```

---

## 📞 WhatsApp İletişim Bilgisi Güncelleme
Site içerisindeki WhatsApp yönlendirmeleri `src/lib/constants.ts` dosyasındaki `SITE_CONFIG` nesnesinden yönetilmektedir. Numara değiştirmek isterseniz bu dosyayı güncellemeniz yeterlidir.
