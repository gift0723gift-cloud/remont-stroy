import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-gray-500 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Левая сторона: Наш новый крутой логотип VERTEX */}
        <Logo />
        
        {/* Правая сторона: Копирайт и статус */}
        <div className="text-center sm:text-right space-y-1">
          <p className="text-gray-400 font-medium">
            &copy; 2026 VERTEX. Все права защищены.
          </p>
          <p className="text-gray-600 text-[11px]">
            Разработка строительных решений с гарантией качества
          </p>
          <p className="text-gray-500 text-[11px] font-mono tracking-wide">УНП: МА7438464</p>
        </div>

      </div>
    </footer>
  );
}