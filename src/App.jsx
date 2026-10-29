import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Nosotros from '@/pages/Nosotros';
import Servicios from '@/pages/Servicios';
import Comunidad from '@/pages/Comunidad';
import Contacto from '@/pages/Contacto';
import Privacidad from '@/pages/Privacidad';
import Chatbot from '@/components/chatbot/Chatbot';
import Lightbox from '@/components/lightbox/Lightbox';
import { LightboxProvider, useLightbox } from '@/context/LightboxContext';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState({ isOpen: false, img: '', title: '', desc: '' });

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'comunidad', label: 'Comunidad' },
    { id: 'contacto', label: 'Contacto' }
  ];

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [currentPage]);

  return (
    <LightboxProvider>
      <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800 selection:bg-pink-200">

        {/* HEADER GLOBAL */}
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={navLinks} />

        {/* CONTENIDO PRINCIPAL (SPA) */}
        <main className="flex-grow overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={currentPage} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
              {currentPage === 'home' && <Home setPage={setCurrentPage} />}
              {currentPage === 'nosotros' && <Nosotros />}
              {currentPage === 'servicios' && <Servicios openLightbox={(img, title, desc) => setLightbox({ isOpen: true, img, title, desc })} />}
              {currentPage === 'comunidad' && <Comunidad />}
              {currentPage === 'contacto' && <Contacto />}
              {currentPage === 'privacidad' && <Privacidad />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <Chatbot />

        {/* MODAL DE GALERÍA (LIGHTBOX) */}
        <Lightbox lightbox={lightbox} closeLightbox={() => setLightbox({ ...lightbox, isOpen: false })} />

      </div>
    </LightboxProvider>
  );
}
