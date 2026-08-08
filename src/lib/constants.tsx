// Site genelinde kullanılan sabit veriler — BOYUT EĞİTİM KURUMLARI (ANTALYA)
import { Brain, ClipboardList, ScrollText, PenTool, Users, Trophy, Bot, BarChart, BookOpen, Lightbulb, Clock } from "lucide-react";

export const SITE_CONFIG = {
  name: "Boyut Eğitim Kurumları",
  tagline: "Kalabalıkta Kaybolma",
  slogan: "Öğrenmede BOYUT'unuz Değişecek... #ÇARE BOYUT",
  phone: "0506 027 27 41",
  whatsapp: "https://wa.me/905060272741",
  instagram: "https://instagram.com/boyutegitim_",
  facebook: "https://facebook.com/BoyutEgitimKurumlari",
  address: "Balbey İsmet Paşa Caddesi, 403. Sk. No:5/A, 07040 Muratpaşa",
  city: "Antalya",
  googleMapsUrl: "https://www.google.com/search?hl=tr-TR&gl=tr&q=BOYUT+E%C4%9E%C4%B0T%C4%B0M+KURUMLARI,+Balbey+%C4%B0SMET+PA%C5%9EA+CADDES%C4%B0,+403.+Sk.+No:5/A,+07040+Muratpa%C5%9Fa/Antalya&ludocid=14403383674553253646#lrd=0x14c390022a6dc791:0xc7e31923bd683f0e,1",
};

export const STATS = [
  { value: 1200, suffix: "+", label: "Başarılı Öğrenci" },
  { value: 5.0, suffix: " ★", label: "Google Yorum Puanı" },
  { value: 15000, suffix: "+", label: "Deneme Sınavı" },
  { value: 16, suffix: "+", label: "Seçkin Yayınevi" },
];

export const GOOGLE_REVIEWS = [
  {
    name: "Elif Yılmaz",
    author: "Elif Yılmaz",
    rating: 5,
    relativeTime: "1 ay önce",
    text: "Antalya'da kalabalık sınıflarda kaybolmak istemeyen her öğrenciye tavsiye ederim. Öğretmen kadrosu son derece ilgili, deneme kulübü yayınları harika!",
    initials: "EY",
    avatarBg: "#0A4FA8",
    role: "YKS Derece Öğrencisi",
    avatar: "👩‍🎓",
  },
  {
    name: "Kaan Arslan",
    author: "Kaan Arslan",
    rating: 5,
    relativeTime: "2 hafta önce",
    text: "MADLEN yapay zeka sistemi sayesinde matematikte nerede hata yaptığımı anında görüyorum. Netlerim 15 net arttı. Teşekkürler Boyut Eğitim!",
    initials: "KA",
    avatarBg: "#F57C00",
    role: "12. Sınıf Öğrencisi",
    avatar: "👨‍🎓",
  },
  {
    name: "Sibel Demir (Veli)",
    author: "Sibel Demir (Veli)",
    rating: 5,
    relativeTime: "3 hafta önce",
    text: "Oğlumun gelişimini düzenli veli raporları ile takip edebiliyorum. Lokasyonu İsmet Paşa tramvay durağının hemen yanında, ulaşım çok rahat.",
    initials: "SD",
    avatarBg: "#0284C7",
    role: "Veli",
    avatar: "👩",
  },
  {
    name: "Burak Kaya",
    author: "Burak Kaya",
    rating: 5,
    relativeTime: "1 ay önce",
    text: "Deneme kulübü sınav takvimi mükemmel işliyor. Özdebir, Töder, 3D gibi tüm yayınların sınavlarına burada giriyoruz.",
    initials: "BK",
    avatarBg: "#16A34A",
    role: "Mezun YKS Öğrencisi",
    avatar: "👨‍🎓",
  },
];

export const TESTIMONIALS = GOOGLE_REVIEWS;

export const SERVICES = [
  {
    icon: <Brain size={32} color="#0284C7" />,
    title: "MADLEN AI Sistemi",
    description:
      "Yapay zeka destekli kişisel analiz ile öğrencinin eksiklerini tespit eder, özel çalışma planı oluşturur.",
    color: "#0284C7",
    href: "/madlen",
  },
  {
    icon: <ClipboardList size={32} color="#F57C00" />,
    title: "Deneme Kulübü",
    description:
      "16+ yayınevinin en güncel denemeleri, sıfır hata kitapçıkları ve kişiye özel soru bankası.",
    color: "#F57C00",
    href: "/deneme-kulubu",
  },
  {
    icon: <ScrollText size={32} color="#16A34A" />,
    title: "Bursluluk Sınavı",
    description:
      "Başarı bursu kazanmak ve derece kadrosunda yer almak için bursluluk sınavımıza başvurun.",
    color: "#16A34A",
    href: "/bursluluk-sinavi",
  },
  {
    icon: <PenTool size={32} color="#9333EA" />,
    title: "Yazılı Hazırlık Çalışması",
    description:
      "Okul sınavları öncesi ders bazlı yoğunlaştırılmış yazılıya hazırlık etütleri.",
    color: "#9333EA",
    href: "/yazili-hazirlik",
  },
  {
    icon: <Users size={32} color="#2563EB" />,
    title: "Veliye Düzenli Raporlar",
    description:
      "Aileniz öğrencinin gelişimini adım adım takip eder. Şeffaf ve güvenilir iletişim.",
    color: "#2563EB",
    href: "/kurslar",
  },
  {
    icon: <Trophy size={32} color="#EA580C" />,
    title: "Kazananların Dünyası",
    description:
      "Türkiye'nin en iyileri arasına girmeye hazır ol. Hedefini koy, birlikte ulaşalım.",
    color: "#EA580C",
    href: "/hakkimizda",
  },
];

