import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Анимируем только один раз при первом скролле
        }
      },
      { 
        threshold: 0.1, // Сработает, когда блок покажется на 10%
        rootMargin: '0px 0px -50px 0px' // Срабатывает чуть заранее для плавности
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
}