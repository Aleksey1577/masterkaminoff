'use client';

import Link from 'next/link';

export default function Partnership() {
  return (
    <section className="bg-amber-700 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Текст слева */}
        <div className="md:w-3/5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Хотите купить камин?
          </h2>
          <p className="text-lg mb-6">
            Посетите наш сайт-партнёр с широким ассортиментом:
            дровяные и газовые камины, отопительные печи, биокамины, электрокамины.
          </p>
        </div>

        {/* Кнопка справа */}
        <div className="md:w-2/5 text-center md:text-right">
          <Link
            href="https://d-kaminov.com "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Перейти на сайт партнёра
          </Link>
        </div>
      </div>
    </section>
  );
}