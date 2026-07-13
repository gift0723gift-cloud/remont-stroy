import React, { useState } from 'react';

// 1. Импортируем фотографии фасада и террасы
import facadeCollage1 from '../assets/portfolio/facade-collage-1.jpg';
import facadeCollage2 from '../assets/portfolio/facade-collage-2.jpg';
import terraceCollage from '../assets/portfolio/terrace-collage.jpg';

// 2. Импортируем пары До/После
import basementBefore from '../assets/portfolio/basement-before.jpg';
import basementAfter from '../assets/portfolio/basement-after.jpg';
import toiletBefore from '../assets/portfolio/toilet-before.jpg';
import toiletAfter from '../assets/portfolio/toilet-after.jpg';

// 3. Импортируем галереи внутренних работ
import showerMain from '../assets/portfolio/shower-beige-main.jpg';
import showerDetails from '../assets/portfolio/shower-beige-details.jpg';
import bathroomClassic from '../assets/portfolio/bathroom-classic-tub.jpg';
import tilingFinished from '../assets/portfolio/tiling-finished.jpg';
import tilingProcess from '../assets/portfolio/tiling-process.jpg';
import tilingAngle3 from '../assets/portfolio/tiling-floor-angle3.jpg';

const portfolioData = [
  {
    id: 'facade',
    title: 'Реставрация и покраска фасада',
    type: 'collage',
    mainImage: facadeCollage1,
    description: 'Очистка стен от многолетней грязи, штукатурка трещин, грунтование и нанесение износостойкой фасадной краски.',
    tags: ['Фасадные работы', 'Капитальный ремонт']
  },
  {
    id: 'terrace',
    title: 'Ремонт открытой террасы',
    type: 'collage',
    mainImage: terraceCollage,
    description: 'Демонтаж старого слоя, устройство надежной гидроизоляции, заливка прочной стяжки и монтаж защитного ограждения.',
    tags: ['Террасы', 'Гидроизоляция']
  },
  {
    id: 'basement',
    title: 'Гидроизоляция цоколя дома',
    type: 'before-after',
    imageBefore: basementBefore,
    imageAfter: basementAfter,
    description: 'Комплексная подготовка бетонного основания деревянного дома и нанесение бесшовной обмазочной гидроизоляции.',
    tags: ['Фундамент', 'Защита от влаги']
  },
  {
    id: 'toilet',
    title: 'Капитальный ремонт туалета',
    type: 'before-after',
    imageBefore: toiletBefore,
    imageAfter: toiletAfter,
    description: 'Замена коммуникаций, выравнивание стен, укладка плитки под мрамор, монтаж инсталляции и скрытого ревизионного люка.',
    tags: ['Санузел', 'Плитка']
  },
  {
    id: 'shower',
    title: 'Душевая зона из керамогранита',
    type: 'gallery',
    images: [showerMain, showerDetails],
    description: 'Обустройство монолитного поддона с линейным трапом, облицовка крупноформатной плиткой и монтаж скрытых полок-ниш.',
    tags: ['Душевая', 'Керамогранит']
  },
  {
    id: 'bathroom',
    title: 'Свежий ремонт ванной комнаты',
    type: 'collage',
    mainImage: bathroomClassic,
    description: 'Лаконичный ремонт: подготовка и покраска влагостойкой краской, установка классической ванны, экрана и сантехники.',
    tags: ['Ванная под ключ']
  },
  {
    id: 'tiling',
    title: 'Укладка плитки под дерево',
    type: 'gallery',
    images: [tilingFinished, tilingProcess, tilingAngle3],
    description: 'Высокоточное выравнивание пола, бесшовная укладка крупноформатной плитки по системе СВП с точечным обходом колонн.',
    tags: ['Полы', 'СВП укладка']
  }
];

const PortfolioCard = ({ item }) => {
  // Состояние для переключателя До/После
  const [viewMode, setViewMode] = useState('after'); // 'before' или 'after'
  // Состояние для текущего фото в слайдере/галерее
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-amber-500/30 flex flex-col group">
      
      {/* МЕДИА-БЛОК КАРТОЧКИ */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-950">
        
        {/* Рендер для обычных коллажей и одиночных фото */}
        {item.type === 'collage' && (
          <img 
            src={item.mainImage} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Рендер для интерактивного До / После */}
        {item.type === 'before-after' && (
          <div className="w-full h-full relative">
            <img 
              src={viewMode === 'after' ? item.imageAfter : item.imageBefore} 
              alt={item.title} 
              className="w-full h-full object-cover animate-fadeIn" 
            />
            {/* Кнопки переключения поверх фото */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10">
              <button 
                onClick={() => setViewMode('before')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${viewMode === 'before' ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-900/80 text-gray-300 hover:bg-slate-800'}`}
              >
                Результат ДО
              </button>
              <button 
                onClick={() => setViewMode('after')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${viewMode === 'after' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-900/80 text-gray-300 hover:bg-slate-800'}`}
              >
                Сделано ПОСЛЕ
              </button>
            </div>
          </div>
        )}

        {/* Рендер для галереи с миниатюрами */}
        {item.type === 'gallery' && (
          <div className="w-full h-full relative">
            <img 
              src={item.images[currentImgIndex]} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            {/* Точки-переключатели или миниатюры */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-full z-10">
              {item.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImgIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentImgIndex ? 'bg-amber-500 scale-110' : 'bg-gray-400/60'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ОПИСАНИЕ КАРТОЧКИ */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Теги */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item.tags.map((tag, i) => (
            <span key={i} className="text-[11px] font-semibold tracking-wider uppercase bg-slate-950 text-amber-500 px-2.5 py-1 rounded-md border border-amber-500/10">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors duration-350">
          {item.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Шапка блока */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            НАШИ <span className="text-amber-500">ОБЪЕКТЫ</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Никаких картинок из интернета. Только реальные объекты, выполненные мастерами строительной компании <span className="text-white font-semibold">VERTEX</span>.
          </p>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;