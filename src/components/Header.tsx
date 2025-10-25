"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    let prevScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > prevScroll && currentScroll > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      prevScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const start = window.pageYOffset;
      const target = section.getBoundingClientRect().top + start;
      const duration = 3000;
      const startTime = performance.now();

      const scrollStep = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeProgress = easeInOutQuad(progress);
        window.scrollTo(0, start + (target - start) * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      };

      requestAnimationFrame(scrollStep);
    }
    setMenuOpen(false);
  }, []);

  const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white text-gray-900 px-4 py-4 flex items-center justify-between shadow-md transition-transform duration-300 ${isScrolledDown ? ' -translate-y-full' : 'translate-y-0'}`}>
      <div className="text-2xl font-bold">Master Kaminoff</div>

      <nav className="hidden md:flex justify-center flex-1 space-x-8 text-lg font-medium">
        <Link href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-amber-700 transition cursor-pointer">О нас</Link>
        <Link href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-amber-700 transition cursor-pointer">Услуги</Link>
        <Link href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-amber-700 transition cursor-pointer">Портфолио</Link>
        <Link href="#steps" onClick={(e) => scrollToSection(e, 'steps')} className="hover:text-amber-700 transition cursor-pointer">Этапы работ</Link>
        <Link href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')} className="hover:text-amber-700 transition cursor-pointer">Контакты</Link>
      </nav>

      <button 
        onClick={(e) => scrollToSection(e, 'contacts')}
        className="hidden md:block bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition whitespace-nowrap"
      >
        ЗАКАЗАТЬ ЗВОНОК
      </button>

      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
      >
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {menuOpen && (
        <nav className="fixed inset-x-0 top-full bg-white text-gray-900 shadow-md py-4 z-40 md:hidden">
          <ul className="flex flex-col items-center space-y-6 px-4">
            <li><Link href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-amber-700 transition">О нас</Link></li>
            <li><Link href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-amber-700 transition">Услуги</Link></li>
            <li><Link href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-amber-700 transition">Портфолио</Link></li>
            <li><Link href="#steps" onClick={(e) => scrollToSection(e, 'steps')} className="hover:text-amber-700 transition">Этапы работ</Link></li>
            <li><Link href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')} className="hover:text-amber-700 transition">Контакты</Link></li>
            <li>
              <button onClick={(e) => scrollToSection(e, 'contacts')} className="bg-amber-700 text-white w-full px-6 py-2 rounded-full hover:bg-amber-800 transition">
                ЗАКАЗАТЬ ЗВОНОК
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}