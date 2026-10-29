import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

export default function Header({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen, navLinks }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
          <img src="/logo.png" alt="Logo Santa Clara Home Care" className="w-12 h-12 mr-3 rounded-full" />
          <span className="ml-3 font-extrabold text-xl sm:text-2xl" style={{ color: colors.verdeTeal }}>Santa Clara Home Care</span>
        </div>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => setCurrentPage(link.id)} className={`font-bold transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:transition-transform ${currentPage === link.id ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`} style={{ color: currentPage === link.id ? colors.verdeTeal : colors.textoGris }}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <button onClick={() => setCurrentPage('contacto')} className="text-white px-6 py-2.5 rounded-full font-bold transition shadow-md hover:-translate-y-0.5" style={{ backgroundColor: colors.rosa }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.rosa} onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.rosa}>
            Agendar una visita
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2" style={{ color: colors.verdeTeal }}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Móvil */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className={`md:hidden border-t absolute w-full shadow-lg bg-white overflow-hidden z-50 ${isMenuOpen ? '' : 'hidden'}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => { setCurrentPage(link.id); setIsMenuOpen(false); }} className="text-left px-3 py-3 rounded-md text-base font-bold transition" style={{ color: currentPage === link.id ? colors.rosa : colors.textoGris, backgroundColor: currentPage === link.id ? colors.grisClaro : 'transparent' }}>
              {link.label}
            </button>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
