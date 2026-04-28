import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Image as ImageIcon, 
  MessageSquare, 
  Settings, 
  Plus, 
  MoreVertical,
  LogOut,
  Edit,
  Trash2,
  Check,
  X
} from 'lucide-react';
import { MOCK_STUDENTS, MOCK_GALLERY, MOCK_MESSAGES } from '@/data/mock';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = React.useState('students');
  const navigate = useNavigate();

  React.useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  return (
    <div className="bg-black min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-gold/10 pb-8">
          <div>
            <h1 className="text-4xl font-serif text-white mb-2">Dashboard Management</h1>
            <p className="text-white/40 text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Sesi Aktif: Super Admin
            </p>
          </div>
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="text-red-400 hover:text-red-500 hover:bg-red-500/10"
          >
            <LogOut size={16} className="mr-2" /> Keluar
          </Button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-2 sticky top-32">
              {[
                { id: 'students', label: 'Kelola Siswa', icon: Users },
                { id: 'gallery', label: 'Kelola Galeri', icon: ImageIcon },
                { id: 'messages', label: 'Moderasi Pesan', icon: MessageSquare },
                { id: 'settings', label: 'Pengaturan App', icon: Settings },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 px-6 py-4 text-sm uppercase tracking-widest transition-all ${
                    activeTab === tab.id 
                    ? 'bg-gold text-black font-semibold' 
                    : 'text-white/50 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            {activeTab === 'students' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-serif text-gold">Daftar Siswa ({MOCK_STUDENTS.length})</h2>
                  <Button size="sm">
                    <Plus size={14} className="mr-2" /> Tambah Siswa
                  </Button>
                </div>
                
                <div className="grid gap-px bg-gold/10 border border-gold/10">
                  {MOCK_STUDENTS.map(student => (
                    <div key={student.id} className="bg-zinc-950 p-6 flex items-center gap-6 group hover:bg-zinc-900 transition-colors">
                      <img src={student.photoUrl} className="w-16 h-16 object-cover border border-gold/10" alt={student.name} />
                      <div className="flex-grow">
                        <h4 className="text-white font-medium">{student.name}</h4>
                        <p className="text-white/40 text-xs tracking-wider uppercase">Nick: {student.nickname}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-white/30 hover:text-gold transition-colors"><Edit size={16} /></button>
                        <button className="p-2 text-white/30 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-serif text-gold">Foto Galeri ({MOCK_GALLERY.length})</h2>
                  <Button size="sm">
                    <Plus size={14} className="mr-2" /> Upload Foto
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {MOCK_GALLERY.map(img => (
                    <div key={img.id} className="relative aspect-square border border-gold/10 group overflow-hidden">
                      <img src={img.url} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={img.caption} />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button className="p-2 bg-white text-black rounded-full hover:bg-gold transition-colors"><Edit size={16} /></button>
                        <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-serif text-gold">Antrean Moderasi</h2>
                <div className="space-y-4">
                  {MOCK_MESSAGES.map(msg => (
                    <div key={msg.id} className="bg-zinc-950 p-8 border border-gold/10 font-sans">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Dari: {msg.author}</span>
                        <div className="flex gap-4">
                          <button className="text-green-500 flex items-center gap-1 text-[10px] uppercase tracking-widest hover:underline"><Check size={14} /> Setujui</button>
                          <button className="text-red-500 flex items-center gap-1 text-[10px] uppercase tracking-widest hover:underline"><X size={14} /> Tolak</button>
                        </div>
                      </div>
                      <p className="text-white/70 italic text-lg leading-relaxed font-serif">"{msg.content}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
