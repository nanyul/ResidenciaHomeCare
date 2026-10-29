import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, Home as HomeIcon, Menu, X, ArrowRight, Stethoscope, Activity, Users, Star,
  Plus, Send, MessageSquare, Info, CheckCircle, MapPin, Phone, Mail,
  ChevronRight, Target, Eye, Apple, Puzzle, Search, Users as UsersIcon
} from 'lucide-react';

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

export default function Home({ setPage }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.grisClaro }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <Reveal className="w-full lg:w-1/2 pr-0 lg:pr-12 text-center lg:text-left z-10">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>Cuidado con calidez humana</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ color: colors.textoOscuro }}>
              Residencia Geriatrica Santa Clara Home Care
            </h1>
            <p className="mt-4 text-lg sm:text-xl mb-8 leading-relaxed" style={{ color: colors.textoGris }}>
              Brindamos atención personalizada y especializada las 24 horas del día, en La Garita de Alajuela, con un ambiente cálido, seguro y familiar, que promueve la salud, el bienestar y la calidad de vida de nuestros residentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => setPage('contacto')} className="px-8 py-3 font-bold rounded-full text-white transition shadow-lg hover:-translate-y-1" style={{ backgroundColor: colors.rosa }}>
                Agendar una visita
              </button>
              <button onClick={() => setPage('servicios')} className="px-8 py-3 font-bold rounded-full border-2 transition shadow-sm hover:-translate-y-1" style={{ borderColor: colors.verdeTeal, color: colors.verdeTeal, backgroundColor: 'transparent' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = colors.verdeTeal; e.currentTarget.style.color = colors.blanco; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.verdeTeal; }}>
                Conocer servicios
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
            <img src="images/home2.jpeg" alt="Adultos mayores felices" className="rounded-3xl shadow-xl relative z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full opacity-20 -z-0" style={{ backgroundColor: colors.rosa }}></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 -z-0" style={{ backgroundColor: colors.verdeTeal }}></div>
          </Reveal>
          <Reveal delay={200} className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>Nuestra Misión</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: colors.textoOscuro }}>Atención centrada en el corazón</h3>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.textoGris }}>
              Nuestra misión es proporcionar una atención integral y personalizada al adulto mayor, enfocada en el trato humanizado y respetuoso. Fomentamos la autonomía y la creación de un verdadero ambiente familiar en un entorno seguro y rodeado de naturaleza.
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
            <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>NUESTROS SERVICIOS</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold" style={{ color: colors.textoOscuro }}>Cuidado completo y compasivo</h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: HomeIcon, title: "Estancia y Cuidado", desc: "Habitaciones cómodas, limpias y adaptadas para garantizar seguridad y un descanso reparador.", color: colors.rosa },
              { icon: Activity, title: "Atención Médica 24/7", desc: "Personal de enfermería y equipo médico para garantizar el bienestar físico, emocional y mental.", color: colors.verdeTeal },
              { icon: Users, title: "Recreación y Terapia", desc: "Actividades recreativas, terapia ocupacional y estimulación cognitiva para mantener su bienestar y felicidad.", color: colors.rosa }
            ].map((srv, idx) => (
              <Reveal key={idx} delay={idx * 200} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-opacity-10" style={{ backgroundColor: srv.color }}>
                  <srv.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: colors.textoOscuro }}>{srv.title}</h4>
                <p style={{ color: colors.textoGris }}>{srv.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <button onClick={() => setPage('servicios')} className="inline-flex items-center justify-center px-8 py-3 font-bold rounded-full text-white transition shadow-md hover:opacity-90" style={{ backgroundColor: colors.verdeTeal }}>
              Ver todos los servicios <Plus className="ml-2" size={20} />
            </button>
          </Reveal>
        </div>
      </div>

      {/* Carrusel de Testimonios Animado (Motion) */}
      <div className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.blanco }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>TESTIMONIOS</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold" style={{ color: colors.textoOscuro }}>Lo que dicen nuestras familias</h3>
          </Reveal>

          <Reveal className="relative cursor-grab active:cursor-grabbing">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                {
                  text: '"El personal aquí es como una familia. Sabemos que nuestra madre está segura, feliz y rodeada de amor. Las instalaciones son hermosas."',
                  author: "María C.", role: "Hija de residente", initials: "MC", color: colors.rosa
                }, {
                  text: '"La comunicación médica es excelente. Nos avisan de cada detalle y los fisioterapeutas han logrado que mi abuelo vuelva a caminar con confianza."',
                  author: "Jorge R.", role: "Familiar", initials: "JR", color: colors.verdeTeal
                }, {
                  text: '"Los jardines son amplios y el clima de La Garita es perfecto. Me encanta ver las fotos de las actividades que realizan todas las semanas."',
                  author: "Silvia L.", role: "Familiar", initials: "SL", color: colors.textoGris
                }
              ].map((testimonial, idx) => (
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

      {/* Sección de Estadísticas */}
      <div className="py-20 bg-grisClaro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: colors.textoOscuro }}>
                Números que hablan por sí solos
              </h2>
              <p className="text-lg text-textoGris max-w-xl lg:max-none">
                Años cuidando a quienes más quieres, con la calidez y profesionalismo que tu familia merece.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 lg:mt-0">
              <div className="text-center p-6 rounded-3xl bg-verdeTeal/5 hover:bg-verdeTeal/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: colors.verdeTeal }}>
                  15+
                </div>
                <div className="text-textoGris text-sm">Años de experiencia</div>
              </div>
              <div className="text-center p-6 rounded-3xl bg-rosa/5 hover:bg-rosa/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: colors.rosa }}>
                  50+
                </div>
                <div className="text-textoGris text-sm">Residentes atendidos</div>
              </div>
              <div className="text-center p-6 rounded-3xl bg-verdeTeal/5 hover:bg-verdeTeal/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: colors.verdeTeal }}>
                  24/7
                </div>
                <div className="text-textoGris text-sm">Enfermería</div>
              </div>
              <div className="text-center p-6 rounded-3xl bg-rosa/5 hover:bg-rosa/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: colors.rosa }}>
                  100%
                </div>
                <div className="text-textoGris text-sm">Ambiente familiar</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Por Qué Elegirnos */}
      <div className="py-20 bg-blanco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: colors.rosa }}>
              Por qué elegirnos
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-8" style={{ color: colors.textoOscuro }}>
              Tu tranquilidad, nuestro compromiso
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-rosa/50 bg-rosa/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
              <div className="w-14 h-14 rounded-2xl bg-rosa/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-rosa/40 transition-colors duration-300" style={{ color: colors.rosa }}>
                <Users size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center" style={{ color: colors.textoOscuro }}>
                Calidad humana
              </h4>
              <p className="text-textoGris text-sm leading-relaxed text-center">
                Trato respetuoso, digno y cálido para cada residente, como si fueran parte de nuestra propia familia.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-verdeTeal/50 bg-verdeTeal/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
              <div className="w-14 h-14 rounded-2xl bg-verdeTeal/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-verdeTeal/40 transition-colors duration-300" style={{ color: colors.verdeTeal }}>
                <Stethoscope size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center" style={{ color: colors.textoOscuro }}>
                Personal certificado
              </h4>
              <p className="text-textoGris text-sm leading-relaxed text-center">
                Equipo interdisciplinario con experiencia en geriatría, enfermería y fisioterapia.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-rosa/50 bg-rosa/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
              <div className="w-14 h-14 rounded-2xl bg-rosa/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-rosa/40 transition-colors duration-300" style={{ color: colors.rosa }}>
                <HomeIcon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center" style={{ color: colors.textoOscuro }}>
                Instalaciones modernas
              </h4>
              <p className="text-textoGris text-sm leading-relaxed text-center">
                Espacios adaptados, seguros y rodeados de naturaleza en La Garita de Alajuela.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección CTA Final */}
      <div className="py-24 bg-grisClaro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-grisClaro text-center">
            <div className="w-16 h-16 rounded-full bg-rosa/10 flex items-center justify-center mx-auto mb-8" style={{ color: colors.rosa }}>
              <Heart size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: colors.textoOscuro }}>
              Estamos aquí para acompañarte
            </h2>
            <p className="text-lg text-textoGris mb-10 max-w-2xl mx-auto leading-relaxed">
              Tu tranquilidad y la de tu familia es nuestra prioridad.
            </p>
            <button
              onClick={() => setPage('contacto')}
              className="px-10 py-4 font-bold rounded-full text-white transition shadow-lg hover:-translate-y-1 w-full sm:w-auto"
              style={{ backgroundColor: colors.rosa }}
            >
              Agenda una visita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
