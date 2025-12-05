import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-2xl font-semibold tracking-tighter flex items-center gap-1">
            UpDotCom<span className="text-electric">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">Automatización de marketing para todos.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Términos</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacidad</a>
        </div>

        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} UpDotCom. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}