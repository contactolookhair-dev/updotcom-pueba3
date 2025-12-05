import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  {
    q: "¿Qué es un Lead?",
    a: "Es un cliente potencial. Alguien que vio tu anuncio y te dio permiso para contactarlo (dejó su email o teléfono)."
  },
  {
    q: "¿Qué es un Embudo?",
    a: "Son los pasos que diseñas para que un desconocido se convierta en cliente. Ejemplo: Ver anuncio -> Mandar mensaje -> Agendar -> Comprar."
  },
  {
    q: "¿Qué es automatizar?",
    a: "Es usar software para hacer tareas repetitivas. Como enviar el mismo mensaje de bienvenida a 100 personas al instante."
  },
  {
    q: "¿Por qué unificar?",
    a: "Tener WhatsApp, citas y datos en un solo lugar evita errores, ahorra tiempo y te permite ver la foto completa de tu negocio."
  }
];

export default function Educational() {
  return (
    <section id="educacion" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">No necesitas saber de marketing</h2>
          <p className="text-xl text-gray-500">Aquí te lo explicamos simple.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-64 perspective-1000 relative"
            >
              <div className="relative w-full h-full duration-500 preserve-3d group-hover:my-rotate-y-180 transition-all cursor-pointer">
                {/* Front */}
                <div className="absolute backface-hidden w-full h-full bg-gray-50 rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-gray-100 shadow-sm group-hover:shadow-lg">
                  <h3 className="text-2xl font-bold text-dark">{topic.q}</h3>
                  <span className="mt-4 text-sm text-electric font-medium bg-blue-50 px-3 py-1 rounded-full">Toca para aprender</span>
                </div>
                {/* Back */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-dark rounded-3xl p-8 flex items-center justify-center text-center shadow-xl">
                  <p className="text-lg text-white font-medium leading-relaxed">
                    {topic.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Style helper for flip effect since Tailwind doesn't have perspective by default in all configs */}
        <style>{`
          .perspective-1000 { perspective: 1000px; }
          .preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .my-rotate-y-180 { transform: rotateY(180deg); }
        `}</style>
      </div>
    </section>
  );
}