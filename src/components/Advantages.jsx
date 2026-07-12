import React from 'react';

export default function Advantages() {
  const advantagesList = [
    {
      id: 1,
      title: 'Фиксированная цена',
      description: 'Вся стоимость ремонта прописывается в договоре до начала работ. Любые изменения — только по вашему письменному согласию. Никаких внезапных доплат.',
      icon: '📜',
      highlight: 'Цена без сюрпризов'
    },
    {
      id: 2,
      title: 'Поэтапная оплата',
      description: 'Вы не платите всю сумму сразу. Мы делим оплату на понятные части: 30% при старте, 40% после завершения черновых работ и 30% только после финальной приёмки.',
      icon: '💳',
      highlight: '30% / 40% / 30%'
    },
    {
      id: 3,
      title: 'Контроль качества',
      description: 'Приёмка каждого скрытого и видимого этапа работ проходит с обязательной фото- и видеофиксацией. Вы будете точно видеть и знать, за что платите.',
      icon: '📱',
      highlight: 'Фото и видео отчеты'
    },
    {
      id: 4,
      title: 'Гарантия 3 года',
      description: 'Официальная гарантия на все виды отделки. На плитку и ламинат у нас особый контроль. Если что-то случится по нашей вине — приедем и исправим бесплатно.',
      icon: '🛡️',
      highlight: 'Закреплено юридически'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Почему с нами <span className="text-amber-500">можно не бояться</span> ремонта
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Мы убрали все классические риски и страхи заказчиков, сделав процесс максимально прозрачным и безопасным.
          </p>
        </div>

        {/* Сетка преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantagesList.map((adv) => (
            <div 
              key={adv.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/30"
            >
              <div>
                {/* Иконка и мини-тег */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl bg-slate-950 w-10 h-10 rounded-xl flex items-center justify-center border border-slate-800">
                    {adv.icon}
                  </span>
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2 py-1 rounded">
                    {adv.highlight}
                  </span>
                </div>

                {/* Заголовок */}
                <h3 className="text-lg font-bold tracking-tight text-white mb-3">
                  {adv.title}
                </h3>

                {/* Описание */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}