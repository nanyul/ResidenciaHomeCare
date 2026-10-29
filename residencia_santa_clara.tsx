import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Home, Menu, X, ArrowRight, Stethoscope, Activity, Users, Star, 
  Plus, Send, MessageSquare, Info, CheckCircle, MapPin, Phone, Mail, 
  ChevronRight, Target, Eye, Apple, Puzzle, Search
} from 'lucide-react';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

// ==========================================
// COMPONENTE DE ANIMACIÓN (SCROLL)
// ==========================================
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

// ==========================================
// PÁGINAS (VISTAS)
// ==========================================

const HomePage = ({ setPage }) => (
  <div className="w-full">
    {/* Hero Section */}
    <div className="relative overflow-hidden" style={{ backgroundColor: colors.grisClaro }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
        <Reveal className="w-full lg:w-1/2 pr-0 lg:pr-12 text-center lg:text-left z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ color: colors.textoOscuro }}>
            <span className="block">Un lugar de</span>
            <span className="block mt-1" style={{ color: colors.verdeTeal }}>Confort, Cuidado y Familia</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl mb-8" style={{ color: colors.textoGris }}>
            Brindamos atención compasiva y especializada las 24 horas del día. En La Garita de Alajuela, creamos un ambiente donde sus seres queridos son tratados con la dignidad que merecen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => setPage('contacto')} className="px-8 py-3 font-bold rounded-full text-white transition shadow-lg hover:-translate-y-1" style={{ backgroundColor: colors.rosa }}>
              Agendar una Visita
            </button>
            <button onClick={() => setPage('servicios')} className="px-8 py-3 font-bold rounded-full border-2 transition shadow-sm hover:-translate-y-1" style={{ borderColor: colors.verdeTeal, color: colors.verdeTeal, backgroundColor: 'transparent' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = colors.verdeTeal; e.currentTarget.style.color = colors.blanco; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.verdeTeal; }}>
              Conocer Servicios
            </button>
          </div>
        </Reveal>
        <Reveal delay={200} className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
          <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Enfermera sonriendo con adulto mayor" className="w-full h-[400px] object-cover shadow-2xl rounded-bl-[100px] rounded-tr-[50px] relative z-10" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full opacity-20 -z-0" style={{ backgroundColor: colors.rosa }}></div>
        </Reveal>
      </div>
    </div>

    {/* Previsualización Nosotros */}
    <div className="py-20 overflow-hidden" style={{ backgroundColor: colors.blanco }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <Reveal className="w-full lg:w-1/2 relative">
          <img src="https://images.unsplash.com/photo-1581579186913-46149fd08cb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Adultos mayores felices" className="rounded-3xl shadow-xl relative z-10" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full opacity-20 -z-0" style={{ backgroundColor: colors.rosa }}></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 -z-0" style={{ backgroundColor: colors.verdeTeal }}></div>
        </Reveal>
        <Reveal delay={200} className="w-full lg:w-1/2">
          <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>Quiénes Somos</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: colors.textoOscuro }}>Atención centrada en el corazón</h3>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.textoGris }}>
            Nuestra misión es proporcionar una atención integral y personalizada al adulto mayor, centrada en el trato humanizado y respetuoso. Fomentamos la autonomía y la creación de un verdadero ambiente familiar en un entorno seguro y rodeado de naturaleza.
          </p>
          <button onClick={() => setPage('nosotros')} className="font-bold text-lg transition flex items-center" style={{ color: colors.verdeTeal }} onMouseOver={(e) => e.currentTarget.style.color = colors.rosa} onMouseOut={(e) => e.currentTarget.style.color = colors.verdeTeal}>
            Conocer a nuestro equipo <ArrowRight className="ml-2" size={20} />
          </button>
        </Reveal>
      </div>
    </div>

    {/* Previsualización Servicios */}
    <div className="py-20 relative" style={{ backgroundColor: colors.grisClaro }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>Nuestros Servicios</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold" style={{ color: colors.textoOscuro }}>Cuidado completo y compasivo</h3>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Home, title: "Estancia y Cuidado", desc: "Habitaciones cómodas, limpias y adaptadas para garantizar seguridad y un descanso reparador.", color: colors.verdeTeal },
            { icon: Activity, title: "Atención Médica 24/7", desc: "Personal de enfermería y geriatría siempre disponible para control de salud y medicamentos.", color: colors.rosa },
            { icon: Users, title: "Recreación y Terapia", desc: "Actividades cognitivas, físicas y sociales diseñadas para mantener la mente y el cuerpo activos.", color: colors.verdeTeal }
          ].map((srv, idx) => (
            <Reveal key={idx} delay={idx * 200} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-opacity-10" style={{ backgroundColor: srv.color, color: srv.color }}>
                <srv.icon size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ color: colors.textoOscuro }}>{srv.title}</h4>
              <p style={{ color: colors.textoGris }}>{srv.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center">
           <button onClick={() => setPage('servicios')} className="inline-flex items-center justify-center px-8 py-3 font-bold rounded-full text-white transition shadow-md hover:opacity-90" style={{ backgroundColor: colors.verdeTeal }}>
              Ver todos los detalles <Plus className="ml-2" size={20} />
          </button>
        </Reveal>
      </div>
    </div>

    {/* Carrusel de Testimonios Animado (Motion) */}
    <div className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.blanco }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.verdeTeal }}>Comunidad</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold" style={{ color: colors.textoOscuro }}>Lo que dicen nuestras familias</h3>
        </Reveal>
        
        <Reveal className="relative cursor-grab active:cursor-grabbing">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[{
                text: '"El personal aquí es como una familia. Sabemos que nuestra madre está segura, feliz y rodeada de amor. Las instalaciones son hermosas."',
                author: "María C.", role: "Hija de residente", initials: "MC", color: colors.rosa
              }, {
                text: '"La comunicación médica es excelente. Nos avisan de cada detalle y los fisioterapeutas han logrado que mi abuelo vuelva a caminar con confianza."',
                author: "Jorge R.", role: "Familiar", initials: "JR", color: colors.verdeTeal
              }, {
                text: '"Los jardines son amplios y el clima de La Garita es perfecto. Me encanta ver las fotos de las actividades que realizan todas las semanas."',
                author: "Silvia L.", role: "Familiar", initials: "SL", color: colors.textoGris
            }].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03, y: -5 }}
                className="snap-center shrink-0 w-[85vw] sm:w-80 md:w-96 p-8 rounded-3xl border flex flex-col justify-between shadow-sm transition-shadow hover:shadow-lg" 
                style={{ backgroundColor: `${testimonial.color}10`, borderColor: `${testimonial.color}30` }}
              >
                <div>
                  <div className="flex mb-4 text-sm" style={{ color: testimonial.color }}>
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-medium italic mb-6 text-lg" style={{ color: colors.textoOscuro }}>{testimonial.text}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-sm" style={{ backgroundColor: testimonial.color }}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold" style={{ color: colors.textoOscuro }}>{testimonial.author}</p>
                    <p className="text-sm" style={{ color: colors.textoGris }}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

