import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Info as InfoCircle } from 'lucide-react';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

export default function Lightbox({ lightbox, closeLightbox }) {
  return (
    <AnimatePresence>
      {lightbox.isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm p-4">
          <button onClick={() => closeLightbox()} className="absolute top-6 right-6 text-white hover:bg-white/20 rounded-full w-14 h-14 flex items-center justify-center transition"><X size={32} /></button>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="w-full lg:w-2/3 flex justify-center">
              <img src={lightbox.img} alt={lightbox.title} className="w-auto max-h-[60vh] lg:max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
            </div>
            <div className="w-full lg:w-1/3 bg-gray-900/80 p-8 rounded-3xl border border-gray-700 shadow-2xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-opacity-20" style={{ backgroundColor: colors.verdeTeal, color: colors.verdeTeal }}><InfoCircle size={24} /></div>
              <h3 className="text-3xl font-bold text-white mb-4">{lightbox.title}</h3>
              <div className="w-16 h-1 bg-rosa mb-6 rounded-full" />
              <p className="text-gray-300 text-lg leading-relaxed">{lightbox.desc}</p>
              <button
                onClick={() => closeLightbox()}
                className="mt-8 w-full py-3 px-4 bg-verdeTeal text-white font-bold rounded-xl hover:bg-rosa transition shadow-lg flex items-center justify-center gap-2"
              >
                Preguntar por esta área <ArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
