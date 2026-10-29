import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Activity, Users, Star, CheckCircle, Target, Eye, Heart } from 'lucide-react';

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

export default function NosotrosPage() {
  return (
    <div className="w-full">
      <div className="py-20 text-center border-b bg-opacity-10" style={{ backgroundColor: colors.verdeTeal, borderColor: `${colors.verdeTeal}30` }}>
        <Reveal><h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.textoOscuro }}>Nuestra Identidad</h1></Reveal>
        <Reveal delay={200}><p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: colors.textoGris }}>Conozca nuestra misión, filosofía y al cálido equipo humano que hace de este lugar un verdadero hogar.</p></Reveal>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Personal empático" className="rounded-3xl shadow-lg" /></Reveal>
          <Reveal delay={200}>
            <h2 className="text-3xl font-bold mb-8" style={{ color: colors.textoOscuro }}>Filosofía de Cuidado</h2>
            <div className="mb-8 p-6 border rounded-2xl shadow-sm bg-white" style={{ borderColor: colors.grisClaro }}>
              <h3 className="text-xl font-bold mb-3 flex items-center" style={{ color: colors.rosa }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-opacity-20" style={{ backgroundColor: colors.rosa }}><Target size={18} /></div> Misión
              </h3>
              <p className="leading-relaxed" style={{ color: colors.textoGris }}>Proporcionar una atención integral y personalizada al adulto mayor, centrada en el trato humanizado y respetuoso. Buscamos promover su bienestar físico, mental y emocional en un entorno seguro.</p>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm bg-white" style={{ borderColor: colors.grisClaro }}>
              <h3 className="text-xl font-bold mb-3 flex items-center" style={{ color: colors.verdeTeal }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-opacity-20" style={{ backgroundColor: colors.verdeTeal }}><Eye size={18} /></div> Visión
              </h3>
              <p className="leading-relaxed" style={{ color: colors.textoGris }}>Ser la residencia líder y de mayor confianza en Costa Rica, reconocida por nuestra excelencia en el cuidado geriátrico, la transparencia con las familias y la calidad de nuestras instalaciones.</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* SECCIÓN DEL PERSONAL */}
      <div className="mt-24 pt-16 border-t" style={{ borderColor: colors.grisClaro }}>
        <Reveal className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>Profesionales dedicados</h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: colors.textoOscuro }}>Conozca a Nuestro Personal</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: colors.textoGris }}>Un equipo interdisciplinario apasionado por brindar calidad de vida, seguridad y mucho calor humano.</p>
        </Reveal>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Dra. María Gómez */}
          <Reveal className="bg-white rounded-3xl overflow-hidden shadow-sm border flex flex-col md:flex-row group hover:shadow-md transition" style={{ borderColor: colors.grisClaro }}>
            <div className="md:w-2/5 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dra. Gómez" className="w-full h-full object-cover min-h-[300px] md:min-h-[100%] transform group-hover:scale-105 transition duration-700" />
              <div className="absolute top-4 left-4 bg-white font-bold px-4 py-1.5 rounded-full shadow-md text-xs" style={{ color: colors.verdeTeal }}>Jefatura Médica</div>
            </div>
            <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-bold text-3xl mb-1" style={{ color: colors.textoOscuro }}>Dra. María Gómez</h3>
              <p className="font-bold text-xl mb-4 flex items-center" style={{ color: colors.verdeTeal }}><Stethoscope className="mr-2" size={20} style={{ color: colors.rosa }} /> Médico Geriatra</p>
              <p className="leading-relaxed mb-8 text-lg" style={{ color: colors.textoGris }}>Con más de 15 años de experiencia exclusiva en el cuidado del adulto mayor, la Dra. Gómez realiza valoraciones integrales al ingreso y lidera las visitas de control semanales. Su enfoque prioriza siempre la dignidad del residente.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-sm" style={{ color: colors.textoOscuro }}>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Valoración médica continua</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Manejo de enfermedades crónicas</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Control estricto de expedientes</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Apoyo y guía a familiares</div>
              </div>
            </div>
          </Reveal>

          {/* Carlos Ramírez */}
          <Reveal delay={200} className="bg-white rounded-3xl overflow-hidden shadow-sm border flex flex-col md:flex-row-reverse group hover:shadow-md transition" style={{ borderColor: colors.grisClaro }}>
            <div className="md:w-2/5 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1594824436998-efa5ab4cb879?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Enfermero Carlos" className="w-full h-full object-cover min-h-[300px] md:min-h-[100%] transform group-hover:scale-105 transition duration-700" />
            </div>
            <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-bold text-3xl mb-1" style={{ color: colors.textoOscuro }}>Carlos Ramírez</h3>
              <p className="font-bold text-xl mb-4 flex items-center" style={{ color: colors.verdeTeal }}><Heart className="mr-2" size={20} style={{ color: colors.rosa }} /> Jefe de Enfermería</p>
              <p className="leading-relaxed mb-8 text-lg" style={{ color: colors.textoGris }}>Carlos coordina nuestro grupo de enfermeros y asistentes, garantizando que cada residente reciba su tratamiento a tiempo y monitoreo de signos vitales. Su paciencia y sonrisa diaria lo convierten en una figura de confianza absoluta para los abuelos.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-sm" style={{ color: colors.textoOscuro }}>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Supervisión 24/7</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Asistencia en higiene y movilidad</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Administración de medicamentos</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Respuesta a emergencias</div>
              </div>
            </div>
          </Reveal>

          {/* Ana Lucía Mora */}
          <Reveal delay={400} className="bg-white rounded-3xl overflow-hidden shadow-sm border flex flex-col md:flex-row group hover:shadow-md transition" style={{ borderColor: colors.grisClaro }}>
            <div className="md:w-2/5 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127d09e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fisioterapeuta Ana" className="w-full h-full object-cover min-h-[300px] md:min-h-[100%] transform group-hover:scale-105 transition duration-700" />
            </div>
            <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-bold text-3xl mb-1" style={{ color: colors.textoOscuro }}>Ana Lucía Mora</h3>
              <p className="font-bold text-xl mb-4 flex items-center" style={{ color: colors.verdeTeal }}><Activity className="mr-2" size={20} style={{ color: colors.rosa }} /> Fisioterapeuta</p>
              <p className="leading-relaxed mb-8 text-lg" style={{ color: colors.textoGris }}>Especialista en rehabilitación funcional. Ana diseña rutinas de movilidad adaptadas, evitando el deterioro físico y promoviendo la autonomía. Además, imparte gimnasia grupal recreativa que mantiene a los residentes motivados.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-sm" style={{ color: colors.textoOscuro }}>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Prevención de caídas</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Terapias grupales e individuales</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Mantenimiento del equilibrio</div>
                <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }} /> Estimulación psicomotriz</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