const NosotrosPage = () => (
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

      {/* SECCIÓN DEL PERSONAL RESTAURADA */}
      <div className="mt-24 pt-16 border-t" style={{ borderColor: colors.grisClaro }}>
        <Reveal className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>Profesionales dedicados</h2>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: colors.textoOscuro }}>Conozca a Nuestro Personal</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: colors.textoGris }}>Un equipo interdisciplinario apasionado por brindar calidad de vida, seguridad y mucho calor humano.</p>
        </Reveal>
        
        <div className="space-y-10">
            {/* Dra. María Gómez */}
            <Reveal className="bg-white rounded-3xl overflow-hidden shadow-sm border flex flex-col md:flex-row group hover:shadow-md transition" style={{ borderColor: colors.grisClaro }}>
                <div className="md:w-2/5 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dra. Gómez" className="w-full h-full object-cover min-h-[300px] md:min-h-[100%] transform group-hover:scale-105 transition duration-700" />
                    <div className="absolute top-4 left-4 bg-white font-bold px-4 py-1.5 rounded-full shadow-md text-xs" style={{ color: colors.verdeTeal }}>Jefatura Médica</div>
                </div>
                <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="font-bold text-3xl mb-1" style={{ color: colors.textoOscuro }}>Dra. María Gómez</h3>
                    <p className="font-bold text-xl mb-4 flex items-center" style={{ color: colors.verdeTeal }}><Stethoscope className="mr-2" size={20} style={{ color: colors.rosa }}/> Médico Geriatra</p>
                    <p className="leading-relaxed mb-8 text-lg" style={{ color: colors.textoGris }}>Con más de 15 años de experiencia exclusiva en el cuidado del adulto mayor, la Dra. Gómez realiza valoraciones integrales al ingreso y lidera las visitas de control semanales. Su enfoque prioriza siempre la dignidad del residente.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-sm" style={{ color: colors.textoOscuro }}>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Valoración médica continua</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Manejo de enfermedades crónicas</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Control estricto de expedientes</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Apoyo y guía a familiares</div>
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
                    <p className="font-bold text-xl mb-4 flex items-center" style={{ color: colors.verdeTeal }}><Heart className="mr-2" size={20} style={{ color: colors.rosa }}/> Jefe de Enfermería</p>
                    <p className="leading-relaxed mb-8 text-lg" style={{ color: colors.textoGris }}>Carlos coordina nuestro grupo de enfermeros y asistentes, garantizando que cada residente reciba su tratamiento a tiempo y monitoreo de signos vitales. Su paciencia y sonrisa diaria lo convierten en una figura de confianza absoluta para los abuelos.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-sm" style={{ color: colors.textoOscuro }}>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Supervisión 24/7</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Asistencia en higiene y movilidad</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Administración de medicamentos</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Respuesta a emergencias</div>
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
                    <p className="font-bold text-xl mb-4 flex items-center" style={{ color: colors.verdeTeal }}><Activity className="mr-2" size={20} style={{ color: colors.rosa }}/> Fisioterapeuta</p>
                    <p className="leading-relaxed mb-8 text-lg" style={{ color: colors.textoGris }}>Especialista en rehabilitación funcional. Ana diseña rutinas de movilidad adaptadas, evitando el deterioro físico y promoviendo la autonomía. Además, imparte gimnasia grupal recreativa que mantiene a los residentes motivados.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-sm" style={{ color: colors.textoOscuro }}>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Prevención de caídas</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Terapias grupales e individuales</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Mantenimiento del equilibrio</div>
                        <div className="flex items-start"><CheckCircle size={18} className="mr-2 shrink-0 mt-0.5" style={{ color: colors.rosa }}/> Estimulación psicomotriz</div>
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </div>
  </div>
);

