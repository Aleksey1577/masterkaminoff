"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.querySelector('.card') as HTMLElement | null;
      const cardWidth = cardElement?.offsetWidth || 0;
      scrollRef.current.scrollBy({ left: -cardWidth - 16, behavior: 'smooth' }); // 16 = gap
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.querySelector('.card') as HTMLElement | null;
      const cardWidth = cardElement?.offsetWidth || 0;
      scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-amber-500 whitespace-nowrap">03</span>
          <hr className="flex-1 border-t border-amber-500 min-w-0" />
        </div>
      </div>

      <div className="container mx-auto px-4 mb-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-4">НАШИ РАБОТЫ</h2>
          <p className="text-lg text-gray-600">
            Мы специализируемся на монтаже печей, каминов и дымоходов. Ниже вы
            можете ознакомиться с нашими выполненными проектами.
          </p>
        </div>
      </div>

      {/* Мобильная версия: карусель с градиентом для подсказки */}
      <div className="md:hidden relative">
        <div className="overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory rounded-lg" ref={scrollRef}>
          <div className="flex gap-4 pr-4">
            {[
              {
                title: "Дымоход",
                desc: "Пример установки дымохода в загородном доме. Работа выполнена с использованием сертифицированных материалов Schiedel для обеспечения максимальной безопасности и долговечности системы.",
                img: "/work/work1.jpg",
                alt: "установка дымохода",
              },
              {
                title: "Угловая топка",
                desc: "Угловая топка в загородном доме. Монтаж выполнен квалифицированными специалистами с учетом всех норм СНиП и индивидуальных особенностей интерьера.",
                img: "/work/work2.jpg",
                alt: "монтаж угловой топки",
              },
              {
                title: "Печь-камин",
                desc: "Установка печи-камина и подключение к дымоходу в загородном доме. Проект включал полный цикл от бесплатного замера до сдачи объекта под ключ с гарантией 5 лет.",
                img: "/work/work10.jpg",
                alt: "монтаж печь-камин",
              },
              {
                title: "Дымоход",
                desc: "Пример установки дымохода в загородном доме. Работа выполнена с использованием сертифицированных материалов Schiedel для обеспечения максимальной безопасности и долговечности системы.",
                img: "/work/work1.jpg",
                alt: "установка дымохода",
              },
              {
                title: "Угловая топка",
                desc: "Угловая топка в загородном доме. Монтаж выполнен квалифицированными специалистами с учетом всех норм СНиП и индивидуальных особенностей интерьера.",
                img: "/work/work2.jpg",
                alt: "монтаж угловой топки",
              },
              {
                title: "Печь-камин",
                desc: "Установка печи-камина и подключение к дымоходу в загородном доме. Проект включал полный цикл от бесплатного замера до сдачи объекта под ключ с гарантией 5 лет.",
                img: "/work/work10.jpg",
                alt: "монтаж печь-камин",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-[85vw] max-w-sm snap-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden card"
              >
                <div className="relative h-64">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Градиент справа для подсказки "есть больше" */}
        <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-white pointer-events-none" />
      </div>

      {/* Десктоп версия: карусель с стрелками */}
      <div className="hidden md:block relative">
        <div className="overflow-x-auto pb-4 scrollbar-hide" ref={scrollRef}>
          <div className="flex gap-4">
            {[
              {
                title: "Топка",
                desc: "Профессиональная установка топки в современном интерьере. Мы обеспечили идеальную интеграцию с существующей системой дымохода, используя высококачественные материалы для максимальной эффективности и эстетики.",
                img: "/work/work1.jpg",
                alt: "установка топки",
              },
              {
                title: "Угловая топка",
                desc: "Угловая топка в загородном доме. Монтаж выполнен квалифицированными специалистами с учетом всех норм СНиП и индивидуальных особенностей интерьера.",
                img: "/work/work2.jpg",
                alt: "монтаж угловой топки",
              },
              {
                title: "Топка фронтальная",
                desc: "Фронтальная топка для открытого камина. Полный монтаж с учетом эргономики и дизайна, включая подключение к дымоходу и тестирование на безопасность.",
                img: "/work/work3.jpg",
                alt: "монтаж фронтальной топки",
              },
              {
                title: "Биокамин",
                desc: "Установка биокамина без дымохода в городской квартире. Экологичное решение с использованием биоэтанола, без необходимости в традиционных системах отвода дыма.",
                img: "/work/work4.jpg",
                alt: "установка биокамина",
              },
              {
                title: "Угловая топка",
                desc: "Компактная угловая топка для ограниченного пространства. Монтаж с оптимизацией углов установки, полная изоляция и интеграция с интерьером для гармоничного вида.",
                img: "/work/work5.jpg",
                alt: "монтаж угловой топки",
              },
              {
                title: "Печь-камин",
                desc: "Установка печи-камина и подключение к дымоходу в загородном доме. Проект включал полный цикл от бесплатного замера до сдачи объекта под ключ с гарантией 5 лет.",
                img: "/work/work6.jpg",
                alt: "монтаж печь-камин",
              },
              {
                title: "Печь-камин с дымоходом",
                desc: "Комплексная установка печи-камина с новым дымоходом Schiedel. Обеспечили герметичность, безопасность и эстетичную отделку, с гарантией на все элементы системы.",
                img: "/work/work7.jpg",
                alt: "монтаж печи-камина с дымоходом",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-1/3 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden card"
              >
                <div className="relative h-64">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Стрелки навигации для десктопа */}
        <button
          onClick={scrollLeft}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all z-10"
          aria-label="Предыдущая карточка"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all z-10"
          aria-label="Следующая карточка"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}