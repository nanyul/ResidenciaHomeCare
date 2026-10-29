import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

export default function ContactoPage() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.textoOscuro }}>Contacto y Ubicación</h1>
      </div>
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
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
          </div>
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-sm border" style={{ borderColor: colors.grisClaro }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.67343345577!2d-84.27320382359069!3d10.00873946456309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f8753161b72d%3A0x2cbc9e43ba3cb6c8!2sSanta%20Clara%20Homecare!5e1!3m2!1ses-419!2scr!4v1793301513741!5m2!1ses-419!2scr" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