export const MADLEN_FEATURES = [
  {
    icon: <Bot size={28} color="#FF6B35" />,
    title: "Yapay Zeka Analizi",
    description:
      "MADLEN sistemi her denemeni analiz ederek gerçek eksik noktalarını tespit eder.",
  },
  {
    icon: <BarChart size={28} color="#1E6FFF" />,
    title: "Kişisel Gelişim Takibi",
    description:
      "Akademik gelişimin grafiklerle izlenir, veli raporları düzenli paylaşılır.",
  },
  {
    icon: <BookOpen size={28} color="#16A34A" />,
    title: "Maarif Modeli Uyumlu",
    description:
      "Türkiye Yüzyılı Maarif Modeli'ne tam uyumlu içerik ve müfredat takibi.",
  },
  {
    icon: <Lightbulb size={28} color="#FFD700" />,
    title: "Akıllı Öneriler",
    description:
      "Zayıf konular için akıllı kaynak ve tekrar önerileri sunulur.",
  },
];

export const PUBLISHERS = [
  "Toprak Yayıncılık",
  "Limit Yayınları",
  "Endermik",
  "aPro Yayın Denizi",
  "Acil Yayınları",
  "Bilgi Sarmal",
  "Karekök",
  "Özdebir Yayınları",
  "Orijinal Yayınları",
  "Paraf Yayınları",
  "ÇAP",
  "Apoizmi",
  "ÜçDörtBeş",
  "Töder",
  "3D Yayınları",
  "KafaDengi",
];

export const BLOG_POSTS = [
  {
    slug: "yks-netlerini-artiracak-5-altin-kural",
    title: "YKS Hazırlıkta Netlerinizi Artıracak 5 Altın Kural",
    excerpt: "Sadece çok çalışmak değil, doğru stratejiyle çalışmak kazandırır. İşte derece öğrencilerinin uyguladığı 5 kritik taktik.",
    date: "05 Ağustos 2026",
    category: "Sınav Taktikleri",
    readTime: "4 dk okuma",
    image: <BarChart size={48} color="#1E6FFF" />,
    content: `
      YKS sınav hazırlığı maratonunda sadece ders çalışmak yeterli değildir. Doğru yöntemi bulmak, net artışının anahtarıdır.

      1. Deneme Analizini Asla İhmal Etmeyin
      Girilen her deneme sınavının ardından yanlış yapılan ve boş bırakılan sorular mutlaka incelenmelidir. Boyut Eğitim'in MADLEN AI altyapısı bu süreci otomatikleştirir.

      2. Zayıf Konularda Tekrar Kampı Yapın
      Bildiğiniz konuları tekrar tekrar çözmek yerine, net kaybettiğiniz konuların üzerine gidin.

      3. Zaman Yönetimi Provası
      Deneme sınavlarını tıpkı gerçek sınav saatlerinde ve süre sınırına uyarak çözün.

      4. Çeşitli Yayın Evlerini Çözün
      Tek bir yayınevinin soru tarzına alışmak yerine Özdebir, Töder, 3D, Bilgi Sarmal gibi farklı yayınevlerini deneyimleyin.

      5. Disiplin ve Düzenli Takip
      Zeka ve çabayı disiplinle harmanlayan öğrenciler zirveye ulaşır.
    `
  },
  {
    slug: "madlen-yapay-zeka-ile-eksik-analizi",
    title: "MADLEN Yapay Zeka İle Eksik Analizi Nasıl Yapılır?",
    excerpt: "Yapay zeka destekli eğitim teknolojisinin öğrencinin akademik gelişimine katkıları ve kişiselleştirilmiş rotanın gücü.",
    date: "01 Ağustos 2026",
    category: "Yapay Zeka & Eğitim",
    readTime: "5 dk okuma",
    image: <Brain size={48} color="#0284C7" />,
    content: `
      Geleneksel eğitimde tüm sınıfa aynı ödevler verilir. Oysa her öğrencinin eksiği farklıdır.

      MADLEN yapay zeka algoritması, öğrencinin deneme sonuçlarını analiz ederek tam olarak hangi alt başlıkta zorlandığını milimetrik olarak çıkarır. Böylece öğrenci sadece eksik olduğu konularda nokta atışı soru çözümü yapar.
    `
  },
  {
    slug: "deneme-sinavlarinda-zaman-yonetimi",
    title: "Deneme Sınavlarında Zaman Yönetimi Rehberi",
    excerpt: "Sınavda yetiştirememe kaygısını sonlandıran turlama taktiği ve ders geçiş stratejileri.",
    date: "24 Temmuz 2026",
    category: "Rehberlik",
    readTime: "3 dk okuma",
    image: <Clock size={48} color="#F57C00" />,
    content: `
      Sınavda zamanı verimli kullanmak en az bilgi kadar önemlidir. Turlama tekniği ile zor sorulara takılmadan ilk turda emin olduğunuz soruları çözmek size büyük zaman kazandıracaktır.
    `
  }
];

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/madlen", label: "MADLEN AI" },
  { href: "/bursluluk-sinavi", label: "Bursluluk Sınavı" },
  { href: "/yazili-hazirlik", label: "Yazılı Hazırlık" },
  { href: "/deneme-kulubu", label: "Deneme Kulübü" },
  { href: "/kurslar", label: "Kurslar" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];
