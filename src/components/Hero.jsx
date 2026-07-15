import Logo from './Logo';
import heroBg from '../assets/hero-bg.webp';
import React, { useState, useEffect } from 'react';

export default function Hero() {
  // Живой маркетинговый счетчик прохождений квиза
  const [passedCount, setPassedCount] = useState(14);

  useEffect(() => {
    // Симулируем случайную активность: кто-то прошел тест раз в 45 секунд
    const interval = setInterval(() => {
      setPassedCount(prev => prev + 1);
    }, 45000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative bg-slate-950 text-white min-h-screen flex flex-col">
      
      {/* Фоновая картинка */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={heroBg} 
          className="w-full h-full object-cover opacity-45" 
          alt="VERTEX background" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950"></div>
      </div>

      {/* 1. ШАПКА САЙТА (Теперь НАВСЕГДА ЗАКРЕПЛЕНА через fixed и следует за скроллом) */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Логотип */}
          <Logo />
          
       {/* Контакты в шапке */}
        <div className="flex flex-col items-end sm:flex-row sm:items-center gap-1 sm:gap-6">
          <span className="text-gray-300 text-sm hidden md:block">Работаем ежедневно</span>
          
          <a
            href="tel:+375292530030"
            className="text-white hover:text-amber-500 transition-colors font-medium whitespace-nowrap text-[11px] sm:text-base leading-none"
          >
            +375 (29) 253-00-30
          </a>
          
          <button
            onClick={() => {
              document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1 sm:px-6 sm:py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-md sm:rounded-lg text-[10px] sm:text-sm transition-all shadow whitespace-nowrap"
          >
            Вызвать замерщика
          </button>
        </div>
        </div>
      </header>

      {/* 2. ГЛАВНЫЙ БЛОК КОНТЕНТА (Добавили pt-28, чтобы текст не заезжал под фиксированную шапку) */}
      <div className="relative z-10 flex-grow flex flex-col justify-center max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        
        {/* Бейдж */}
        <div className="flex justify-start mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-inner">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Комплексный ремонт под ключ
          </span>
        </div>

        {/* Главный заголовок */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tighter">
          Ремонт под ключ, где <span className="text-amber-500">плитка не отвалится, а ламинат не вздуется.</span>
        </h1>

        {/* Описание */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
          Делаем полный цикл: от черновой отделки в новостройке до чистового ремонта. Цена фиксируется в договоре до начала работ. Сдаём объект строго по графику. Гарантия 3 года на все работы.
        </p>

       {/* Кнопка действия и социальное доказательство */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <button
          onClick={() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
        >
          Получить точную смету за 2 минуты
        </button>

        {/* Социальное доказательство с энергичной молнией */}
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-amber-500 text-lg animate-pulse">⚡</span>
          <span className="text-sm">
            Пройдено сегодня: <span className="text-gray-200 font-medium">{passedCount} {passedCount === 21 ? 'раз' : 'раза'}</span>
          </span>
        </div>
      </div> {/* Закрыли контейнер кнопки и счетчика */}

    </div> {/* Закрыли главный блок контента со строки 61 */}
  </section>
 );
}