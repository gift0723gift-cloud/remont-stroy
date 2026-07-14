import React, { useState } from 'react';

// Импорт медиафайлов
import facadeCollage1 from '../assets/portfolio/facade-collage-1.jpg';
import facadeCollage2 from '../assets/portfolio/facade-collage-2.jpg';
import terraceCollage from '../assets/portfolio/terrace-collage.jpg';
import basementBefore from '../assets/portfolio/basement-before.jpg';
import basementAfter from '../assets/portfolio/basement-after.jpg';
import toiletBefore from '../assets/portfolio/toilet-before.jpg';
import toiletAfter from '../assets/portfolio/toilet-after.jpg';
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
    type: 'gallery',
    images: [facadeCollage1, facadeCollage2],
    description: 'Очистка стен от многолетней грязи, штукатурка трещин, грунтование и нанесение износостойкой фасадной краски.',
    tags: ['Фасадные работы']
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
    tags: ['Фундамент']
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

const PortfolioCard = ({ item, onOpenLightbox }) => {
  const [viewMode, setViewMode] = useState('after');
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const getCurrentImage = () => {
    if (item.type === 'collage') return item.mainImage;
    if (item.type === 'before-after') return viewMode === 'after' ? item.imageAfter : item.imageBefore;
    return item.images[currentImgIndex];
  };

  const activeImg = getCurrentImage();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col group">
      
      {/* МЕДИА-КОНТЕЙНЕР (Вертикальный формат 3:4 для телефонных фото) */}
      <div 
        onClick={() => onOpenLightbox(activeImg)}
        className="relative aspect-[3/4] w-full bg-slate-950 cursor-zoom-in overflow-hidden border-b border-slate-800"
      >
        {/* Размытый задний план для заполнения боковых полей */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
          style={{ backgroundImage: `url(${activeImg})` }}
        />

        {/* Коллажи */}
        {item.type === 'collage' && (
          <img src={item.mainImage} alt={item.title} className="w-full h-full object-contain relative z-10" />
        )}

        {/* До / После */}
        {item.type === 'before-after' && (
          <div className="w-full h-full relative z-10">
            <img 
              src={viewMode === 'after' ? item.imageAfter : item.imageBefore} 
              alt={item.title} 
              className="w-full h-full object-contain" 
            />
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 z-20" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setViewMode('before')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 ${viewMode === 'before' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-900/90 text-gray-400 hover:text-white'}`}
              >
                Было ДО
              </button>
              <button 
                onClick={() => setViewMode('after')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 ${viewMode === 'after' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-900/90 text-gray-400 hover:text-white'}`}
              >
                Сделано ПОСЛЕ
              </button>
            </div>
          </div>
        )}

        {/* Галереи со стрелками */}
        {item.type === 'gallery' && (
          <div className="w-full h-full relative z-10">
            <img src={item.images[currentImgIndex]} alt={item.title} className="w-full h-full object-contain" />
            
            <button 
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white flex items-center justify-center transition-colors z-20 text-xl font-bold"
            >
              ‹
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white flex items-center justify-center transition-colors z-20 text-xl font-bold"
            >
              ›
            </button>
            
            <div className="absolute top-3 right-3 bg-slate-950/80 px-2.5 py-0.5 rounded text-[10px] text-gray-400 font-mono z-20">
              {currentImgIndex + 1} / {item.images.length}
            </div>
          </div>
        )}
      </div>

      {/* ТЕКСТОВЫЙ БЛОК */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold tracking-wider uppercase bg-slate-950 text-amber-500 px-2.5 py-1 rounded-md border border-amber-500/5">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed flex-grow">{item.description}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            НАШИ <span className="text-amber-500">ОБЪЕКТЫ</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Никаких картинок из интернета. Только реальные примеры работ строительной компании <span className="text-white font-semibold">VERTEX</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} item={item} onOpenLightbox={setLightboxImg} />
          ))}
        </div>
      </div>

      {/* ПОЛНОЭКРАННЫЙ ПРОСМОТР */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-amber-500 transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            ✕
          </button>
          <img 
            src={lightboxImg} 
            alt="Превью" 
            className="max-w-full max-h-[92vh] object-contain rounded-lg shadow-2xl" 
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;