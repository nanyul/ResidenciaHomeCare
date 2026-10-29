import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Activity, Users, Star, CheckCircle, Target, Eye, Heart, Search } from 'lucide-react';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ServiciosPage({ openLightbox }) {
  return (
    <div className="w-full">
      <div className="py-20 text-center border-b bg-opacity-10" style={{ backgroundColor: colors.rosa, borderColor: `${colors.rosa}30` }}>
        <Reveal><h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.textoOscuro }}>Servicios e Instalaciones</h1></Reveal>
        <Reveal delay={200}><p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: colors.textoGris }}>Atención minuciosa y espacios diseñados exclusivamente para el confort, seguridad y disfrute.</p></Reveal>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Stethoscope, title: "Enfermería 24/7", desc: "Vigilancia constante, control de signos vitales, administración de medicamentos y asistencia en la higiene diaria. Contamos con protocolos de emergencia rigurosos.", color: colors.verdeTeal },
            { icon: Activity, title: "Terapia y Rehabilitación", desc: "Ejercicios guiados individualmente para mantener o mejorar la movilidad, equilibrio y fuerza muscular, reduciendo significativamente el riesgo de caídas.", color: colors.rosa },
            { icon: Star, title: "Nutrición Especializada", desc: "Menús ricos y balanceados diseñados por nutricionistas, adaptados estrictamente a condiciones específicas (diabetes, hipertensión, intolerancias, texturas).", color: colors.rosa },
            { icon: Users, title: "Actividades Socio-Recreativas", desc: "Terapias cognitivas, manualidades, musicoterapia, juegos de mesa grupales y celebración emotiva de fechas especiales para fomentar la socialización activa.", color: colors.verdeTeal }
          ].map((srv, idx) => (
            <Reveal key={idx} delay={idx * 100} className="flex p-8 border rounded-3xl shadow-sm bg-white hover:shadow-md transition" style={{ borderColor: colors.grisClaro }}>
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-opacity-10" style={{ backgroundColor: srv.color, color: srv.color }}>
                  <srv.icon size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.textoOscuro }}>{srv.title}</h3>
                <p className="leading-relaxed" style={{ color: colors.textoGris }}>{srv.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Galería */}
      <div className="py-20 text-white" style={{ backgroundColor: colors.textoOscuro }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.verdeTeal }}>Transparencia y Confort</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Galería de Instalaciones</h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">Haga clic en las imágenes para ampliar y descubrir los detalles de los espacios diseñados exclusivamente para el bienestar de nuestros residentes.</p>
          </Reveal>

          <Reveal className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 h-auto md:h-[650px]">
            <div onClick={() => openLightbox('https://images.unsplash.com/photo-1502672260266-1c1f52d36199?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'Habitaciones Adaptadas', 'Totalmente equipadas con camas ortopédicas articuladas, timbres de emergencia, y baños adaptados con agarraderas de seguridad.')} className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
              <img src="https://images.unsplash.com/photo-1502672260266-1c1f52d36199?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Habitación" className="w-full h-72 md:h-full object-cover transform group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-2xl md:text-3xl font-bold mb-2">Habitaciones Privadas y Confortables</h4>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"><Search /></div>
            </div>
            <div onClick={() => openLightbox('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'Zonas Verdes', 'Senderos planos y seguros rodeados de vegetación, perfectos para caminatas matutinas y actividades al aire libre.')} className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Zonas Verdes" className="w-full h-72 md:h-full object-cover transform group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold mb-1">Zonas Verdes</h4>
              </div>
            </div>
            <div onClick={() => openLightbox('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'Áreas Comunes', 'Espacios cálidos y bien iluminados, mobiliario ergonómico y áreas dispuestas para recibir a familiares con total comodidad.')} className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Áreas Comunes" className="w-full h-72 md:h-full object-cover transform group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold mb-1">Áreas Comunes</h4>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
