import React from 'react';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Services from './components/Services';
import Advantages from './components/Advantages';
import FAQ from './components/FAQ';
import Footer from './components/Footer'; // Строго с заглавной буквы!
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 antialiased selection:bg-amber-500 selection:text-slate-900">
      {/* Главный экран */}
      <Hero />
      
      {/* Калькулятор стоимости плавно всплывает */}
      <ScrollReveal>
        <Quiz />
      </ScrollReveal>

      {/* Блок услуг */}
      <ScrollReveal>
        <Services />
      </ScrollReveal>

      {/* Блок преимуществ */}
      <ScrollReveal>
        <Advantages />
      </ScrollReveal>

      {/* Блок вопросов и ответов */}
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
}

export default App;