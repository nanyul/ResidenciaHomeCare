import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const colors = {
  blanco: '#FFFFFF',
  grisClaro: '#E4E5E6',
  rosa: '#F69BAC',
  verdeTeal: '#66B3B4',
  textoOscuro: '#2D3748',
  textoGris: '#4A5568'
};

export default function Chatbot() {
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
}
