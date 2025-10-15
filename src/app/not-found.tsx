'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Автоматический редирект на главную через 8 секунд
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Номер "ошибки" в стиле сайта */}
        <div className="mb-12 flex justify-center items-center gap-4">
          <span className="text-4xl font-bold text-amber-500">404</span>
          <hr className="border-t border-amber-500 w-32" />
        </div>

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Страница не найдена
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            К сожалению, запрашиваемая страница не существует. Возможно, вы ввели неверный адрес или страница была удалена.
          </p>
          <p className="text-sm text-gray-500 mb-8 italic">
            Вы будете перенаправлены на главную страницу через 5 секунд...
          </p>

          {/* Кнопка возврата */}
          <Link
            href="/"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition whitespace-nowrap"
          >
            Вернуться на главную
          </Link>
        </motion.div>
      </div>
    </section>
  );
}