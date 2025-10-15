'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      {/* Основные блоки */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Левая колонка: О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">Печной Мастер</h3>
            <p className="text-gray-500 mb-6">
              Профессиональный монтаж печей, каминов и дымоходов в Самаре. Гарантия на работы. Индивидуальный подход.
            </p>

          </div>

          {/* Центральная колонка: Навигация */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link href="#about" className="hover:text-amber-700 transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-700 transition">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-amber-700 transition">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-amber-700 transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Правая колонка: Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-500">
              <li>📞 +79198055747</li>
              <li>📍 Г. Самара, ТЦ Интермебель, Московское шоссе 16 километр, 1в ст2, 2 этаж</li>
              <li>✉️ info@masterkaminoff.ru</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Печной Мастер. Все права защищены.
        </div>
      </div>
    </footer>
  );
}