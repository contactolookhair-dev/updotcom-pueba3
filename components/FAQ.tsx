import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "¿Necesito saber de tecnología?", a: "NO. Nosotros configuramos todo. Tú solo usas un panel muy simple para ver tus ventas." },
  { q: "¿Necesito invertir en publicidad aparte?", a: "Depende del plan. En el plan Starter y Pro gestionamos tus herramientas, pero la inversión en anuncios (lo que pagas a Facebook/Google) corre por tu cuenta si decides hacerla." },
  { q: "¿Puedo cambiar de plan después?", a: "Sí, en cualquier momento. Puedes empezar pequeño y escalar cuando tengas más ventas." },
  { q: "¿Me acompañan en el proceso?", a: "Sí. No te dejamos solo con un software. Te enseñamos a usarlo y estamos en soporte si algo falla." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-dark text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-gray-50"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}