import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Строгий строительный знак VERTEX */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-amber-500"
        >
          {/* Левая сторона угла / правое крыло буквы V */}
          <path 
            d="M3 4L12 20V15L6 4H3Z" 
            fill="currentColor" 
          />
          {/* Правая сторона угла с небольшим затенением для объема */}
          <path 
            d="M21 4L12 20V15L18 4H21Z" 
            fill="currentColor" 
            opacity="0.75"
          />
        </svg>
      </div>
      
      {/* Текстовая часть — строгая и понятная */}
      <div className="flex flex-col">
        <span className="text-lg font-extrabold tracking-widest text-white leading-none">
          VERTEX
        </span>
        <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase mt-1">
          Ремонт и отделка
        </span>
      </div>
    </div>
  );
}