const ServiciosPage = ({ openLightbox, setPage }) => (
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
          { icon: Apple, title: "Nutrición Especializada", desc: "Menús ricos y balanceados diseñados por nutricionistas, adaptados estrictamente a condiciones específicas (diabetes, hipertensión, intolerancias, texturas).", color: colors.rosa },
          { icon: Puzzle, title: "Actividades Socio-Recreativas", desc: "Terapias cognitivas, manualidades, musicoterapia, juegos de mesa grupales y celebración emotiva de fechas especiales para fomentar la socialización activa.", color: colors.verdeTeal }
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

const ComunidadPage = () => (
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

const ContactoPage = () => {
  const [enviado, setEnviado] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
    e.target.reset();
  };

  return (
    <div className="w-full">
      <div className="py-20 text-center border-b bg-opacity-10" style={{ backgroundColor: colors.rosa, borderColor: `${colors.rosa}30` }}>
        <Reveal><h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.textoOscuro }}>Contacto y Ubicación</h1></Reveal>
      </div>
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.verdeTeal }}>Información Directa</h2>
              <ul className="space-y-5" style={{ color: colors.textoGris }}>
                <li className="flex items-center"><MapPin className="mr-4" style={{ color: colors.rosa }} /> La Garita, Alajuela, Costa Rica.</li>
                <li className="flex items-center"><Phone className="mr-4" style={{ color: colors.verdeTeal }} /> +506 2433-0000</li>
                <li className="flex items-center"><Mail className="mr-4" style={{ color: colors.textoOscuro }} /> info@santaclarahomecare.cr</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border" style={{ borderColor: colors.grisClaro }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.textoOscuro }}>Envíenos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre Completo" required className="w-full mb-4 px-5 py-3 rounded-xl outline-none" style={{ backgroundColor: colors.grisClaro }} />
                <input type="email" placeholder="Correo Electrónico" required className="w-full mb-4 px-5 py-3 rounded-xl outline-none" style={{ backgroundColor: colors.grisClaro }} />
                <textarea rows="4" placeholder="Mensaje o Dudas" required className="w-full mb-6 px-5 py-3 rounded-xl outline-none resize-none" style={{ backgroundColor: colors.grisClaro }}></textarea>
                <button type="submit" className="w-full py-4 rounded-xl font-bold text-lg text-white transition hover:opacity-90 shadow-md" style={{ backgroundColor: colors.verdeTeal }}>
                  Enviar Mensaje
                </button>
              </form>
              {enviado && <div className="mt-4 p-4 rounded-xl text-center font-bold text-green-700 bg-green-50">¡Mensaje enviado con éxito!</div>}
            </div>
          </Reveal>
          <Reveal delay={200} className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-sm border" style={{ borderColor: colors.grisClaro }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.340058863261!2d-84.30138945!3d10.0152778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f930e1df59b9%3A0xc3f83737ec3eb971!2sLa%20Garita%2C%20Alajuela%20Province%2C%20Alajuela!5e0!3m2!1sen!2scr!4v1700000000000!5m2!1sen!2scr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

