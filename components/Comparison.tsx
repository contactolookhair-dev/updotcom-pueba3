import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Tu negocio <span className="text-gray-400 line-through decoration-gray-400">antes</span> y <span className="text-electric">después</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-0 md:gap-8 rounded-3xl overflow-hidden shadow-2xl">
          {/* Before */}
          <div className="bg-white p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>
            <h3 className="text-2xl font-bold text-gray-500 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white text-sm">⛔</span>
              Sin UpDotCom
            </h3>
            <ul className="space-y-6">
              {[
                "Respondes cuando puedes (o te acuerdas).",
                "No ves qué anuncio te trae ventas reales.",
                "Copias y pegas el mismo mensaje 50 veces.",
                "Tu agenda es un cuaderno o notas sueltas."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-500">
                  <XCircle className="shrink-0 text-red-400 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-white p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-electric"></div>
            <div className="absolute inset-0 bg-blue-50/30 pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-full bg-electric flex items-center justify-center text-white text-sm">✨</span>
              Con UpDotCom
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "Respuesta instantánea 24/7.",
                "Datos claros: inviertes $1, sacas $5.",
                "El sistema chatea y califica al cliente solo.",
                "Agenda automática sincronizada con Google."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-dark font-medium">
                  <CheckCircle className="shrink-0 text-electric mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}