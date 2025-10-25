'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Мастер каминофф</h3>
            <p className="text-gray-500 mb-6">
              Профессиональный монтаж печей, каминов и дымоходов в Самаре. Гарантия на работы. Индивидуальный подход.
            </p>
          </div>

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

          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="tel:+79179535850" className="hover:text-amber-700 transition">
                  📞 +79179535850
                </a>
              </li>
              <li className="break-words">📍 Г. Самара, ТЦ Интермебель, Московское шоссе 16 километр, 1в ст2, 2 этаж</li>
              <li>
                <a href="mailto:info@masterkaminoff.ru" className="hover:text-amber-700 transition">
                  ✉️ info@masterkaminoff.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Master kaminoff. Все права защищены.
        </div>
      </div>
    </footer>
  );
}