const PrivacidadPage = () => (
  <div className="w-full py-20 px-4 max-w-4xl mx-auto text-center">
    <Reveal><h1 className="text-3xl font-extrabold mb-8" style={{ color: colors.textoOscuro }}>Aviso de Privacidad</h1></Reveal>
    <Reveal delay={200}><p style={{ color: colors.textoGris }}>En cumplimiento con la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales de Costa Rica, le informamos que sus datos serán utilizados exclusivamente para contacto y gestión interna. Mantenemos estricta confidencialidad médica y profesional.</p></Reveal>
  </div>
);

// ==========================================
// CHATBOT CON IA (GEMINI)
// ==========================================
const GeminiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: '¡Hola! Soy el asistente virtual de Santa Clara Home Care 💚. ¿En qué puedo ayudarle hoy?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    try {
      const apiKey = ""; 
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      const systemPrompt = "Eres el asistente virtual amable de Residencia Geriátrica Santa Clara Home Care en La Garita de Alajuela. Mantén respuestas muy breves, empáticas y orientadas a agendar una visita. No inventes precios.";
      
      const payload = {
        contents: [{ role: "user", parts: [{ text: userMsg }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { temperature: 0.4 }
      };

      const res = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json();
      
      if (data.candidates && data.candidates[0].content) {
        setMessages(prev => [...prev, { text: data.candidates[0].content.parts[0].text, sender: 'bot' }]);
      } else {
        setMessages(prev => [...prev, { text: "Disculpe, ocurrió un error de red. Llámenos al 2433-0000.", sender: 'bot' }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { text: "Lo siento, mi conexión falló. Por favor contáctenos mediante el formulario.", sender: 'bot' }]);
    }
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] max-w-[90vw] h-[500px] max-h-[75vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white" 
            style={{ transformOrigin: 'bottom right' }}
          >
            <div className="p-4 flex justify-between items-center text-white" style={{ backgroundColor: colors.verdeTeal }}>
              <div className="font-bold flex items-center"><MessageSquare size={18} className="mr-2" /> Asistente Santa Clara</div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ backgroundColor: '#f8fafc' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`px-4 py-2 rounded-2xl max-w-[85%] text-sm ${msg.sender === 'user' ? 'self-end text-white rounded-br-none' : 'self-start rounded-bl-none text-gray-800'}`} style={{ backgroundColor: msg.sender === 'user' ? colors.verdeTeal : colors.grisClaro }}>
                  {msg.text}
                </div>
              ))}
              {isTyping && <div className="self-start px-4 py-2 rounded-2xl bg-gray-200 rounded-bl-none text-sm animate-pulse">Escribiendo...</div>}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 flex gap-2 items-center border-t bg-white">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Escriba su mensaje..." className="flex-1 px-4 py-2 rounded-full outline-none border bg-gray-50 focus:bg-white" />
              <button onClick={handleSend} className="w-10 h-10 rounded-full flex items-center justify-center text-white transition hover:scale-105" style={{ backgroundColor: colors.rosa }}>
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl" style={{ backgroundColor: colors.rosa }}>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};

