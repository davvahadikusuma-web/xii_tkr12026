import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Camera, User, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import React from 'react';

export function Home() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  React.useEffect(() => {
    // Target date: June 1, 2026
    const target = new Date('2026-06-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="/regenerated_image_1777350592780.png" 
            className="w-full h-full object-cover"
            alt="School Building"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-6">Mengenang Masa Sekolah Untuk Selamanya</p>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-tighter leading-none">
              XII TKRO 1 <br/>
              <span className="italic text-gold/80">Class of 2026</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto font-light tracking-wide">
              Setiap langkah yang kita ambil bersama adalah tinta emas dalam buku kehidupan kita. Rayakan kelulusan dengan penuh makna.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/students">
                <Button>Lihat Profil Siswa</Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline">Jelajah Kenangan</Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gold/40"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gold" />
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 bg-zinc-950 border-y border-gold/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="text-center group border-r border-gold/5 last:border-0">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="block text-4xl md:text-7xl font-serif text-gold mb-2"
                >
                  {String(item.value).padStart(2, '0')}
                </motion.span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <span className="text-white/20 text-xs uppercase tracking-widest font-sans flex items-center justify-center gap-2">
              <Calendar size={14} className="text-gold" /> Menuju Kelulusan: 1 Juni 2026
            </span>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-2">
          {/* Card 1: Students */}
          <Link to="/students" className="group relative aspect-[4/5] overflow-hidden border border-gold/10">
            <img 
              src="/regenerated_image_1777348809921.png" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              alt="Students"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
              <User className="text-gold mb-4" size={32} />
              <h3 className="text-4xl font-serif text-white mb-4">Profil Siswa</h3>
              <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity">Kumpulan cerita, impian, dan kenangan setiap individu XII TKRO 1.</p>
              <div className="w-12 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          </Link>

          {/* Card 2: Gallery */}
          <Link to="/gallery" className="group relative aspect-[4/5] overflow-hidden border border-gold/10">
            <img 
              src="/regenerated_image_1777348811887.png" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              alt="Gallery"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
              <Camera className="text-gold mb-4" size={32} />
              <h3 className="text-4xl font-serif text-white mb-4">Galeri Kenangan</h3>
              <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity">Momen-momen tak terlupakan yang tertangkap dalam lensa kamera.</p>
              <div className="w-12 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          </Link>

          {/* Card 3: Messages */}
          <Link to="/messages" className="group relative aspect-[4/5] overflow-hidden border border-gold/10">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              alt="Messages"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
              <MessageCircle className="text-gold mb-4" size={32} />
              <h3 className="text-4xl font-serif text-white mb-4">Dinding Pesan</h3>
              <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity">Untaian kata perpisahan, harapan, dan doa untuk masa depan.</p>
              <div className="w-12 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          </Link>
        </div>
      </section>

      {/* Quote / Intro Section */}
      <section className="py-32 px-4 border-t border-gold/10">
        <div className="max-w-3xl mx-auto text-center italic">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-serif text-white/80 leading-relaxed"
          >
            "Perpisahan bukanlah akhir, melainkan awal dari perjalanan yang baru. Mari kita simpan setiap tawa dan air mata dalam ruang digital yang abadi ini."
          </motion.p>
          <div className="h-px w-20 bg-gold mx-auto mt-12 mb-4" />
          <p className="font-serif text-gold text-lg tracking-widest">- Wali Kelas XII TKRO 1</p>
        </div>
      </section>
    </div>
  );
}
