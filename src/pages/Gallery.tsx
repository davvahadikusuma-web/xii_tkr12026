import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_GALLERY } from '@/data/mock';
import { Maximize2, X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div className="bg-black min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold tracking-[0.4em] uppercase text-xs mb-4"
          >
            Lensa Perjalanan
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-serif text-white tracking-tighter"
          >
            Galeri <span className="italic text-gold/30">Kenangan</span>
          </motion.h1>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {MOCK_GALLERY.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden border border-gold/10"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-auto grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-gold h-8 w-8" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-serif">{image.caption}</p>
                <p className="text-gold/60 text-[10px] uppercase tracking-widest mt-1">
                  {new Date(image.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/60 hover:text-white">
            <X size={32} />
          </button>
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
