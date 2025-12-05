import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Video, 
  Search, 
  Megaphone, 
  FileText, 
  Zap, 
  BrainCircuit, 
  CheckCircle2,
  LayoutDashboard
} from 'lucide-react';

export default function UnifiedSystemFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this tall section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Use a stiffer spring for more responsive scroll tracking on mobile
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 25, restDelta: 0.001 });

  // --- STAGE 1: INBOUND CHANNELS (0% - 20%) ---
  // Icons start spread out and converge to center
  const opacityStage1 = useTransform(smoothProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const scaleStage1 = useTransform(smoothProgress, [0, 0.2], [1, 0.5]);
  const yStage1 = useTransform(smoothProgress, [0, 0.2], [0, 100]);

  // --- STAGE 2: REAL TIME CONVERSATION (20% - 45%) ---
  // Chat interface appears
  const opacityStage2 = useTransform(smoothProgress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
  const scaleStage2 = useTransform(smoothProgress, [0.15, 0.25], [0.8, 1]);
  const yStage2 = useTransform(smoothProgress, [0.2, 0.45], [0, -50]);
  
  // Internal chat animations triggered by scroll slices
  const bubble1Opacity = useTransform(smoothProgress, [0.22, 0.25], [0, 1]);
  const bubble1X = useTransform(smoothProgress, [0.22, 0.25], [-20, 0]);
  
  const bubble2Opacity = useTransform(smoothProgress, [0.28, 0.31], [0, 1]); // Auto reply
  const bubble2X = useTransform(smoothProgress, [0.28, 0.31], [20, 0]);
  
  const channelBubblesOpacity = useTransform(smoothProgress, [0.34, 0.38], [0, 1]); // IG/FB/TikTok icons popping

  // --- STAGE 3: FUNNEL (45% - 70%) ---
  // Funnel appears
  const opacityStage3 = useTransform(smoothProgress, [0.4, 0.45, 0.65, 0.7], [0, 1, 1, 0]);
  const scaleStage3 = useTransform(smoothProgress, [0.45, 0.55], [0.8, 1]);
  
  // Funnel steps lighting up
  const funnelStep1 = useTransform(smoothProgress, [0.48, 0.51], [0.3, 1]); // Interest
  const funnelStep2 = useTransform(smoothProgress, [0.51, 0.54], [0.3, 1]); // Convo
  const funnelStep3 = useTransform(smoothProgress, [0.54, 0.57], [0.3, 1]); // Follow up
  const funnelStep4 = useTransform(smoothProgress, [0.57, 0.60], [0.3, 1]); // Sale

  // --- STAGE 4: UNIFIED CRM & AI (70% - 100%) ---
  const opacityStage4 = useTransform(smoothProgress, [0.65, 0.7], [0, 1]);
  const yStage4 = useTransform(smoothProgress, [0.65, 0.75], [50, 0]);

  // CRM Rows appearing
  const row1Opacity = useTransform(smoothProgress, [0.72, 0.75], [0, 1]);
  const row2Opacity = useTransform(smoothProgress, [0.75, 0.78], [0, 1]);
  const row3Opacity = useTransform(smoothProgress, [0.78, 0.81], [0, 1]);

  // AI Elements
  const aiBadgeOpacity = useTransform(smoothProgress, [0.85, 0.9], [0, 1]);
  const aiBadgeScale = useTransform(smoothProgress, [0.85, 0.9], [0, 1]);
  
  const autoMsgOpacity = useTransform(smoothProgress, [0.88, 0.92], [0, 1]);
  const autoMsgY = useTransform(smoothProgress, [0.88, 0.92], [10, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-dark text-white">
      
      {/* STICKY CONTAINER */}
      {/* Using h-[100dvh] (dynamic viewport height) ensures full height on mobile browsers with address bars */}
      <div className="sticky top-0 h-screen md:h-[100vh] h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* --- TEXT CONTENT OVERLAY (Changes with stages) --- */}
        <div className="absolute top-16 md:top-24 z-20 text-center w-full px-6 pointer-events-none">
           {/* Stage 1 Text */}
           <motion.div style={{ opacity: opacityStage1 }} className="absolute w-full left-0 top-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Todos tus canales
              </h2>
              <p className="text-xl text-gray-400">En un solo sistema centralizado.</p>
           </motion.div>

           {/* Stage 2 Text */}
           <motion.div style={{ opacity: opacityStage2 }} className="absolute w-full left-0 top-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-electric">
                Conversación Real
              </h2>
              <p className="text-xl text-gray-400">No importa por dónde escriban, todo llega.</p>
           </motion.div>

           {/* Stage 3 Text */}
           <motion.div style={{ opacity: opacityStage3 }} className="absolute w-full left-0 top-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Embudo Automático
              </h2>
              <p className="text-xl text-gray-400">Todos los clientes entran a un flujo claro.</p>
           </motion.div>

           {/* Stage 4 Text */}
           <motion.div style={{ opacity: opacityStage4 }} className="absolute w-full left-0 top-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                CRM & Inteligencia Artificial
              </h2>
              <p className="text-xl text-gray-400">Todo tu negocio en un solo panel inteligente.</p>
              <p className="text-sm text-green-400/80 mt-3 font-medium">Detectamos clientes listos para comprar y te avisamos.</p>
           </motion.div>
        </div>


        {/* --- VISUALIZATIONS --- */}

        {/* 1. CHANNEL CONVERGENCE */}
        <motion.div 
           style={{ opacity: opacityStage1, scale: scaleStage1, y: yStage1 }}
           className="absolute w-full max-w-4xl h-[60vh] flex items-center justify-center"
        >
           {/* Center Core */}
           <div className="w-24 h-24 rounded-3xl bg-electric/20 border border-electric/50 flex items-center justify-center shadow-[0_0_50px_rgba(0,122,255,0.3)] z-10 backdrop-blur-md">
             <LayoutDashboard size={40} className="text-white" />
           </div>

           {/* Orbiting Icons - Adjusted positions for better mobile fit */}
           {[
             { icon: <MessageCircle size={24} />, color: "bg-[#25D366]", x: "-30vw", y: "-20vh" }, // WA
             { icon: <Instagram size={24} />, color: "bg-pink-600", x: "30vw", y: "-15vh" }, // IG
             { icon: <Facebook size={24} />, color: "bg-blue-600", x: "-25vw", y: "15vh" }, // FB
             { icon: <Video size={24} />, color: "bg-black border border-gray-700", x: "25vw", y: "20vh" }, // TikTok
             { icon: <Search size={24} />, color: "bg-red-500", x: "0vw", y: "-35vh" }, // Google
             { icon: <Megaphone size={24} />, color: "bg-blue-400", x: "-35vw", y: "0vh" }, // Meta Ads
             { icon: <FileText size={24} />, color: "bg-gray-500", x: "35vw", y: "0vh" }, // Form
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ x: item.x, y: item.y }}
               animate={{ x: 0, y: 0 }} // Corrected: Using layout animation conceptually via scroll
               style={{ x: useTransform(smoothProgress, [0, 0.2], [item.x, "0vw"]), y: useTransform(smoothProgress, [0, 0.2], [item.y, "0vh"]) }}
               className={`absolute w-12 h-12 md:w-14 md:h-14 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg z-0`}
             >
               {item.icon}
             </motion.div>
           ))}
        </motion.div>


        {/* 2. CHAT INTERFACE */}
        <motion.div
           style={{ opacity: opacityStage2, scale: scaleStage2, y: yStage2 }}
           className="absolute w-full max-w-md bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800"
        >
           {/* Phone Header */}
           <div className="bg-gray-100 px-4 md:px-6 py-4 flex items-center gap-3 border-b border-gray-200">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-electric flex items-center justify-center text-white">
                 <Zap size={20} />
              </div>
              <div>
                 <div className="font-bold text-dark text-sm">Asistente UpDotCom</div>
                 <div className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> En línea
                 </div>
              </div>
           </div>

           {/* Chat Body */}
           <div className="bg-white h-[350px] md:h-[400px] p-4 md:p-6 relative flex flex-col">
              {/* Client Msg */}
              <motion.div 
                 style={{ opacity: bubble1Opacity, x: bubble1X }}
                 className="bg-gray-100 text-dark p-3 rounded-2xl rounded-tl-none self-start max-w-[80%] mb-4 text-sm"
              >
                 Hola, ¿me puedes dar información?
              </motion.div>

              {/* Auto Reply */}
              <motion.div 
                 style={{ opacity: bubble2Opacity, x: bubble2X }}
                 className="bg-electric text-white p-3 rounded-2xl rounded-tr-none self-end max-w-[80%] text-sm mb-2 shadow-lg shadow-blue-500/20"
              >
                 ¡Hola! 👋 Claro que sí. Te cuento que nuestro sistema automatiza todo tu negocio.
              </motion.div>
              
              <motion.div 
                 style={{ opacity: bubble2Opacity }}
                 className="self-end text-[10px] text-gray-400 flex items-center gap-1 mb-8"
              >
                 <Zap size={10} className="text-yellow-500" /> Respondido automáticamente
              </motion.div>

              {/* Other channels entering */}
              <motion.div style={{ opacity: channelBubblesOpacity }} className="absolute bottom-6 left-0 w-full px-6 flex justify-center gap-4">
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center text-white shadow-md transform -translate-y-2">
                       <Instagram size={20} />
                    </div>
                    <span className="text-[10px] text-gray-400">DM</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md transform -translate-y-4">
                       <Facebook size={20} />
                    </div>
                    <span className="text-[10px] text-gray-400">Inbox</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-md transform -translate-y-2">
                       <Video size={20} />
                    </div>
                    <span className="text-[10px] text-gray-400">TikTok</span>
                 </div>
              </motion.div>
           </div>
        </motion.div>


        {/* 3. FUNNEL VISUALIZATION */}
        <motion.div
           style={{ opacity: opacityStage3, scale: scaleStage3 }}
           className="absolute w-full max-w-2xl flex flex-col items-center px-4"
        >
           {/* Funnel Steps */}
           <div className="relative w-full flex flex-col items-center gap-2">
              <motion.div style={{ opacity: funnelStep1 }} className="w-full bg-gray-800 rounded-2xl p-4 flex justify-between items-center text-white border border-gray-700">
                 <span className="font-bold text-sm md:text-base">1. Interés</span>
                 <span className="text-xs bg-gray-700 px-2 py-1 rounded">100%</span>
              </motion.div>
              
              <motion.div style={{ opacity: funnelStep2 }} className="w-[90%] md:w-[85%] bg-gray-800 rounded-2xl p-4 flex justify-between items-center text-white border border-gray-700">
                 <span className="font-bold text-sm md:text-base">2. Conversación</span>
                 <span className="text-xs bg-gray-700 px-2 py-1 rounded">60%</span>
              </motion.div>

              <motion.div style={{ opacity: funnelStep3 }} className="w-[80%] md:w-[70%] bg-gray-800 rounded-2xl p-4 flex justify-between items-center text-white border border-gray-700">
                 <span className="font-bold text-sm md:text-base">3. Seguimiento</span>
                 <span className="text-xs bg-gray-700 px-2 py-1 rounded">40%</span>
              </motion.div>

              <motion.div style={{ opacity: funnelStep4 }} className="w-[70%] md:w-[55%] bg-electric rounded-2xl p-4 flex justify-between items-center text-white shadow-[0_0_30px_rgba(0,122,255,0.4)]">
                 <span className="font-bold flex items-center gap-2 text-sm md:text-base"><CheckCircle2 size={16} /> 4. Venta</span>
                 <span className="text-xs bg-blue-600 px-2 py-1 rounded">25%</span>
              </motion.div>
           </div>
           
           {/* Flow Lines */}
           <div className="absolute inset-0 -z-10 flex justify-center">
              <div className="w-1 h-full bg-gradient-to-b from-gray-800 to-electric"></div>
           </div>
        </motion.div>


        {/* 4. UNIFIED CRM DASHBOARD */}
        <motion.div
           style={{ opacity: opacityStage4, y: yStage4 }}
           className="absolute w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-800 mx-4"
        >
           {/* Dashboard Header */}
           <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <LayoutDashboard size={20} className="text-dark" />
                 <span className="font-bold text-dark text-sm md:text-base">CRM Unificado</span>
              </div>
              <div className="flex gap-2">
                 <span className="w-3 h-3 rounded-full bg-red-400"></span>
                 <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                 <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
           </div>

           {/* CRM Body */}
           <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                 <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                    <tr>
                       <th className="p-4 font-medium">Cliente</th>
                       <th className="p-4 font-medium hidden md:table-cell">Canal</th>
                       <th className="p-4 font-medium">Estado</th>
                       <th className="p-4 font-medium hidden sm:table-cell">Acción</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                    
                    {/* Row 1 */}
                    <motion.tr style={{ opacity: row1Opacity }} className="hover:bg-gray-50 transition-colors">
                       <td className="p-4">
                          <div className="font-bold text-dark text-sm">Juan Pérez</div>
                          <div className="text-xs text-gray-400">Hace 2 min</div>
                       </td>
                       <td className="p-4 hidden md:table-cell">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                             <MessageCircle size={16} className="text-green-500" /> WhatsApp
                          </div>
                       </td>
                       <td className="p-4">
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                             Nuevo Lead
                          </span>
                       </td>
                       <td className="p-4 hidden sm:table-cell">
                          <div className="text-xs text-gray-500">Respondido por Bot</div>
                       </td>
                    </motion.tr>

                    {/* Row 2 */}
                    <motion.tr style={{ opacity: row2Opacity }} className="hover:bg-blue-50/30 transition-colors relative">
                       <td className="p-4">
                          <div className="font-bold text-dark text-sm">María González</div>
                          <div className="text-xs text-gray-400">Hace 15 min</div>
                       </td>
                       <td className="p-4 hidden md:table-cell">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                             <Instagram size={16} className="text-pink-500" /> Instagram
                          </div>
                       </td>
                       <td className="p-4 relative">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                             Interesado
                          </span>
                          
                          {/* AI High Intent Badge */}
                          <motion.div 
                             style={{ opacity: aiBadgeOpacity, scale: aiBadgeScale }}
                             className="absolute -top-3 right-0 md:left-20 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1 z-10 whitespace-nowrap"
                          >
                             <BrainCircuit size={12} /> Alta Intención 🔥
                          </motion.div>
                       </td>
                       <td className="p-4 hidden sm:table-cell relative">
                          <div className="text-xs text-electric font-medium">En seguimiento</div>
                          
                          {/* AI Action Pop-up */}
                          <motion.div 
                             style={{ opacity: autoMsgOpacity, y: autoMsgY }}
                             className="absolute top-8 left-0 bg-dark text-white text-[10px] px-2 py-1 rounded shadow-lg flex items-center gap-1 whitespace-nowrap"
                          >
                             <CheckCircle2 size={10} className="text-green-400" /> Recordatorio enviado
                          </motion.div>
                       </td>
                    </motion.tr>

                    {/* Row 3 */}
                    <motion.tr style={{ opacity: row3Opacity }} className="hover:bg-gray-50 transition-colors">
                       <td className="p-4">
                          <div className="font-bold text-dark text-sm">Empresas Ltda</div>
                          <div className="text-xs text-gray-400">Hace 1 hora</div>
                       </td>
                       <td className="p-4 hidden md:table-cell">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                             <FileText size={16} className="text-gray-500" /> Formulario Web
                          </div>
                       </td>
                       <td className="p-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                             Agendado
                          </span>
                       </td>
                       <td className="p-4 hidden sm:table-cell">
                          <div className="text-xs text-gray-500">Cita Confirmada</div>
                       </td>
                    </motion.tr>

                 </tbody>
              </table>
           </div>
        </motion.div>

      </div>
    </section>
  );
}