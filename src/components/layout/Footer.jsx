import { ChevronRight, Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

export default function Footer({ currentPage, setCurrentPage }) {
  return (
    <footer className="pt-16 pb-8 border-t-4 text-white" style={{ backgroundColor: colors.textoOscuro, borderColor: colors.rosa }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Logo Santa Clara Home Care" className="w-10 h-10 mr-3 rounded-full" />
              <span className="ml-3 font-extrabold text-xl">Residencia Geriátrica Santa Clara Home Care</span>
            </div>
            <p className="text-gray-400">Dedicados a brindar calidad de vida, seguridad y amor a los adultos mayores en La Garita de Alajuela.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm" style={{ color: colors.verdeTeal }}>Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Inicio</button></li>
              <li><button onClick={() => setCurrentPage('nosotros')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Nosotros</button></li>
              <li><button onClick={() => setCurrentPage('servicios')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Servicios</button></li>
              <li><button onClick={() => setCurrentPage('comunidad')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Comunidad</button></li>
              <li><button onClick={() => setCurrentPage('contacto')} className="hover:text-white flex items-center"><ChevronRight size={14} className="mr-1" /> Contacto</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm" style={{ color: colors.verdeTeal }}>Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-rosa" /> +506 2433-0000</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2 text-rosa" /> <a href="mailto:santaclarahc@gmail.com">santaclarahc@gmail.com</a></li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-rosa" /> La Garita, Alajuela</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <button type="button" className="mb-3 block w-full text-gray-300 underline" onClick={() => setCurrentPage('privacidad')}>Aviso de privacidad</button>
          &copy; 2024 Residencia Geriátrica Santa Clara Home Care. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
