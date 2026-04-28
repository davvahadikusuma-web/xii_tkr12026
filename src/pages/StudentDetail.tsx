import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOCK_STUDENTS } from '@/data/mock';
import { Instagram, ArrowLeft, Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function StudentDetail() {
  const { id } = useParams<{ id: string }>();
  const student = MOCK_STUDENTS.find(s => s.id === id);

  if (!student) {
    return (
      <div className="bg-black min-h-screen py-32 text-center">
        <h2 className="text-white">Siswa tidak ditemukan</h2>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/students" className="inline-flex items-center gap-2 text-white/40 hover:text-gold mb-12 transition-colors uppercase text-[10px] tracking-widest">
          <ArrowLeft size={14} /> Kembali ke Daftar
        </Link>

        <div className="grid md:grid-cols-12 gap-16">
          {/* Photo Section */}
          <div className="md:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[3/4] overflow-hidden border border-gold/10 relative"
            >
              <img 
                src={student.photoUrl} 
                alt={student.name}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 pointer-events-none" />
            </motion.div>
          </div>

          {/* Info Section */}
          <div className="md:col-span-7 py-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Profil Alumni 2026</p>
              <h1 className="text-6xl md:text-7xl font-serif text-white tracking-tighter leading-none mb-4">
                {student.name}
              </h1>
              <p className="text-gold italic font-serif text-2xl mb-12 opacity-60">
                "{student.nickname}"
              </p>

              <div className="space-y-12 mb-16">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-semibold">Biografi Singkat</h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed max-w-xl">
                    {student.bio}
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 font-semibold">Kesan & Pesan Utama</h3>
                  <div className="relative pl-12">
                    <Quote className="absolute left-0 top-0 text-gold/20 h-8 w-8" />
                    <p className="text-2xl font-serif italic text-white/90 leading-snug">
                      {student.quotes}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-gold/10">
                {student.instagram && (
                  <a 
                    href={`https://instagram.com/${student.instagram}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors"
                  >
                    <Instagram size={20} />
                    <span className="text-xs uppercase tracking-widest">@{student.instagram}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
