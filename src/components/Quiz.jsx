import React, { useState } from 'react';

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState('');
  const [housingType, setHousingType] = useState('');
  const [condition, setCondition] = useState('');
  const [tilesNeeded, setTilesNeeded] = useState('');
  const [flooring, setFlooring] = useState('');
  const [contact, setContact] = useState('');
  const [timeline, setTimeline] = useState('');

  // Новые состояния для экрана ожидания
  const [isCalculating, setIsCalculating] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 7;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Имитация этапов инженерного расчета
  const runCalculationAnimation = () => {
    setIsCalculating(true);
    
    const statuses = [
      '📐 Анализируем общую площадь и геометрию комнат...',
      '🧱 Подбираем клеевые составы под формат плитки...',
      '🪵 Расчитываем компенсационные зазоры для единого контура ламината...',
      '📅 Проверяем график свободных дат ведущего замерщика...',
      '🎁 Фиксируем вашу персональную скидку 5% и чек-лист...'
    ];

    statuses.forEach((text, index) => {
      setTimeout(() => {
        setLoadingText(text);
        if (index === statuses.length - 1) {
          setTimeout(() => {
            setIsCalculating(false);
            setIsSubmitted(true);
          }, 1500);
        }
      }, index * 1200); // Каждый статус горит чуть больше секунды
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Запускаем красивую анимацию ожидания расчета
    runCalculationAnimation();

    // Твоя ссылка из Google Apps Script (которую ты только что скопировал):
    const googleAppUrl = "https://script.google.com/macros/s/AKfycbw1hchv_6TEuNtPsIsnAW6S0m_N9hxfmU52VZIo0RXr6XDMxSg0Ma1iJv7P8OPEx4ly_A/exec";

    try {
      await fetch(googleAppUrl, {
        method: 'POST',
        mode: 'no-cors', // Важно для обхода политики CORS в Google
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          area,
          housingType,
          timeline,
          condition,
          tilesNeeded,
          flooring,
          contact
        })
      });
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <section id="quiz-section" className="py-20 bg-slate-950 border-t border-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Узнайте стоимость ремонта <span className="text-amber-500">за 60 секунд</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Ответьте на 7 коротких вопросов — получите предварительную смету с учётом площади, типа работ и ваших пожеланий по плитке и ламинату.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-center">
          
          {/* 1. ЭКРАН ИНЖЕНЕРНОГО РАСЧЕТА (ЛОАДЕР) */}
          {isCalculating && (
            <div className="text-center space-y-6 py-8 animate-fade-in">
              {/* Крутящийся футуристичный лоадер */}
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-amber-500 border-r-amber-500 rounded-full animate-spin"></div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-amber-500 uppercase tracking-wider animate-pulse">
                  Идет математический просчет
                </h4>
                <p className="text-sm text-gray-400 max-w-md mx-auto h-12 transition-all duration-300">
                  {loadingText}
                </p>
              </div>
            </div>
          )}

          {/* 2. ОСНОВНОЙ ЭКРАН ОПРОСНИКА */}
          {!isCalculating && !isSubmitted && (
            <>
              <div className="w-full bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
                <div 
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                ></div>
              </div>

              <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
                Шаг {step} из {totalSteps}
              </div>

              {step === 1 && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Какая общая площадь квартиры?</h3>
                  <div className="relative max-w-xs">
                    <input 
                      type="text" 
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={area}
                      onChange={(e) => setArea(e.target.value.replace(/\D/g, ''))}
                      placeholder="Например, 65" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 font-bold text-lg"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold pointer-events-none">м²</span>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Это новостройка или вторичное жильё?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Новостройка', 'Вторичка'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => { setHousingType(type); nextStep(); }}
                        className={`p-5 rounded-xl border text-left font-bold transition ${housingType === type ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

{step === 3 && (
  <div>
    <h3 className="text-xl font-bold mb-6 text-white">Когда планируете начать ремонт и в какие сроки нужно уложиться?</h3>
    <div className="grid grid-cols-1 gap-4">
      {[
        'Срочно (в ближайшие дни), нужно сдать как можно быстрее',
        'В течение 2-3 недель, старт в плановом режиме',
        'Через месяц или позже, планирую заранее',
        'Пока точных сроков нет, просто прицениваюсь'
      ].map((time) => (
        <button
          key={time}
          type="button"
          onClick={() => {
            setTimeline(time); // Запоминаем срок
            nextStep();        // Переходим дальше
          }}
          className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-left text-white hover:border-amber-500 transition-all text-sm sm:text-base font-medium"
        >
          {time}
        </button>
      ))}
    </div>
  </div>
)}

              {step === 4 && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Текущее состояние помещения?</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {['Черновая отделка', 'Требуется демонтаж', 'Полностью голые стены'].map((cond) => (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => { setCondition(cond); nextStep(); }}
                        className={`p-5 rounded-xl border text-left font-bold transition ${condition === cond ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'}`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Нужна ли укладка плитки в санузлах и/или на кухне?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Да, обязательна плитка крупного формата', 'Нет, стандартная отделка / не требуется'].map((tile) => (
                      <button
                        key={tile}
                        type="button"
                        onClick={() => { setTilesNeeded(tile); nextStep(); }}
                        className={`p-5 rounded-xl border text-left font-bold transition ${tilesNeeded === tile ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'}`}
                      >
                        {tile}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 6 && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Какое напольное покрытие планируете?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Ламинат в единый контур', 'Кварцвинил', 'Паркетная доска', 'Плитка / Керамогранитная зона'].map((floor) => (
                      <button
                        key={floor}
                        type="button"
                        onClick={() => { flooring === floor ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-800 bg-slate-950/40 hover:border-slate-700' }}
                        onClick={() => { setFlooring(floor); nextStep(); }}
                        className={`p-5 rounded-xl border text-left font-bold transition ${flooring === floor ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'}`}
                      >
                        {floor}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 7 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-amber-500 mb-2">Расчет готов!</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Оставьте ваш номер телефона или Telegram. Мы пришлем персональную смету с разбивкой по этапам работ, зафиксируем за вами бесплатный выезд замерщика и скидку 5%.
                    </p>
                    <input 
                      type="text" 
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="+375 (00) 000-00-00 или @username" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 font-bold"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg font-black py-4 rounded-xl transition shadow-xl shadow-amber-500/10"
                  >
                    Получить смету и бонусы
                  </button>
                </form>
              )}

              {step < 7 && (
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-800/60">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`text-sm font-bold flex items-center gap-1 transition ${step === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white'}`}
                  >
                    ← Назад
                  </button>
                  {step === 1 && (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!area}
                      className={`px-6 py-2.5 rounded-lg font-bold text-sm transition ${!area ? 'bg-slate-800 text-gray-500 cursor-not-allowed' : 'bg-amber-500 text-slate-900 hover:bg-amber-600'}`}
                    >
                      Далее →
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {/* 3. ЭКРАН УСПЕШНОЙ ОТПРАВКИ */}
          {isSubmitted && !isCalculating && (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full flex items-center justify-center text-3xl mx-auto">
                ✓
              </div>
              <h3 className="text-2xl font-black">Спасибо, расчет завершен!</h3>
              <p className="text-gray-400 max-w-md mx-auto text-sm">
                Инженерная калькуляция для площади <span className="text-white font-bold">{area} м²</span> успешно сформирована. Смета и чек-лист уже отправляются в созданную группу Telegram. Отлично! Мы получили ваши ответы. Наш технолог уже делает предварительный расчет сметы по вашим параметрам и свяжется с вами в ближайшее время.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}