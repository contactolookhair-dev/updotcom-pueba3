import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareOff, DollarSign, CalendarX, Clock } from 'lucide-react';

const problems = [
  {
    icon: <MessageSquareOff size={32} />,
    title: "Mensajes sin responder",
    desc: "Los clientes escriben, pero tú estás ocupado. Cuando respondes horas después, ya compraron en otro lado."
  },
  {
    icon: <DollarSign size={32} />,
    title: "Publicidad ciega",
    desc: "Pagas anuncios en redes sociales pero no sabes realmente cuántas ventas te traen. Sientes que tiras el dinero."
  },
  {
    icon: <CalendarX size={32} />,
    title: "Agenda caótica",
    desc: "Muchos preguntan precio, pero pocos agendan. Pierdes horas chateando con curiosos que no compran."
  },
  {
    icon: <Clock size={32} />,
    title: "Esclavo del celular",
    desc: "No tienes tiempo libre. Sientes que si no estás pegado al teléfono, tu negocio se detiene."
  }
];

export default function ProblemSection() {
  return (
    <section id="problema" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Si te pasa alguna de estas...</h2>
          <p className="text-xl text-gray-500">UpDotCom es la solución que buscabas.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-dark mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}