import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus } from 'lucide-react';

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

export default function ComunidadPage() {
  return (
    <div className="w-full">
      <div className="py-20 text-center border-b" style={{ backgroundColor: colors.grisClaro }}>
        <Reveal><h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.textoOscuro }}>Comunidad y FAQ</h1></Reveal>
        <Reveal delay={200}><p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: colors.textoGris }}>Muro de actividades recientes y respuestas claras a sus dudas frecuentes.</p></Reveal>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MURO DE ACTIVIDADES RESTAURADO */}
        <Reveal className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>Vida en el Hogar</h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: colors.textoOscuro }}>Muro de Actividades Recientes</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <Reveal className="bg-white rounded-3xl overflow-hidden shadow-sm border flex flex-col sm:flex-row group" style={{ borderColor: colors.grisClaro }}>
            <div className="sm:w-2/5 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Cumpleaños" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 min-h-[200px]" />
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-opacity-10 text-xs font-bold rounded-full w-fit mb-3" style={{ backgroundColor: colors.rosa, color: colors.rosa }}>Celebraciones</span>
              <h4 className="font-bold text-xl mb-3 transition" style={{ color: colors.textoOscuro }}>Tarde de Cumpleaños Mensual</h4>
              <p className="text-sm leading-relaxed" style={{ color: colors.textoGris }}>Este mes celebramos la vida de Don Carlos y Doña María con música en vivo (guitarra) y un delicioso pastel sin azúcar apto para todos nuestros residentes.</p>
            </div>
          </Reveal>

          <Reveal delay={200} className="bg-white rounded-3xl overflow-hidden shadow-sm border flex flex-col sm:flex-row group" style={{ borderColor: colors.grisClaro }}>
            <div className="sm:w-2/5 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Taller" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 min-h-[200px]" />
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-opacity-10 text-xs font-bold rounded-full w-fit mb-3" style={{ backgroundColor: colors.verdeTeal, color: colors.verdeTeal }}>Talleres y Terapias</span>
              <h4 className="font-bold text-xl mb-3 transition" style={{ color: colors.textoOscuro }}>Sesión de Arteterapia y Pintura</h4>
              <p className="text-sm leading-relaxed" style={{ color: colors.textoGris }}>Una excelente mañana donde nuestros residentes expresaron su creatividad pintando mandalas, mejorando significativamente su motricidad fina y enfoque.</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.verdeTeal }}>Resolvemos tus dudas</h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: colors.textoOscuro }}>Preguntas Frecuentes</h2>
        </Reveal>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            { q: "¿Cuál es el proceso formal de admisión?", a: "Iniciamos con una visita guiada para que la familia conozca las instalaciones. Luego, nuestra Dra. Geriatra realiza una valoración médica del futuro residente para asegurar que podemos brindarle el cuidado específico que requiere. Finalmente, se completa la documentación legal." },
            { q: "¿Cuáles son los horarios de visita para familiares?", a: "Fomentamos fuertemente la conexión familiar, por lo que tenemos un horario de visita abierto y flexible todos los días de 9:00 a.m. a 5:00 p.m. Recomendamos avisar con antelación si asisten en horas de alimentación." },
            { q: "¿Qué artículos personales están permitidos traer?", a: "Los residentes pueden (y deben) traer ropa cómoda, zapatos seguros, artículos de higiene personal de su preferencia, fotografías familiares y objetos decorativos pequeños que les hagan sentir como en casa." },
            { q: "¿Cómo manejan las emergencias médicas?", a: "Contamos con enfermería 24/7 altamente capacitada para estabilización inicial. Tenemos alianzas con servicios de ambulancia privada para traslados inmediatos a centros médicos y un protocolo estricto de comunicación urgente con familiares." }
          ].map((faq, i) => (
            <Reveal key={i} delay={i * 100}>
              <details className="rounded-2xl p-5 group cursor-pointer transition border border-transparent hover:border-gray-300" style={{ backgroundColor: colors.grisClaro }}>
                <summary className="flex justify-between items-center font-bold text-lg select-none list-none" style={{ color: colors.textoOscuro }}>
                  {faq.q}
                  <Plus size={20} style={{ color: colors.rosa }} className="transition-transform group-open:rotate-45" />
                </summary>
                <div className="mt-4 leading-relaxed pt-2" style={{ color: colors.textoGris }}>{faq.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
