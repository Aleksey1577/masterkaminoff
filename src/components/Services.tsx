'use client';

import Image from 'next/image';
import { useCallback } from 'react';

export default function Services() {
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
    <section id="services" className="bg-white py-20">
      {/* Номер раздела и линия */}
      <div className="container mx-auto px-4 mb-12 flex justify-start items-center gap-4">
        <span className="text-xl font-bold text-amber-500">02</span>
        <hr className="border-t border-amber-500 w-full" /> {/* Убрал mt-2 для выравнивания */}
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Левая колонка: Заголовок */}
        <div className="md:w-1/2">
          {/* Заголовок */}
          <h2 className="text-5xl font-bold mb-6">НАШИ УСЛУГИ</h2>

          {/* Описание услуг */}
          <p className="text-lg mb-12">
            Наша бригада опытных мастеров специализируется на монтаже печей, каминов и дымоходов любого типа. Мы предлагаем полный цикл услуг: от подбора подходящих моделей до их доставки и профессионального монтажа, гарантируя высокое качество, безопасность и скорость выполнения работ.
          </p>
        </div>

        {/* Правая колонка: Кнопка */}
        <div className="md:w-1/2 text-right">
          <p className="text-sm font-medium text-gray-500 mb-4">
            Оставьте заявку и наши специалисты свяжутся с Вами для консультации
          </p>
          <a
            href="#contacts"
            onClick={scrollToContacts}
            className="bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-full transition inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Заказать консультацию</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Блоки с изображениями и описанием */}
      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Блок 1 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/service1.svg"
            alt="Услуга 1"
            width={100}
            height={100}
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Монтаж каминов и дымоходов</h3>
          <p className="text-base">
            Мы обеспечиваем профессиональный монтаж каминов и дымоходов, начиная от оценки объекта и заканчивая установкой, чтобы гарантировать безопасность и эффективность системы отопления.
          </p>
        </div>

        {/* Блок 2 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/service2.svg"
            alt="Услуга 2"
            width={100}
            height={100}
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Подбор каминов</h3>
          <p className="text-base">
            Наши специалисты помогут подобрать идеальную модель камина, учитывая ваши предпочтения, дизайн интерьера и технические требования, для бесшовной интеграции с последующим монтажом.
          </p>
        </div>

        {/* Блок 3 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/service3.svg"
            alt="Услуга 3"
            width={100}
            height={100}
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Доставка</h3>
          <p className="text-base">
            Мы организуем быструю и надежную доставку выбранных каминов, дымоходов и всех необходимых материалов прямо на объект, обеспечивая своевременное начало монтажных работ.
          </p>
        </div>
      </div>
    </section>
  );
}