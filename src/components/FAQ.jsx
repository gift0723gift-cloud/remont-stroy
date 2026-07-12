import React, { useState } from 'react';

export default function FAQ() {
  // Храним id открытого вопроса. Если null — все закрыты.
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqList = [
    {
      id: 1,
      question: 'А смета не вырастет в процессе работ?',
      answer: 'Нет. В договоре фиксируется полная стоимость ремонта. Если вы сами захотите что-то изменить или добавить — мы считаем доплату и подписываем дополнительное соглашение. Без вашего согласия и подписи цена не изменится ни на рубль.'
    },
    {
      id: 2,
      question: 'Кто покупает материалы? И можно ли сэкономить?',
      answer: 'Вы сами решаете, как удобнее. Вариант 1: мы закупаем всё сами по своим оптовым скидкам у проверенных поставщиков и полностью несём ответственность за качество. Вариант 2: вы покупаете всё сами, а мы даём точный список с артикулами и объёмами. В обоих случаях мы не делаем никаких наценок на материал.'
    },
    {
      id: 3,
      question: 'Какая реальная гарантия? Что будет, если отвалится плитка или вздуется ламинат?',
      answer: 'Мы даём официальную гарантию 3 года на все виды работ. Укладка плитки крупного формата и беспороговый ламинат — наши ключевые компетенции, поэтому за ними следит технадзор. Если в течение гарантийного срока возникнет проблема по нашей вине — мы приезжаем, бесплатно демонтируем, покупаем новый материал и переделываем всё за свой счёт.'
    },
    {
      id: 4,
      question: 'Сколько на самом деле займёт ремонт? И что, если затянете?',
      answer: 'Точные сроки сдачи прописываются в договоре. У нас нет "ремонтов на год" — мастера работают по строгому технологическому графику. За каждый день просрочки по нашей вине вы получаете неустойку в размере 0,5% от стоимости договора. Затягивать ремонт нам просто невыгодно.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-850">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Часто задаваемые <span className="text-amber-500">вопросы</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Отвечаем честно и открыто на то, что обычно замалчивают другие строительные бригады.
          </p>
        </div>

        {/* Список вопросов */}
        <div className="space-y-4">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className="bg-slate-950/50 border border-slate-800 rounded-xl overflow-hidden transition-colors duration-300"
              >
                {/* Кнопка вопроса */}
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold sm:text-lg hover:text-amber-400 transition-colors"
                >
                  <span>{item.question}</span>
                  <span className={`text-xl text-amber-500 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {/* Блок ответа (плавно скрывается/показывается) */}
                <div 
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-slate-800/60' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-gray-400 text-sm sm:text-base leading-relaxed bg-slate-950/20">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}