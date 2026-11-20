import { Activity, Apple, ClipboardList, HeartPulse, Search, Stethoscope, Users } from 'lucide-react';

const services = [
  [Stethoscope, 'Medicina general', 'Valoraciones y seguimiento de la salud, con coordinación de consultas según cada caso.'],
  [HeartPulse, 'Enfermería 24/7', 'Supervisión, apoyo en el cuidado diario y administración de medicamentos bajo indicación médica.'],
  [Activity, 'Fisioterapia', 'Ejercicios adaptados para trabajar la movilidad, el equilibrio y la fuerza.'],
  [Apple, 'Nutrición', 'Menús ajustados a las preferencias, necesidades nutricionales y texturas de cada residente.'],
  [Users, 'Actividades sociorecreativas', 'Talleres, música y juegos para compartir y mantener intereses propios.'],
  [ClipboardList, 'Planes personalizados', 'Una valoración inicial orienta el plan de cuidados y su seguimiento con la familia.'],
];

const spaces = [
  ['Habitaciones', 'Espacios para el descanso y las rutinas personales.', '1616594039964-ae9021a400a0'],
  ['Áreas verdes', 'Un lugar para caminar, conversar y pasar tiempo al aire libre.', '1585320806297-9794b3e4eeae'],
  ['Zonas comunes', 'Salas para compartir actividades y recibir a la familia.', '1600210492486-724fe5c67fb0'],
  ['Comedor', 'Un punto de encuentro para disfrutar las comidas en compañía.', '1615874959474-d609969a20ed'],
];

const photo = (id, width) => 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=' + width + '&q=80';

export default function Servicios({ openLightbox }) {
  return (
    <>
      <header className="residence-banner px-4 py-16 text-center">
        <p className="mb-2 font-bold text-teal-800">Especialidades y servicios</p>
        <h1>Atención para cada etapa</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-700">Conozca el apoyo disponible para la salud, la vida diaria y la convivencia.</p>
        <a href="#galeria" className="residence-outline mt-6 inline-block rounded-full px-5 py-3 font-bold">Ver instalaciones</a>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-label="Especialidades disponibles">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([Icon, title, desc]) => (
            <article className="residence-card rounded-2xl p-6" key={title}>
              <div className="residence-icon mb-4 grid h-12 w-12 place-items-center rounded-xl"><Icon size={24} aria-hidden="true" /></div>
              <h2 className="mb-2 text-xl font-extrabold text-slate-900">{title}</h2>
              <p className="leading-relaxed text-slate-700">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="galeria" className="scroll-mt-24 bg-teal-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Galería de instalaciones</h2>
          <p className="mb-6 mt-3 text-teal-100">Seleccione una imagen para ampliarla. Fotografías de referencia.</p>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {spaces.map(([title, desc, id]) => (
              <button type="button" key={title} onClick={() => openLightbox(photo(id, 1200), title, desc)} className="group relative aspect-square overflow-hidden rounded-2xl bg-teal-800 text-left" aria-label={'Ampliar imagen de ' + title.toLowerCase()}>
                <img src={photo(id, 750)} alt="" loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105 motion-reduce:transition-none" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black to-transparent px-3 pb-3 pt-10 font-bold sm:px-5"><span>{title}</span><Search size={18} className="shrink-0" aria-hidden="true" /></span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
