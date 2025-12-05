import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-500"
        >
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
          Tecnología simple para no expertos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-dark mb-6 max-w-4xl"
        >
          Más clientes. <br className="hidden md:block" />
          <span className="text-gray-400">Menos trabajo.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed"
        >
          Unimos tu publicidad, tu WhatsApp y tu seguimiento en un solo sistema automático. Ideal para negocios que quieren vender más sin complicarse con tecnología.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#contacto"
            className="px-8 py-4 bg-electric text-white text-base font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
          >
            Quiero mi plan ideal <ArrowRight size={18} />
          </a>
          <a
            href="#como-funciona"
            className="px-8 py-4 bg-gray-50 text-dark text-base font-medium rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
          >
            Ver cómo funciona
          </a>
        </motion.div>

        {/* Animated Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-20 relative w-full max-w-5xl"
        >
          {/* Main Dashboard Shell */}
          <div className="relative bg-dark rounded-2xl md:rounded-[2.5rem] p-2 md:p-4 shadow-2xl border border-gray-800">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20 hidden md:block"></div>
             
             {/* Screen Content */}
             <div className="bg-white rounded-xl md:rounded-[2rem] overflow-hidden aspect-[16/9] md:aspect-[16/8] relative flex">
                
                {/* Sidebar (Mini CRM) */}
                <div className="w-1/4 bg-gray-50 border-r border-gray-100 hidden md:flex flex-col p-4">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-3 mb-4 opacity-60">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="flex-1">
                        <div className="h-2 w-16 bg-gray-200 rounded mb-1"></div>
                        <div className="h-2 w-10 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 bg-white p-6 md:p-10 relative flex flex-col">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-dark">Cliente Nuevo</div>
                        <div className="text-xs text-green-500">En línea (Bot activo)</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages Animation */}
                  <div className="space-y-4 flex-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-sm text-sm text-gray-700"
                    >
                      Hola, vi su anuncio en Instagram. ¿Tienen disponibilidad?
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 2 }}
                      className="bg-electric/10 p-3 rounded-2xl rounded-tr-none max-w-sm ml-auto text-sm text-dark font-medium"
                    >
                      ¡Hola! 👋 Claro que sí. Nuestro sistema revisó la agenda y tenemos hora para mañana a las 10:00 AM. ¿Te agendo?
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 3.5 }}
                      className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-sm text-sm text-gray-700"
                    >
                      Sí por favor, confírmame.
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 4.5 }}
                      className="flex justify-center py-4"
                    >
                       <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-green-100">
                         <CheckCircle2 size={12} /> Cita agendada automáticamente
                       </span>
                    </motion.div>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-electric/20 blur-3xl -z-10 rounded-[3rem]"></div>
        </motion.div>

      </div>
    </section>
  );
}