'use client';

import Image from 'next/image';
import { useCallback } from 'react';

export default function Hero() {
  const scrollToContacts = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      // Кастомный плавный скролл с медленной скоростью
      const start = window.pageYOffset;
      const target = contactsSection.getBoundingClientRect().top + start;
      const duration = 2000; // 2 секунды для медленного скролла (увеличь для ещё медленнее)
      const startTime = performance.now();

      const scrollStep = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeProgress = easeInOutQuad(progress); // Функция easing для плавности
        window.scrollTo(0, start + (target - start) * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      };

      requestAnimationFrame(scrollStep);
    }
  }, []);

  // Функция easing для более естественного скролла (ease-in-out)
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return (
    <section className="bg-white text-gray-900">
      {/* Верхняя панель */}
      <div className="container mx-auto px-4 py-20 flex flex-col items-center gap-6 text-center">
        {/* Заголовок */}
        <div>
          <h1 className="text-3xl md:text-[70px] font-bold leading-tight mb-4">
            ПРОФЕССИОНАЛЬНЫЙ МОНТАЖ
          </h1>
          <p className="text-lg md:text-3xl font-medium mb-8">ПЕЧЕЙ · КАМИНОВ · ДЫМОХОДОВ</p>
        </div>

        {/* Кнопка и текст */}
        <div className="flex flex-col items-center space-y-4 max-w-xs">
          <p className="text-sm font-medium text-gray-500">
            Оставьте заявку и наши специалисты свяжутся с Вами для консультации
          </p>
          <a
            href="#contacts"
            onClick={scrollToContacts}
            className="bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-full transition inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Заказать консультацию</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 22a10 10 0 010-20 10 10 0 010 20zm0-2a8 8 0 000-16 8 8 0 000 16zm0-9a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Изображение дома */}
      <div className="relative mt-10">
        <div className="relative w-full h-[300px] md:h-[600px]">
          <Image
            src="/images/hero.jpg"
            alt="Геройское изображение"
            fill
            priority
            className="object-cover shadow-lg"
            style={{
              borderRadius: '250px 0 250px 0',
            }}
          />
        </div>
      </div>

      {/* Цитата */}
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-2xl md:text-3xl font-bold italic text-gray-800">
          Только качественный результат для тех, кто любит и ценит качество
        </p>
      </div>
    </section>
  );
}