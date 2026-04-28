import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gold/10 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <Link to="/" className="font-serif text-3xl tracking-tighter text-gold">XII TKRO 1</Link>
          <p className="text-white/40 text-sm mt-2 max-w-xs">
            Mengenang masa-masa terindah bersama di bangku sekolah. 
            Semoga langkah kita selalu diberkahi.
          </p>
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-white/50">
          <Link to="/students" className="hover:text-gold transition-colors">Siswa</Link>
          <Link to="/gallery" className="hover:text-gold transition-colors">Galeri</Link>
          <Link to="/messages" className="hover:text-gold transition-colors">Pesan</Link>
          <Link to="/admin/login" className="hover:text-gold transition-colors">Admin</Link>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-white/30 tracking-widest uppercase">© 2026 XII TKRO 1</p>
          <p className="text-[10px] text-white/20 mt-1 uppercase italic">Built for Eternity</p>
        </div>
      </div>
    </footer>
  );
}
