import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { MOCK_MESSAGES } from '@/data/mock';
import { Button } from '@/components/ui/Button';

export function Messages() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-black min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold tracking-[0.4em] uppercase text-xs mb-4"
          >
            Untaian Kata & Kesan
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-white tracking-tighter"
          >
            Dinding <span className="italic text-gold/30">Pesan</span>
          </motion.h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Message Form */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-950 p-10 border border-gold/10 sticky top-32">
              <h2 className="text-2xl font-serif text-white mb-2">Tinggalkan Pesan</h2>
              <p className="text-white/40 text-sm mb-8 font-light">Bagikan kenangan, doa, atau pesan untuk XII TKRO 1.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-semibold">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black border border-gold/20 p-4 text-white focus:border-gold outline-none transition-colors font-sans font-light"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-semibold">Pesan / Kesan</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-black border border-gold/20 p-4 text-white focus:border-gold outline-none transition-colors font-sans font-light resize-none"
                    placeholder="Tuliskan sesuatu yang berkesan..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 bg-gold/10 border border-gold/20 flex items-center gap-3 text-gold text-sm"
                  >
                    <CheckCircle2 size={18} />
                    Pesan Anda telah dikirim dan menunggu moderasi admin.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Message List */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {MOCK_MESSAGES.map((msg, idx) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 border-l border-gold/20 bg-zinc-950/30 hover:bg-zinc-950/80 transition-colors"
                >
                  <p className="text-white/80 text-xl font-serif italic leading-relaxed mb-6">
                    "{msg.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-gold text-sm font-medium tracking-wide">— {msg.author}</span>
                      <span className="text-white/20 text-[10px] uppercase tracking-widest leading-none">
                        {new Date(msg.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <MessageSquare className="text-gold/20" size={24} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
