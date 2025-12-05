import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contacto" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hagamos que tu negocio trabaje<br />incluso cuando tú no estás</h2>
          <p className="text-xl text-gray-400">Déjanos tus datos y te recomendaremos tu plan ideal sin compromiso.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre completo"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Teléfono</label>
                <input 
                  type="tel" 
                  placeholder="+56 9..."
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Negocio</label>
              <input 
                type="text" 
                placeholder="Nombre de tu empresa"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">¿Qué te complica hoy?</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Me faltan clientes', 'No alcanzo a responder', 'No sé vender online', 'Quiero automatizar'].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-600 text-electric focus:ring-electric bg-transparent" />
                    <span className="text-sm text-gray-300">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full bg-electric hover:bg-blue-600 text-white font-bold text-lg py-5 rounded-xl transition-all shadow-lg shadow-blue-900/20 mt-4">
              Quiero mi diagnóstico gratuito
            </button>
          </form>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <MessageCircle size={28} fill="white" />
      </motion.a>
    </section>
  );
}