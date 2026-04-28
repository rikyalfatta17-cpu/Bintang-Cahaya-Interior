import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Timer, 
  Users, 
  ShieldCheck, 
  Home, 
  Briefcase, 
  Armchair, 
  Paintbrush, 
  Layout, 
  Box, 
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- DATA ---
const SERVICES = [
  {
    id: 'residential',
    icon: Home,
    title: 'Desain Interior Rumah',
    desc: 'Wujudkan kenyamanan hunian ideal yang mencerminkan kepribadian Anda dan keluarga.',
  },
  {
    id: 'office',
    icon: Briefcase,
    title: 'Desain Interior Kantor',
    desc: 'Ciptakan ruang kerja produktif dan profesional untuk meningkatkan performa bisnis.',
  },
  {
    id: 'furniture',
    icon: Armchair,
    title: 'Custom Furniture',
    desc: 'Pembuatan furnitur khusus (wardrobe, kitchen set, dll) dengan material premium.',
  },
  {
    id: 'renovation',
    icon: Paintbrush,
    title: 'Renovasi & Finishing',
    desc: 'Transformasi total ruang lama menjadi baru dengan pengerjaan detail dan rapi.',
  },
  {
    id: 'consultancy',
    icon: MessageSquare,
    title: 'Konsultasi Desain',
    desc: 'Diskusi mendalam bersama desainer ahli untuk merancang ruang impian Anda.',
  },
  {
    id: 'visual',
    icon: Box,
    title: '3D Visualisasi',
    desc: 'Lihat hasil desain anda secara nyata sebelum proses konstruksi dimulai.',
  }
];

const PORTFOLIO = [
  { id: 1, title: 'Modern Living Room', category: 'Rumah', img: 'https://placehold.co/800x600/1A1A1A/C9A84C?text=Modern+Living+Room' },
  { id: 2, title: 'Minimalist Office', category: 'Kantor', img: 'https://placehold.co/800x600/1A1A1A/C9A84C?text=Minimalist+Office' },
  { id: 3, title: 'Luxury Kitchen Set', category: 'Furniture', img: 'https://placehold.co/800x600/1A1A1A/C9A84C?text=Luxury+Kitchen+Set' },
  { id: 4, title: 'Scandinavian Bedroom', category: 'Rumah', img: 'https://placehold.co/800x600/1A1A1A/C9A84C?text=Scandinavian+Bedroom' },
  { id: 5, title: 'Modern Executive Suite', category: 'Kantor', img: 'https://placehold.co/800x600/1A1A1A/C9A84C?text=Executive+Suite' },
  { id: 6, title: 'Custom Walk-in Closet', category: 'Furniture', img: 'https://placehold.co/800x600/1A1A1A/C9A84C?text=Walk-in+Closet' },
];

const STEPS = [
  { number: '01', title: 'Konsultasi Awal', desc: 'Sesi brainstorming untuk memahami keinginan, budget, dan gaya desain Anda.' },
  { number: '02', title: 'Survey & Pengukuran', desc: 'Tim kami akan mengunjungi lokasi untuk pengukuran detail dan analisis ruang.' },
  { number: '03', title: 'Desain & Presentasi', desc: 'Kami membuat konsep visual 3D dan revisi hingga Anda benar-benar puas.' },
  { number: '04', title: 'Produksi & Instalasi', desc: 'Proses manufaktur di workshop kami dan pemasangan langsung oleh teknisi ahli.' },
  { number: '05', title: 'Serah Terima', desc: 'Final check bersama Anda untuk memastikan semua sesuai dengan ekspektasi.' },
];

const TESTIMONIALS = [
  { name: 'Budi Santoso', role: 'Home Owner', text: 'Hasil kitchen set-nya luar biasa rapi. Material yang digunakan benar-benar premium sesuai janji.', rating: 5 },
  { name: 'Siska Amelia', role: 'Apartment Owner', text: 'Desain interior apartemen saya jadi jauh lebih luas dan mewah. Terima kasih Bintang Cahaya!', rating: 5 },
  { name: 'PT. Maju Bersama', role: 'Corporate Client', text: 'Pengerjaan kantor kami selesai tepat waktu dengan hasil yang sangat profesional.', rating: 5 },
];

