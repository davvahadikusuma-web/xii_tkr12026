import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Camera, Users, MessageSquare, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Beranda', path: '/', icon: Home },
  { name: 'Siswa', path: '/students', icon: Users },
  { name: 'Galeri', path: '/gallery', icon: Camera },
  { name: 'Pesan', path: '/messages', icon: MessageSquare },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-2xl tracking-tighter text-gold">XII TKRO 1</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 -mt-1 text-center">Class of 2026</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors relative py-2",
                  location.pathname === item.path ? "text-gold" : "text-white/60 hover:text-white"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-gold/10 px-4 pt-2 pb-6 flex flex-col space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-serif tracking-wide py-2 flex items-center gap-3",
                location.pathname === item.path ? "text-gold" : "text-white/70"
              )}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
