import { motion } from 'framer-motion';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

export default function PrivacidadPage() {
  return (
    <div className="w-full py-20 px-4 max-w-4xl mx-auto text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-extrabold mb-8" style={{ color: colors.textoOscuro }}>Aviso de Privacidad</h1>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <p style={{ color: colors.textoGris }}>En cumplimiento con la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales de Costa Rica, le informamos que sus datos serán utilizados exclusivamente para contacto y gestión interna. Mantenemos estricta confidencialidad médica y profesional.</p>
      </motion.div>
    </div>
  );
}
