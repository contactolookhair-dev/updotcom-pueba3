import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Zap, 
  Calendar, 
  BrainCircuit, 
  Clock, 
  Filter, 
  CheckCircle2, 
  TrendingUp,
  Facebook,
  Instagram,
  Video
} from 'lucide-react';

// Helper for chat bubbles
const ChatBubble = ({ text, isUser, delay = 0, isSystem = false }: { text: string, isUser: boolean, delay?: number, isSystem?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className={`max-w-[80%] p-3 rounded-2xl text-sm mb-3 ${
      isUser 
        ? 'bg-gray-100 text-gray-800 rounded-tl-none self-start mr-auto' 
        : isSystem 
          ? 'bg-orange-50 text-orange-700 border border-orange-100 rounded-tr-none self-end ml-auto'
          : 'bg-electric text-white rounded-tr-none self-end ml-auto'
    }`}
  >
    {text}
  </motion.div>
);

export default function FeaturesShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">

        {/* 1. UNIFIED CONVERSATIONS (Center Feature) */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Todas las conversaciones en un solo lugar.</h2>
            <p className="text-xl text-gray-500">Todos tus canales en un solo CRM. Nunca más pierdas un mensaje.</p>
          </div>
          
          <div className="relative w-full max-w-3xl h-64 md:h-80 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center overflow-hidden">
            {/* Funnel Graphic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-24 bg-gray-200 mt-20"></div>
            </div>
            
            {/* Floating Icons converging */}
            {[
              { icon: <MessageCircle size={24} />, color: 'bg-green-500', x: -150, delay: 0 }, // WA
              { icon: <Instagram size={24} />, color: 'bg-pink-500', x: -80, delay: 0.2 }, // IG
              { icon: <Facebook size={24} />, color: 'bg-blue-600', x: 80, delay: 0.4 }, // FB
              { icon: <Video size={24} />, color: 'bg-black', x: 150, delay: 0.6 }, // TikTok/Video
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: item.x, y: -100 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: item.delay, type: "spring" }}
                className={`absolute z-10 w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg`}
              >
                {item.icon}
              </motion.div>
            ))}

            {/* The Unified CRM Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-10 z-20 bg-white border border-gray-200 shadow-xl rounded-xl px-8 py-4 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white"></div>
              </div>
              <span className="font-semibold text-dark">Bandeja Unificada</span>
            </motion.div>
          </div>
        </div>

        {/* 2 & 3. 24/7 & FOLLOW UP (Grid) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 24/7 Response */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col justify-between overflow-hidden">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-dark mb-2">Respuestas automáticas 24/7</h3>
              <p className="text-gray-500">Tu negocio responde siempre, incluso cuando tú no estás.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 min-h-[200px] flex flex-col">
              <ChatBubble text="Hola, ¿tienen stock?" isUser={true} delay={0.2} />
              <div className="relative">
                <ChatBubble text="¡Hola! Sí, tenemos stock disponible para envío inmediato ⚡" isUser={false} delay={1.2} />
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 text-white p-1 rounded-full shadow-sm z-10"
                >
                  <Zap size={12} fill="white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Auto Follow Up */}
          <div className="bg-dark rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden relative">
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold mb-2">Seguimiento automático</h3>
              <p className="text-gray-400">Recupera clientes sin perseguir a nadie.</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-2xl p-4 border border-white/10 min-h-[200px] flex flex-col relative z-10">
              <ChatBubble text="Precio por favor" isUser={true} delay={0.2} />
              <ChatBubble text="$25.000. ¿Te interesa?" isUser={false} delay={0.4} />
              
              {/* The nudge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="my-2 text-center text-xs text-gray-500"
              >
                24 horas después...
              </motion.div>
              
              <ChatBubble text="Hola 👋, ¿sigues interesado en el producto?" isUser={false} isSystem={true} delay={2.5} />
              <ChatBubble text="Ah sí, perdón se me pasó. Lo quiero." isUser={true} delay={3.5} />
            </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* 4 & 5. FUNNEL & ADS (Flow) */}
        <div className="bg-gray-50 rounded-3xl p-5 md:p-12 border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <div className="mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">Publicidad conectada a resultados reales.</h3>
                  <p className="text-gray-500 text-base md:text-lg mb-6">Ve cada paso del cliente, aunque no sepas de marketing. Tu publicidad se convierte en ventas reales.</p>
                </div>

                {/* Ads Flow Animation */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <Facebook size={18} className="md:w-5 md:h-5" />
                    </div>
                    
                    {/* Responsive Bar */}
                    <motion.div 
                       initial={{ scaleX: 0 }}
                       whileInView={{ scaleX: 1 }}
                       transition={{ duration: 0.8, ease: "easeOut" }}
                       className="h-1 bg-gray-200 rounded-full overflow-hidden w-12 md:w-24 origin-left shrink-0"
                    >
                      <motion.div className="h-full bg-electric w-full" initial={{ x: '-100%' }} whileInView={{ x: '0%' }} transition={{ duration: 1, repeat: Infinity }} />
                    </motion.div>
                    
                    <div className="text-xs md:text-sm font-bold text-dark shrink">Vieron tu anuncio</div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <MessageCircle size={18} className="md:w-5 md:h-5" />
                    </div>
                    
                    <motion.div 
                       initial={{ scaleX: 0 }}
                       whileInView={{ scaleX: 1 }}
                       transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                       className="h-1 bg-gray-200 rounded-full overflow-hidden w-12 md:w-24 origin-left shrink-0"
                    >
                      <motion.div className="h-full bg-green-500 w-full" initial={{ x: '-100%' }} whileInView={{ x: '0%' }} transition={{ duration: 1, repeat: Infinity, delay: 0.5 }} />
                    </motion.div>
                    
                    <div className="text-xs md:text-sm font-bold text-dark shrink">Preguntaron</div>
                  </div>

                   <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-electric/10 rounded-full flex items-center justify-center text-electric">
                      <TrendingUp size={18} className="md:w-5 md:h-5" />
                    </div>
                    
                    <motion.div 
                       initial={{ scaleX: 0 }}
                       whileInView={{ scaleX: 1 }}
                       transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                       className="h-1 bg-gray-200 rounded-full overflow-hidden w-12 md:w-24 origin-left shrink-0"
                    >
                       <motion.div className="h-full bg-electric w-full" initial={{ x: '-100%' }} whileInView={{ x: '0%' }} transition={{ duration: 1, repeat: Infinity, delay: 1 }} />
                    </motion.div>
                    
                    <div className="text-xs md:text-sm font-bold text-dark shrink">Compra Realizada</div>
                  </div>
                </div>
             </div>

             {/* CRM Board Visual */}
             <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 mt-6 lg:mt-0 w-full overflow-hidden">
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                   {['Nuevos', 'Interesados', 'Cierre'].map((col, idx) => (
                     <div key={col} className="w-1/3 min-w-[100px] md:min-w-[120px] bg-gray-50 p-2 md:p-3 rounded-lg shrink-0">
                        <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-3 flex items-center gap-1">
                          <span className={`w-2 h-2 rounded-full ${idx === 2 ? 'bg-green-500' : 'bg-electric'}`}></span> {col}
                        </div>
                        <div className="space-y-2">
                           <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + (idx * 0.2) }}
                              className="bg-white p-2 rounded shadow-sm text-[10px] md:text-xs border border-gray-100"
                           >
                             Cliente #{idx + 1}
                           </motion.div>
                           {idx === 1 && (
                              <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 }}
                              className="bg-white p-2 rounded shadow-sm text-[10px] md:text-xs border border-gray-100"
                           >
                             Cliente #4
                           </motion.div>
                           )}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* 6 & 7. AGENDA & AI (Grid) */}
        <div className="grid md:grid-cols-2 gap-8">
           {/* Agenda */}
           <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col">
              <h3 className="text-2xl font-bold text-dark mb-2">Tu agenda trabaja sola.</h3>
              <p className="text-gray-500 mb-8">El sistema coordina citas sin que muevas un dedo.</p>
              
              <div className="bg-gray-50 rounded-2xl p-4 flex-1 relative overflow-hidden">
                 <ChatBubble text="¿Tienes hora para el martes?" isUser={true} />
                 
                 <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 'auto', opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-white p-3 rounded-xl shadow-md border border-gray-100 w-3/4 ml-auto mb-3"
                 >
                    <div className="text-xs font-bold text-gray-400 mb-2">Selecciona hora:</div>
                    <div className="grid grid-cols-2 gap-2">
                       <div className="bg-gray-100 p-2 rounded text-center text-xs text-gray-400 line-through">10:00</div>
                       <motion.div 
                         animate={{ backgroundColor: ["#f3f4f6", "#007AFF"] }}
                         transition={{ delay: 2, duration: 0.5 }}
                         className="bg-gray-100 p-2 rounded text-center text-xs cursor-pointer text-white"
                       >
                         11:30
                       </motion.div>
                    </div>
                 </motion.div>

                 <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5 }}
                    className="flex items-center gap-2 justify-end"
                 >
                    <span className="text-xs text-green-600 font-bold">Confirmado</span>
                    <CheckCircle2 size={16} className="text-green-500" />
                 </motion.div>
              </div>
           </div>

           {/* AI Sales */}
           <div className="bg-electric rounded-3xl p-8 md:p-12 text-white flex flex-col relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-2">IA que ayuda a vender.</h3>
                 <p className="text-blue-100 mb-8">La IA te ayuda a cerrar ventas con menos esfuerzo.</p>
               </div>
               
               <div className="bg-white rounded-2xl p-4 text-dark flex-1 relative">
                  <div className="text-xs text-gray-400 mb-4">Análisis de chat en tiempo real...</div>
                  
                  <div className="space-y-2 mb-4">
                     <div className="bg-gray-100 p-2 rounded-lg text-sm w-full">"Quiero el paquete premium, ¿cómo pago?"</div>
                  </div>

                  {/* Scan Effect */}
                  <motion.div 
                    initial={{ top: 0 }}
                    whileInView={{ top: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_15px_rgba(0,122,255,0.5)]"
                  ></motion.div>

                  {/* Badge */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-4 right-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold border border-orange-200 flex items-center gap-1"
                  >
                    <BrainCircuit size={14} /> Alta Intención 🔥
                  </motion.div>
               </div>
           </div>
        </div>

        {/* 8. TIME SAVER (Banner) */}
        <div className="bg-dark rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="mb-6 bg-white/10 p-4 rounded-full"
               >
                 <Clock size={40} className="text-electric" />
               </motion.div>
               
               <h3 className="text-3xl md:text-5xl font-bold mb-4">Ahorra horas todos los días.</h3>
               <p className="text-xl text-gray-400 mb-8">Automatiza lo aburrido. Enfócate en crecer.</p>

               <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/10">
                  <CheckCircle2 size={20} className="text-green-400" />
                  <span className="font-mono text-xl">
                    <motion.span
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                    >
                       15
                    </motion.span> tareas completadas hoy
                  </span>
               </div>
            </div>
        </div>

      </div>
    </section>
  );
}