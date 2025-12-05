import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Te conocemos",
    desc: "Analizamos tu negocio y entendemos qué necesitas. No usamos plantillas genéricas, nos adaptamos a ti.",
    icon: <Search className="text-white" size={24} />,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Diseñamos tu sistema",
    desc: "Conectamos tu publicidad con WhatsApp y tu agenda. Creamos los guiones de venta automáticos.",
    icon: <PenTool className="text-white" size={24} />,
    color: "bg-indigo-500"
  },
  {
    id: 3,
    title: "Todo corre solo",
    desc: "El sistema responde, hace seguimiento y agenda citas. Tú solo recibes la notificación de venta.",
    icon: <Rocket className="text-white" size={24} />,
    color: "bg-electric"
  }
];

const glossary = [
  { term: "Lead", def: "Persona interesada que dejó sus datos (nombre, teléfono)." },
  { term: "Automatización", def: "Tareas repetitivas que el sistema hace por ti (enviar mails, responder)." },
  { term: "Embudo", def: "El camino que sigue un cliente desde que te ve hasta que compra." },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        
        {/* Steps Column */}
        <div className="lg:col-span-2">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-4xl font-bold text-dark mb-12"
          >
            ¿Cómo funciona <span className="text-electric">UpDotCom</span>?
          </motion.h2>

          <div className="relative border-l-2 border-gray-100 ml-6 md:ml-10 space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[21px] md:-left-[21px] top-1 w-10 h-10 md:w-10 md:h-10 rounded-full ${step.color} flex items-center justify-center shadow-lg border-4 border-white z-10`}>
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-dark mb-2">Paso {step.id}: {step.title}</h3>
                <p className="text-gray-500 text-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Glossary Column (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
             <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Mini Glosario</h4>
                <div className="space-y-6">
                  {glossary.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                      className="group"
                    >
                      <span className="block font-bold text-dark group-hover:text-electric transition-colors">{item.term}</span>
                      <span className="text-sm text-gray-500 leading-snug">{item.def}</span>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}