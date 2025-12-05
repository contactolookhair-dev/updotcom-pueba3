import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    description: "Para negocios que están empezando.",
    color: "bg-blue-50 text-blue-700",
    badgeColor: "bg-blue-500",
    features: [
      "WhatsApp profesional",
      "Respuestas automáticas 24/7",
      "Mini CRM simple",
      "Email de bienvenida"
    ],
    benefit: "Dejas de perder clientes por no responder."
  },
  {
    name: "Automation Pro",
    description: "Para negocios con flujo constante.",
    color: "bg-green-50 text-green-700",
    badgeColor: "bg-green-500",
    features: [
      "Todo del Plan Starter",
      "Seguimiento automático",
      "Agenda integrada",
      "Landing page simple"
    ],
    benefit: "Tus clientes reciben seguimiento sin que tú estés encima.",
    featured: true
  },
  {
    name: "Growth",
    description: "Para quienes quieren crecer fuerte.",
    color: "bg-orange-50 text-orange-700",
    badgeColor: "bg-orange-500",
    features: [
      "Todo del Plan Pro",
      "Panel de resultados",
      "Segmentación de clientes",
      "Mensajes masivos"
    ],
    benefit: "Tomas decisiones con datos, no con suerte."
  },
  {
    name: "Ads + Total",
    description: "Para delegar absolutamente todo.",
    color: "bg-red-50 text-red-700",
    badgeColor: "bg-red-500",
    features: [
      "Todo del Plan Growth",
      "Gestión de publicidad completa",
      "Integración total",
      "Reporte mensual simple"
    ],
    benefit: "Solo te enfocas en atender. Nosotros hacemos el resto."
  }
];

export default function Pricing() {
  return (
    <section id="planes" className="py-32 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Elige tu plan ideal</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Soluciones escalables diseñadas para cada etapa de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${plan.featured ? 'border-electric bg-gray-900 ring-4 ring-electric/20' : 'border-gray-800 bg-gray-900/50'} hover:bg-gray-800 transition-colors duration-300`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric text-white text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${plan.color}`}>
                  {plan.name}
                </span>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-white mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="p-4 bg-white/5 rounded-2xl mb-6 border border-white/10">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Beneficio Clave</p>
                  <p className="text-sm font-medium text-white">"{plan.benefit}"</p>
                </div>
                <a 
                  href="#contacto"
                  className={`w-full block text-center py-3 rounded-xl text-sm font-bold transition-transform active:scale-95 ${plan.featured ? 'bg-electric text-white hover:bg-blue-600' : 'bg-white text-dark hover:bg-gray-100'}`}
                >
                  Lo quiero
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}