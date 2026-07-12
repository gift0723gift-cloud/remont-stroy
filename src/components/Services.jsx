import React from 'react';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      badge: 'Этап 1',
      title: 'Черновые работы',
      description: 'Выравнивание стен и полов по маякам, разводка электрики и сантехники, гидро- и шумоизоляция, стяжка.',
      whyImportant: 'Профессиональные черновые работы — это фундамент, на котором держится весь ремонт. Ошибки здесь приводят к трещинам на финише, проблемам с электрикой и протечкам через год-два.',
      icon: '🏗️'
    },
    {
      id: 2,
      badge: 'Этап 2',
      title: 'Чистовая отделка',
      description: 'Многослойная шпаклёвка, покраска, поклейка обоев, монтаж дверей, плинтусов и декоративных элементов.',
      whyImportant: 'Чистовая отделка — это то, что вы видите каждый день. Мы доводим поверхности до идеального состояния, чтобы не было видно стыков, неровностей и «волн».',
      icon: '✨'
    },
    
      {
      id: 3,
      badge: 'Ключевая компетенция',
      title: 'Плиточные работы',
      // Добавили "эпоксидная затирка" в описание:
      description: 'Укладка плитки и керамогранита крупного формата, запилы под 45°, эпоксидная затирка, идеальные швы, работа со сложной геометрией.',
      whyImportant: 'Неправильная укладка плитки – самая частая причина, почему она отваливается или трескается.',
      icon: '📐'
    },
    {
      id: 4,
      badge: 'Ключевая компетенция',
      title: 'Напольные покрытия',
      description: 'Беспороговая укладка ламината и кварцвинила в едином контуре по всей квартире с соблюдением компенсационных зазоров.',
      whyImportant: 'Неправильная укладка ламината приводит к вздутию, скрипу и появлению щелей. Мы делаем так, чтобы пол выглядел как единое полотно и служил без проблем много лет.',
      icon: '🪵'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Что именно мы делаем и <span className="text-amber-500">почему это важно</span> делать профессионально
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Каждый этап ремонта выполняется узкопрофильными мастерами под техническим надзором. Никаких «универсалов», которые и шьют, и поют.
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="group bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Верхняя плашка и иконка */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    service.id > 2 
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                      : 'bg-slate-800 text-gray-400'
                  }`}>
                    {service.badge}
                  </span>
                  <span className="text-3xl bg-slate-900 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-800">
                    {service.icon}
                  </span>
                </div>

                {/* Название услуги */}
                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Описание */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Блок важности */}
              <div className="bg-slate-950/60 border-l-2 border-amber-500 p-4 rounded-r-xl">
                <span className="block text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">
                  В чем опасность ошибок:
                </span>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {service.whyImportant}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}