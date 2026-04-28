import { motion } from 'framer-motion';
import { MOCK_STUDENTS } from '@/data/mock';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

export function Students() {
  return (
    <div className="bg-black min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold tracking-[0.4em] uppercase text-xs mb-4"
          >
            Anggota Keluarga Besar
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-serif text-white tracking-tighter"
          >
            Siswa <span className="italic text-gold/30">XII TKRO 1</span>
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-px gap-y-px bg-gold/10 border border-gold/10">
          {MOCK_STUDENTS.map((student, idx) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-8 group relative overflow-hidden"
            >
              <Link to={`/students/${student.id}`}>
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-zinc-900 border border-gold/5 group-hover:border-gold/30 transition-all duration-500">
                  <img 
                    src={student.photoUrl} 
                    alt={student.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{student.name}</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest italic">"{student.nickname}"</p>
                </div>

                <p className="mt-4 text-white/50 text-sm line-clamp-2 font-light leading-relaxed">
                  {student.bio}
                </p>
              </Link>

              <div className="mt-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {student.instagram && (
                  <a href={`https://instagram.com/${student.instagram}`} target="_blank" rel="noreferrer" className="text-white/40 hover:text-gold transition-colors">
                    <Instagram size={16} />
                  </a>
                )}
                <Link to={`/students/${student.id}`} className="text-gold text-[10px] uppercase tracking-widest ml-auto flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Detail Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