const FAQS = [
  { q: 'Berapa lama estimasi pengerjaan satu ruangan?', a: 'Estimasi pengerjaan bervariasi mulai dari 2-4 minggu tergantung pada tingkat kerumitan dan volume pekerjaan.' },
  { q: 'Apakah ada garansi setelah pengerjaan selesai?', a: 'Ya, kami memberikan garansi pemeliharaan selama 3-6 bulan untuk setiap proyek furniture dan renovasi.' },
  { q: 'Bagaimana cara menghitung biaya desain?', a: 'Kami menawarkan paket desain flat per ruangan atau berdasarkan luas m2. Hubungi kami untuk penawaran detail.' },
  { q: 'Apakah melayani jasa di luar kota?', a: 'Saat ini fokus utama kami adalah area Jabodetabek, namun kami terbuka untuk proyek di luar kota dengan syarat dan ketentuan tertentu.' },
  { q: 'Bisa custom furniture saja tanpa renovasi?', a: 'Tentu bisa. Kami memiliki workshop sendiri untuk memproduksi berbagai macam custom furniture sesuai kebutuhan Anda.' },
];

// --- COMPONENTS ---

const SectionHeading = ({ subtitle, title, centered = true, dark = false }: { subtitle: string, title: string, centered?: boolean, dark?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-[10px] uppercase tracking-[0.3em] font-bold text-gold block mb-3`}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-4xl font-display font-medium ${dark ? 'text-white' : 'text-charcoal'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Proses', href: '#process' },
    { name: 'Faq', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3 border-b border-gold/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-charcoal flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <span className="text-gold font-display text-2xl font-bold">B</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-display font-bold leading-none tracking-tight ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              BINTANG CAHAYA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gold font-bold uppercase">
              INTERIOR & FURNITURE
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[11px] font-bold uppercase tracking-widest hover:text-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full ${scrolled ? 'text-charcoal' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-gold text-white px-7 py-2.5 rounded-full text-[11px] font-bold hover:bg-gold-dark transition-colors shadow-lg">
            KONSULTASI GRATIS
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={scrolled ? 'text-charcoal' : 'text-white'} /> : <Menu className={scrolled ? 'text-charcoal' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-charcoal uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="gold-gradient text-white px-6 py-3 rounded-xl text-center font-semibold" onClick={() => setMobileMenuOpen(false)}>
                Konsultasi Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Semua');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredPortfolio = activeTab === 'Semua' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <div className="w-full h-full grid grid-cols-4 md:grid-cols-6 gap-2 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white/5 h-full w-full border-x border-white/5" />
            ))}
          </div>
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            alt="Interior"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-white text-gold px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 rounded-sm shadow-xl border-l-4 border-gold"
            >
              Interior Excellence Since 2014
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl text-white font-display font-medium leading-[1.1] mb-6"
            >
              Wujudkan Rumah <br />
              <span className="italic text-gold">Impian Anda</span> Bersama Kami
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-sm md:text-base mb-10 leading-relaxed max-w-sm"
            >
              Solusi interior premium dengan sentuhan elegan untuk hunian modern yang mengutamakan kenyamanan dan estetika tinggi.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#portfolio" className="bg-gold text-white px-10 py-3.5 rounded-sm text-sm font-bold shadow-lg hover:bg-gold-dark transition-colors flex items-center justify-center">
                LIHAT PORTOFOLIO
              </a>
              <a href="#contact" className="border border-white/30 text-white px-10 py-3.5 rounded-sm text-sm font-bold hover:bg-white hover:text-charcoal transition-all flex items-center justify-center">
                HUBUNGI KAMI
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- TRUST BADGES --- */}
      <div className="bg-charcoal py-10 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between gap-8 text-white/70">
            {[
              { val: '10+', label: 'Tahun Pengalaman' },
              { val: '500+', label: 'Proyek Selesai' },
              { val: '100%', label: 'Garansi Kepuasan' },
              { val: '24/7', label: 'Support Konsultasi' },
            ].map((badge, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-3xl font-display font-bold text-gold">{badge.val}</span>
                <span className="text-xs uppercase tracking-widest">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <SectionHeading subtitle="Layanan Unggulan" title="Solusi Interior Premium" centered={false} />
            <a href="#portfolio" className="hidden md:block text-[10px] font-bold text-gold border-b border-gold uppercase tracking-widest hover:text-gold-dark hover:border-gold-dark transition-colors">
              LIHAT SEMUA
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-xl shadow-premium border border-gray-100 flex flex-col justify-between group hover:border-gold/30 hover:shadow-2xl transition-all"
              >
                <div>
                  <div className="w-12 h-12 bg-gold/5 flex items-center justify-center rounded-lg mb-8 group-hover:bg-gold transition-colors">
                    <service.icon className="text-gold group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-3 text-charcoal">{service.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                </div>
                <a href="#contact" className="text-gold font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all overflow-hidden group-hover:text-gold-dark">
                  Pelajari Lebih <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section id="about" className="py-24 relative bg-charcoal-textured text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Mengapa Kami" title="Komitmen Kami Pada Kualitas" centered={false} dark />
              <p className="text-gray-400 text-lg mb-12">
                Kami percaya bahwa setiap detail memiliki makna. Tim desainer dan pengrajin kami bekerja dengan standar tinggi untuk mewujudkan ekspektasi Anda.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: ShieldCheck, title: 'Terpercaya', desc: 'Reputasi teruji dengan ratusan testimoni puas.' },
                  { icon: Users, title: 'Tim Profesional', desc: 'Desainer interior bersertifikat & pengrajin ahli.' },
                  { icon: Timer, title: 'Tepat Waktu', desc: 'Manajemen proyek efisien untuk hasil maksimal.' },
                  { icon: Box, title: 'Material Premium', desc: 'Hanya menggunakan bahan terbaik kelas industri.' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1000" className="w-full h-auto" alt="Workshop" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-5xl font-display font-bold text-white mb-2">12th</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white">Tahun Berkarya</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section id="portfolio" className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading subtitle="Karya Kami" title="Inspirasi Desain Terkini" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {['Semua', 'Rumah', 'Kantor', 'Furniture'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative pb-2 ${activeTab === tab ? 'text-gold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gold' : 'text-gray-400 hover:text-charcoal'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group aspect-[4/5] rounded-xl overflow-hidden shadow-premium"
                >
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-3">{item.category}</span>
                    <h4 className="text-white text-2xl font-display font-medium mb-6">{item.title}</h4>
                    <button className="bg-gold text-white px-8 py-2.5 rounded-sm text-[10px] font-bold tracking-widest uppercase hover:bg-gold-dark transition-colors">Detail Proyek</button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-center mt-16">
             <button className="text-[10px] font-bold tracking-widest uppercase border-b border-gold text-charcoal pb-1 hover:text-gold transition-colors">Lihat Semua Proyek</button>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section id="process" className="py-24 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading subtitle="Tahapan Kerja" title="Bagaimana Kami Bekerja" dark />

          <div className="relative pt-10">
            {/* Horizontal line for desktop - hidden on mobile */}
            <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-white/5 hidden xl:block z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-6 relative z-10">
              {STEPS.map((step, i) => (
                <motion.div 
                  key={step.number} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center xl:items-start text-center xl:text-left bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-charcoal border-2 border-gold flex items-center justify-center text-gold font-display font-bold text-xl mb-6 shadow-[0_0_20px_rgba(227,6,19,0.2)] group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading subtitle="Testimoni" title="Kisah Klien Kami" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col relative"
              >
                <div className="flex text-gold mb-6">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} />
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal">{t.name}</h5>
                    <span className="text-xs text-gold font-semibold uppercase">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeading subtitle="Tanya Jawab" title="Sering Ditanyakan" />

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border border-gray-100 rounded-2xl overflow-hidden transition-all ${openFaq === i ? 'ring-2 ring-gold/20' : ''}`}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-charcoal pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-500 text-sm bg-gray-50/50 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-[#F9F5EF]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-premium overflow-hidden grid lg:grid-cols-2 border border-gray-100"
          >
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-charcoal p-12 md:p-20 text-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <SectionHeading subtitle="Hubungi Kami" title="Konsultasi Gratis Sekarang" centered={false} dark />
                <p className="text-gray-400 text-sm mb-12 max-w-md leading-relaxed">
                  Dapatkan estimasi biaya dan konsep desain perdana Anda hari ini. Tim kami siap membantu mewujudkan ruang impian Anda.
                </p>
                <div className="space-y-10">
                   <div className="flex items-center gap-6 group">
                     <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg text-gold group-hover:bg-gold group-hover:text-white transition-all">
                       <Phone size={20} />
                     </div>
                     <span className="text-sm font-medium">+62 812 3456 7890</span>
                   </div>
                   <div className="flex items-center gap-6 group">
                     <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg text-gold group-hover:bg-gold group-hover:text-white transition-all">
                       <Mail size={20} />
                     </div>
                     <span className="text-sm font-medium">hello@bintangcahaya.id</span>
                   </div>
                   <div className="flex items-center gap-6 group">
                     <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg text-gold group-hover:bg-gold group-hover:text-white transition-all">
                       <MapPin size={20} />
                     </div>
                     <span className="text-sm font-medium">Jakarta | Semarang | Bali</span>
                   </div>
                </div>
              </div>
              
              <div className="mt-12 relative z-10">
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"><Instagram size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"><Facebook size={18} /></a>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="p-12 md:p-20"
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nama Lengkap</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 text-sm focus:ring-1 focus:ring-gold outline-hidden transition-all" placeholder="Contoh: Budi Santoso" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nomor WhatsApp</label>
                    <input type="tel" className="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 text-sm focus:ring-1 focus:ring-gold outline-hidden transition-all" placeholder="0812 3456 7890" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tipe Proyek</label>
                  <select className="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 text-sm focus:ring-1 focus:ring-gold outline-hidden transition-all appearance-none cursor-pointer">
                    <option>Interior Rumah</option>
                    <option>Kitchen Set</option>
                    <option>Kantor / Komersial</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pesan</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-none rounded-lg px-4 py-3.5 text-sm focus:ring-1 focus:ring-gold outline-hidden transition-all resize-none" placeholder="Ceritakan kebutuhan desain Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-charcoal text-white py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                  Kirim Permintaan
                </button>

                <div className="pt-6 border-t border-gray-100">
                  <button className="w-full bg-whatsapp text-white py-4 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:opacity-90 transition-opacity">
                    <Phone size={18} />
                    <span>Chat WhatsApp</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] text-center md:text-left">
              &copy; 2026 Bintang Cahaya Interior. All Rights Reserved.
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-all cursor-pointer">
                  <Instagram size={14} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-all cursor-pointer">
                  <Facebook size={14} />
                </div>
              </div>
              <div className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] border-l border-gray-200 pl-8 hidden md:block">
                JAKARTA | SEMARANG | BALI
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-8 right-8 z-[60]"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-whatsapp/30 rounded-full blur-lg"
        />
        <motion.a 
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative block bg-whatsapp p-4 rounded-full shadow-2xl flex items-center justify-center text-white"
        >
          <Phone fill="currentColor" />
        </motion.a>
      </motion.div>
    </div>
  );
}
