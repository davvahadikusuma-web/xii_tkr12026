import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AdminLogin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'davvahadikusuma@gmail.com' && password === '200708') {
        localStorage.setItem('isAdminAuthenticated', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Email atau kata sandi yang Anda masukkan salah.');
      }
    }, 1000);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform origin-top-right pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gold/5 skew-x-12 transform origin-bottom-left pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-zinc-950 p-12 border border-gold/10 relative z-10"
      >
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-gold" size={24} />
          </div>
          <h1 className="text-3xl font-serif text-white tracking-tight mb-2">Portal Admin</h1>
          <p className="text-white/40 text-sm uppercase tracking-[0.2em]">Khusus Pengelola XII TKRO 1</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs text-center uppercase tracking-widest"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-semibold">Email Pengelola</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-gold/20 p-4 text-white focus:border-gold outline-none transition-colors font-sans font-light"
                placeholder="admin@class2026.com"
              />
            </div>
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-semibold">Kata Sandi</label>
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-gold/20 p-4 text-white focus:border-gold outline-none transition-colors font-sans font-light"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 bottom-4 text-white/40 hover:text-gold"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full group"
          >
            {isLoading ? 'Memproses...' : (
              <span className="flex items-center gap-2">
                Masuk Dashboard <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>
        </form>

        <div className="mt-12 pt-8 border-t border-gold/5 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-widest mb-4">Butuh bantuan akses?</p>
          <a href="mailto:support@class2026.com" className="text-gold/40 hover:text-gold text-xs underline underline-offset-4 transition-colors">
            Hubungi Wali Kelas
          </a>
        </div>
      </motion.div>
    </div>
  );
}
