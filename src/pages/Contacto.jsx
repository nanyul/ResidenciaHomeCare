import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

export default function ContactoPage() {
  const [borrador, setBorrador] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const asunto = encodeURIComponent(data.get('motivo'));
    const cuerpo = encodeURIComponent(`Nombre: ${data.get('nombre')}\nCorreo: ${data.get('correo')}\n\n${data.get('mensaje')}`);
    window.location.href = `mailto:santaclarahc@gmail.com?subject=${asunto}&body=${cuerpo}`;
    setBorrador(true);
  };

  return (
    <div className="w-full">
      <div className="residence-banner border-b px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.textoOscuro }}>Contacto y Ubicación</h1>
      </div>
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.verdeTeal }}>Información Directa</h2>
              <ul className="space-y-5" style={{ color: colors.textoGris }}>
                <li className="flex items-center"><MapPin className="mr-4" style={{ color: colors.rosa }} /> La Garita, Alajuela, Costa Rica.</li>
                <li className="flex items-center"><Phone className="mr-4 shrink-0" style={{ color: colors.verdeTeal }} /> <a className="underline" href="tel:+50624330000">+506 2433 1625</a></li>
                <li className="flex items-center"><MessageCircle className="mr-4 shrink-0 text-teal-700" aria-hidden="true" /> <a className="font-bold text-teal-800 underline" href="https://wa.me/50661022525" target="_blank" rel="noreferrer">WhatsApp +506 6102-2525</a></li>
                <li className="flex items-center"><Mail className="mr-4 shrink-0" style={{ color: colors.textoOscuro }} /> <a className="break-all underline" href="mailto:santaclarahc@gmail.com">santaclarahc@gmail.com</a></li>
                <li><a className="font-bold text-teal-800 underline" href="https://www.google.com/maps/dir/?api=1&destination=Santa%20Clara%20Homecare%2C%20La%20Garita%2C%20Alajuela" target="_blank" rel="noreferrer">Cómo llegar con Google Maps</a></li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border" style={{ borderColor: colors.grisClaro }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.textoOscuro }}>Envíenos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <label className="block font-bold" htmlFor="motivo">Motivo de contacto</label>
                <select id="motivo" name="motivo" className="mb-4 mt-1 w-full rounded-xl border border-slate-300 p-3">
                  <option>Visita guiada</option><option>Valoración presencial</option><option>Consulta general</option>
                </select>
                <label className="block font-bold" htmlFor="nombre">Nombre completo</label>
                <input id="nombre" name="nombre" autoComplete="name" required className="mb-4 mt-1 w-full rounded-xl border border-slate-300 p-3" />
                <label className="block font-bold" htmlFor="correo">Correo electrónico</label>
                <input id="correo" name="correo" type="email" autoComplete="email" required className="mb-4 mt-1 w-full rounded-xl border border-slate-300 p-3" />
                <label className="block font-bold" htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="4" required className="mt-1 w-full rounded-xl border border-slate-300 p-3" />
                <p className="mb-4 mt-2 text-sm text-slate-700">El formulario abre su aplicación de correo. Evite incluir información médica.</p>
                <button type="submit" className="w-full rounded-xl bg-teal-800 py-4 text-lg font-bold text-white hover:bg-teal-900">
                  Preparar correo
                </button>
              </form>
              {borrador && <p role="status" className="mt-4 rounded-xl bg-teal-50 p-4 text-teal-900">Revise y envíe el borrador desde su aplicación de correo.</p>}
            </div>
          </div>
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-sm border" style={{ borderColor: colors.grisClaro }}>
            <iframe title="Ubicación de Santa Clara Home Care" className="h-full min-h-[400px] w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.67343345577!2d-84.27320382359069!3d10.00873946456309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f8753161b72d%3A0x2cbc9e43ba3cb6c8!2sSanta%20Clara%20Homecare!5e1!3m2!1ses-419!2scr!4v1793301513741!5m2!1ses-419!2scr" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
