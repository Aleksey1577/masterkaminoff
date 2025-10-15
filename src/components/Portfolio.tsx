"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20">
      {/* Номер раздела и линия */}
      <div className="container mx-auto px-4 mb-12 flex gap-4 items-center">
        <span className="text-xl font-bold text-amber-500">03</span>
        <hr className="border-t border-amber-500 w-full" />
      </div>

      {/* Заголовок и описание — теперь слева */}
      <div className="container mx-auto px-4 mb-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-4">НАШИ РАБОТЫ</h2>
          <p className="text-lg text-gray-600">
            Мы специализируемся на монтаже печей, каминов и дымоходов. Ниже вы
            можете ознакомиться с нашими выполненными проектами.
          </p>
        </div>
      </div>

      {/* Проекты */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
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
        ].map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
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
              <p className="text-gray-600">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}