// ==========================================
// APLICACIÓN PRINCIPAL (APP)
// ==========================================
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
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800 selection:bg-pink-200">
      
      {/* HEADER GLOBAl */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full text-white shadow-md transform transition hover:rotate-6" style={{ backgroundColor: colors.rosa }}>
              <Heart size={24} className="absolute" />
              <Home size={12} className="absolute mt-1" />
            </div>
            <span className="ml-3 font-extrabold text-xl sm:text-2xl" style={{ color: colors.verdeTeal }}>Santa Clara</span>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => setCurrentPage(link.id)} className={`font-bold transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:transition-transform ${currentPage === link.id ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`} style={{ color: currentPage === link.id ? colors.verdeTeal : colors.textoGris, '--tw-after-bg-color': colors.rosa, ':after': { backgroundColor: colors.rosa } }}>
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center">
            <button onClick={() => setCurrentPage('contacto')} className="text-white px-6 py-2.5 rounded-full font-bold transition shadow-md hover:-translate-y-0.5" style={{ backgroundColor: colors.verdeTeal }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.rosa} onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.verdeTeal}>
              Agendar Visita
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2" style={{ color: colors.verdeTeal }}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden border-t absolute w-full shadow-lg bg-white overflow-hidden z-50">
              <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
                {navLinks.map(link => (
                  <button key={link.id} onClick={() => { setCurrentPage(link.id); setIsMenuOpen(false); }} className="text-left px-3 py-3 rounded-md text-base font-bold transition" style={{ color: currentPage === link.id ? colors.rosa : colors.textoGris, backgroundColor: currentPage === link.id ? colors.grisClaro : 'transparent' }}>
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CONTENIDO PRINCIPAL (SPA) */}
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={currentPage} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
            {currentPage === 'home' && <HomePage setPage={setCurrentPage} />}
            {currentPage === 'nosotros' && <NosotrosPage />}
            {currentPage === 'servicios' && <ServiciosPage openLightbox={(img, title, desc) => setLightbox({ isOpen: true, img, title, desc })} setPage={setCurrentPage} />}
            {currentPage === 'comunidad' && <ComunidadPage />}
            {currentPage === 'contacto' && <ContactoPage />}
            {currentPage === 'privacidad' && <PrivacidadPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="pt-16 pb-8 border-t-4 text-white" style={{ backgroundColor: colors.textoOscuro, borderColor: colors.rosa }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center" style={{ color: colors.rosa }}><Heart size={20} /></div>
                <span className="ml-3 font-extrabold text-xl">Santa Clara Home Care</span>
              </div>
              <p className="text-gray-400">Dedicados a brindar calidad de vida, seguridad y amor a los adultos mayores en La Garita de Alajuela.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm" style={{ color: colors.verdeTeal }}>Navegación</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Inicio</button></li>
                <li><button onClick={() => setCurrentPage('nosotros')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Nosotros</button></li>
                <li><button onClick={() => setCurrentPage('servicios')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Servicios</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm" style={{ color: colors.verdeTeal }}>Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('contacto')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Contáctenos</button></li>
                <li><button onClick={() => setCurrentPage('privacidad')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Aviso de Privacidad</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            &copy; 2024 Residencia Geriátrica Santa Clara Home Care. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <GeminiChatbot />

      {/* MODAL DE GALERÍA (LIGHTBOX) */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm p-4">
            <button onClick={() => setLightbox({ ...lightbox, isOpen: false })} className="absolute top-6 right-6 text-white hover:bg-white/20 rounded-full w-14 h-14 flex items-center justify-center transition"><X size={32} /></button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="w-full lg:w-2/3 flex justify-center">
                <img src={lightbox.img} alt={lightbox.title} className="w-auto max-h-[60vh] lg:max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
              </div>
              <div className="w-full lg:w-1/3 bg-gray-900/80 p-8 rounded-3xl border border-gray-700 shadow-2xl backdrop-blur-md">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-opacity-20" style={{ backgroundColor: colors.verdeTeal, color: colors.verdeTeal }}><Info size={24} /></div>
                <h3 className="text-3xl font-bold text-white mb-4">{lightbox.title}</h3>
                <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: colors.rosa }}></div>
                <p className="text-gray-300 text-lg leading-relaxed">{lightbox.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}