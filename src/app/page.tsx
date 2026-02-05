import React, { useState } from "react";
import {
  ShieldCheck,
  Truck,
  Box,
  Globe,
  Headset,
  Zap,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  HardHat,
  Users,
} from "lucide-react";

export default function MaximLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("tr"); // "tr" veya "en"

  // Dil içerikleri
  const content = {
    tr: {
      nav: {
        home: "Anasayfa",
        whyUs: "Neden Biz?",
        contact: "İletişime Geç",
      },
      hero: {
        vision: "KURUMSAL VİZYON",
        title1: "Sektörün En Güçlü",
        title2: "Halkasıyız.",
        desc1: "MAXIM olarak, geleneksel toptancılığın ötesine geçiyoruz.",
        desc2: "Endüstriyel alanların hijyen ve atık yönetimi ihtiyaçlarını, en dayanıklı ekipmanlarla karşılıyoruz.",
        industrial: "Endüstriyel Güç",
        industrialDesc: "Ağır hizmet tipi ekipmanlar.",
        team: "Uzman Ekip",
        teamDesc: "Profesyonel operasyon yönetimi.",
        trust: "20+ YILLIK GÜVEN",
      },
      features: {
        title: "NEDEN MAXIM?",
        heading: "Bizi Sektörde Öncü Yapan Farklılıklarımız",
        items: [
          {
            title: "Üstün Kalite",
            description: "Tedarik ettiğimiz her ürün titiz bir kalite kontrol sürecinden geçer. Sadece en iyiyi sunuyoruz.",
            icon: ShieldCheck,
          },
          {
            title: "Güçlü Lojistik",
            description: "Geniş araç filomuz ve optimize edilmiş rotalarımızla ürünlerinizi zamanında ulaştırıyoruz.",
            icon: Truck,
          },
          {
            title: "Yüksek Stok Kapasitesi",
            description: "Büyük ölçekli depolama alanlarımız sayesinde taleplerinizi bekletmeden, anında karşılıyoruz.",
            icon: Box,
          },
          {
            title: "Geniş Dağıtım Ağı",
            description: "Ulusal ve uluslararası operasyon yeteneğimizle her türlü ihtiyaca cevap veriyoruz.",
            icon: Globe,
          },
          {
            title: "7/24 Destek",
            description: "Kurumsal çözüm merkezimiz her türlü sorunuza en kısa sürede yanıt vermektedir.",
            icon: Headset,
          },
          {
            title: "Hızlı Teslimat",
            description: "İş süreçlerinizi aksatmayacak şekilde en hızlı şekilde teslimat sağlıyoruz.",
            icon: Zap,
          },
        ],
      },
      contact: {
        title: "İLETİŞİM",
        heading1: "İş Ortağınız Olmaya",
        heading2: "Hazırız.",
        description: "Projeleriniz, talepleriniz veya iş ortaklığı teklifleriniz için bizimle iletişime geçebilirsiniz. Uzman ekibimiz en kısa sürede dönüş sağlayacaktır.",
        phone: "Telefon",
        email: "E-posta",
        address: "Adres",
        form: {
          name: "Ad Soyad",
          company: "Firma Adı",
          email: "E-posta",
          phone: "Telefon",
          message: "Mesajınız",
          submit: "Gönder",
          phonePlaceholder: "+90 (5__) ___ __ __",
          phoneHint: "Sadece rakam giriniz (örn: 5425560622)",
        },
      },
      footer: {
        description: "Endüstriyel temizlik ekipmanları ve malzemeleri alanında öncü çözümler sunan çözüm ortağınız.",
        links: "BAĞLANTILAR",
        contactInfo: "TELEFON & ADRES",
        copyright: "© 2026 maxim. Tüm hakları saklıdır.",
      },
    },
    en: {
      nav: {
        home: "Home",
        whyUs: "Why Us?",
        contact: "Contact Us",
      },
      hero: {
        vision: "CORPORATE VISION",
        title1: "We Are The Strongest",
        title2: "Link in the Industry.",
        desc1: "As MAXIM, we go beyond traditional wholesale.",
        desc2: "We meet the hygiene and waste management needs of industrial areas with the most durable equipment.",
        industrial: "Industrial Power",
        industrialDesc: "Heavy-duty equipment.",
        team: "Expert Team",
        teamDesc: "Professional operations management.",
        trust: "20+ YEARS OF TRUST",
      },
      features: {
        title: "WHY MAXIM?",
        heading: "Our Differences That Make Us Industry Leaders",
        items: [
          {
            title: "Superior Quality",
            description: "Every product we supply goes through a rigorous quality control process. We only offer the best.",
            icon: ShieldCheck,
          },
          {
            title: "Strong Logistics",
            description: "We deliver your products on time with our wide vehicle fleet and optimized routes.",
            icon: Truck,
          },
          {
            title: "High Stock Capacity",
            description: "Thanks to our large-scale storage areas, we meet your demands instantly without delay.",
            icon: Box,
          },
          {
            title: "Wide Distribution Network",
            description: "We respond to all kinds of needs with our national and international operational capability.",
            icon: Globe,
          },
          {
            title: "24/7 Support",
            description: "Our corporate solution center responds to all your questions in the shortest time.",
            icon: Headset,
          },
          {
            title: "Fast Delivery",
            description: "We provide delivery as quickly as possible without disrupting your business processes.",
            icon: Zap,
          },
        ],
      },
      contact: {
        title: "CONTACT",
        heading1: "Ready to Become",
        heading2: "Your Business Partner.",
        description: "You can contact us for your projects, requests or business partnership offers. Our expert team will respond as soon as possible.",
        phone: "Phone",
        email: "E-mail",
        address: "Address",
        form: {
          name: "Full Name",
          company: "Company Name",
          email: "E-mail",
          phone: "Phone",
          message: "Your Message",
          submit: "Send",
          phonePlaceholder: "+90 (5__) ___ __ __",
          phoneHint: "Enter only numbers (e.g., 5425560622)",
        },
      },
      footer: {
        description: "Your solution partner offering pioneering solutions in the field of industrial cleaning equipment and materials.",
        links: "LINKS",
        contactInfo: "PHONE & ADDRESS",
        copyright: "© 2026 maxim. All rights reserved.",
      },
    },
  };

  const currentContent = content[language as keyof typeof content];

  const address =
    "Çavuşoğlu Mahallesi Ticarethane Sokak no: 14 Yesilyurt/ malatya";
  const phoneNumber = "+90 (542) 556 06 22";
  const email = "maxim@maximgrup.com";
  const googleMapsLink = "https://maps.app.goo.gl/kDTzAJNcNUUG5i738";

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <div className="min-h-screen bg-[#003d5b] text-white font-sans selection:bg-[#2563eb] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#003d5b]/90 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center ml-12">
              <span className="text-5xl font-bold tracking-tighter">maxim</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12 text-sm font-medium">
              <button
                onClick={handleHomeClick}
                className="hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
              >
                {currentContent.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("neden-biz")}
                className="hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
              >
                {currentContent.nav.whyUs}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
              >
                <Globe size={16} />
                <span>{language === "tr" ? "EN" : "TR"}</span>
              </button>
              <button
                onClick={() => scrollToSection("iletisim")}
                className="bg-[#2563eb] hover:bg-blue-600 px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                {currentContent.nav.contact}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#003d5b] border-t border-white/10 px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={handleHomeClick}
              className="block py-2 hover:text-blue-400 w-full text-left bg-transparent border-none cursor-pointer"
            >
              {currentContent.nav.home}
            </button>
            <button
              onClick={() => scrollToSection("neden-biz")}
              className="block py-2 hover:text-blue-400 w-full text-left bg-transparent border-none cursor-pointer"
            >
              {currentContent.nav.whyUs}
            </button>
            <button
              onClick={toggleLanguage}
              className="block py-2 hover:text-blue-400 w-full text-left bg-transparent border-none cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <Globe size={16} />
                <span>{language === "tr" ? "English (EN)" : "Türkçe (TR)"}</span>
              </div>
            </button>
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("iletisim")}
                className="block text-center bg-[#2563eb] py-3 rounded-xl font-bold w-full cursor-pointer"
              >
                {currentContent.nav.contact}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="kurumsal"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-40 items-center">
            {/* Left side: Logo Area */}
            <div className="relative order-2 md:order-1 mr-auto md:mr-0">
              <div className="bg-[#1e293b] rounded-3xl w-full max-w-xl h-[550px] flex items-center justify-center relative shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-1">
                  <img
                    src="https://ucarecdn.com/738e6530-b46e-45c2-80de-be27787bf16e/"
                    alt="Maxim Logo"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="order-1 md:order-2 space-y-8 ml-auto md:ml-0">
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold tracking-widest text-blue-400 uppercase">
                {currentContent.hero.vision}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {currentContent.hero.title1} <br />
                <span className="text-blue-400">{currentContent.hero.title2}</span>
              </h1>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed max-w-lg">
                <p>{currentContent.hero.desc1}</p>
                <p>{currentContent.hero.desc2}</p>
              </div>

              {/* 20 Yıllık Güven moved here */}
              <div className="inline-block bg-[#2563eb] rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-bold mb-1">20+</div>
                <div className="text-xs font-bold tracking-widest text-white/80">
                  {currentContent.hero.trust}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <HardHat className="text-blue-400 mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-1">{currentContent.hero.industrial}</h3>
                  <p className="text-sm text-white/50">{currentContent.hero.industrialDesc}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Users className="text-blue-400 mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-1">{currentContent.hero.team}</h3>
                  <p className="text-sm text-white/50">{currentContent.hero.teamDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differences Section */}
      <section id="neden-biz" className="py-24 bg-[#00314a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1 bg-white/5 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
              {currentContent.features.title}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              {currentContent.features.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentContent.features.items.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[2.5rem] p-10 text-[#003d5b] shadow-xl hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                    <IconComponent className="text-[#2563eb]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-[#003d5b]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left side: Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
                  {currentContent.contact.title}
                </div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  {currentContent.contact.heading1} <br />
                  <span className="text-blue-400">{currentContent.contact.heading2}</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-md">
                  {currentContent.contact.description}
                </p>
              </div>

              <div className="space-y-8">
                <a
                  href="tel:+905425560622"
                  className="flex items-start space-x-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">
                      {currentContent.contact.phone}
                    </p>
                    <p className="text-xl font-bold">+90 (422)</p>
                    <p className="text-xl font-bold">{phoneNumber}</p>
                  </div>
                </a>

                <a
                  href="mailto:maxim@maximgrup.com"
                  className="flex items-start space-x-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">
                      {currentContent.contact.email}
                    </p>
                    <p className="text-xl font-bold">{email}</p>
                  </div>
                </a>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">
                      {currentContent.contact.address}
                    </p>
                    <p className="text-xl font-bold leading-snug max-w-xs">
                      {address}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 text-[#1e293b] shadow-2xl shadow-blue-900/20">
              <form
                action="https://formspree.io/f/xzdvqdng"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-[#1e293b]/60">
                      {currentContent.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-[#1e293b]/60">
                      {currentContent.contact.form.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Şirket A.Ş."
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-[#1e293b]/60">
                      {currentContent.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="info@firma.com"
                      required
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-[#1e293b]/60">
                      {currentContent.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={currentContent.contact.form.phonePlaceholder}
                      required
                      pattern="[0-9]{10,15}"
                      maxLength="15"
                      title={language === "tr" ? "Lütfen geçerli bir telefon numarası giriniz (sadece rakam)" : "Please enter a valid phone number (numbers only)"}
                      onInput={(e) => {
                        // Sadece rakamları kabul et
                        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                      }}
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-500 outline-none transition-all"
                    />
                    <p className="text-xs text-gray-400 mt-1">{currentContent.contact.form.phoneHint}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-[#1e293b]/60">
                    {currentContent.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder={language === "tr" ? "Talebinizi buraya yazın..." : "Write your request here..."}
                    required
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#003d5b] text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl active:scale-[0.98]"
                >
                  {currentContent.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00283c] py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Brand */}
            <div className="space-y-6">
              <span className="text-5xl font-black tracking-tighter">
                maxim
              </span>
              <p className="text-white/50 leading-relaxed max-w-xs">
                {currentContent.footer.description}
              </p>
            </div>

            {/* Links - Centered as requested */}
            <div className="md:text-center">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
                {currentContent.footer.links}
              </h4>
              <ul className="space-y-4 font-medium text-white/70">
                <li>
                  <button
                    onClick={handleHomeClick}
                    className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {currentContent.nav.home}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("neden-biz")}
                    className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {currentContent.nav.whyUs}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:text-right">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
                {currentContent.footer.contactInfo}
              </h4>
              <div className="space-y-4 text-white/70">
                <a
                  href="tel:+905425560622"
                  className="flex items-center md:justify-end space-x-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Phone size={18} className="text-blue-400" />
                  <span className="font-bold">{phoneNumber}</span>
                </a>
                <a
                  href="mailto:maxim@maximgrup.com"
                  className="flex items-center md:justify-end space-x-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Mail size={18} className="text-blue-400" />
                  <span>{email}</span>
                </a>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start md:justify-end space-x-3 hover:text-white transition-colors cursor-pointer"
                >
                  <MapPin size={18} className="text-blue-400 shrink-0 mt-1" />
                  <span className="max-w-[200px] leading-snug">{address}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center text-xs font-bold tracking-widest text-white/30 uppercase">
            <p>{currentContent.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}