import { createContext, useContext, useState } from 'react';

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [lightbox, setLightbox] = useState({ isOpen: false, img: '', title: '', desc: '' });

  const openLightbox = (img, title, desc) => {
    setLightbox({ isOpen: true, img, title, desc });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  return (
    <LightboxContext.Provider value={{ lightbox, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  );
}

export const useLightbox = () => useContext(LightboxContext);
