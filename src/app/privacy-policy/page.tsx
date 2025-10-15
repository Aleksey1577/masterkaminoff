export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-20 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Номер раздела (для стиля сайта) */}
      <div className="mb-12 flex justify-start items-center gap-4">
        <span className="text-xl font-bold text-amber-500">POL</span>
        <hr className="border-t border-amber-500 w-full" />
      </div>

      <h1 className="text-5xl font-bold mb-6 text-gray-900">Политика конфиденциальности</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">1. Общие положения</h2>
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Настоящая Политика конфиденциальности (далее — «Политика») разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ООО «Мастер Каминофф» (далее — «Компания», «Мы», «Наш»).
          </p>
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Политика применяется к обработке персональных данных, осуществляемой как в автоматизированных, так и в неавтоматизированных системах в соответствии с законодательством Российской Федерации.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Использование сайта (далее — «Сайт») означает безоговорочное согласие пользователя (далее — «Вы», «Пользователь») с настоящей Политикой и указанными в ней условиями обработки его персональных данных.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">2. Принципы обработки персональных данных</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Обработка персональных данных осуществляется на законной и справедливой основе в соответствии с принципами:
          </p>
          <ul className="list-disc list-inside text-base text-gray-600 mt-4 space-y-2">
            <li>Законности, справедливости и прозрачности в отношении субъекта персональных данных;</li>
            <li>Ограничения целей обработки персональных данных только достижимыми целями;</li>
            <li>Соответствия объема и содержания обрабатываемых персональных данных целям их обработки;</li>
            <li>Обеспечения точности, достаточности и актуальности персональных данных;</li>
            <li>Хранения персональных данных не дольше, чем того требуют цели обработки;</li>
            <li>Обеспечения конфиденциальности и безопасности персональных данных.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">3. Сбор и использование персональных данных</h2>
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Мы собираем только те персональные данные, которые необходимы для предоставления услуг на Сайте. К таким данным могут относиться:
          </p>
          <ul className="list-disc list-inside text-base text-gray-600 mb-4 space-y-2">
            <li>Фамилия, имя, отчество;</li>
            <li>Контактный телефон;</li>
            <li>Адрес электронной почты;</li>
            <li>Адрес проживания (для доставки или монтажа);</li>
            <li>Данные о посещении Сайта (IP-адрес, cookies и т.д.).</li>
          </ul>
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Персональные данные используются исключительно для:
          </p>
          <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
            <li>Обработки запросов и заявок на консультацию или монтаж;</li>
            <li>Предоставления информации о услугах, акциях и новостях;</li>
            <li>Улучшения качества услуг и Сайта;</li>
            <li>Обеспечения безопасности и предотвращения мошенничества.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">4. Передача персональных данных третьим лицам</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Мы не передаем персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством РФ (например, по запросу суда). В некоторых случаях данные могут передаваться партнерам для выполнения услуг (например, курьерским службам для доставки), но только с вашего согласия и с обязательством конфиденциальности.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">5. Cookies и аналитика</h2>
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Сайт использует файлы cookies для улучшения пользовательского опыта, анализа трафика и персонализации контента. Cookies — это небольшие файлы, которые сохраняются на вашем устройстве. Вы можете отключить cookies в настройках браузера, но это может повлиять на функциональность Сайта.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Мы используем инструменты аналитики (например, Google Analytics), которые собирают обезличенные данные о посещении Сайта.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">6. Права субъекта персональных данных</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Вы имеете право:
          </p>
          <ul className="list-disc list-inside text-base text-gray-600 mt-4 space-y-2">
            <li>Получать информацию об источнике и целях обработки ваших данных;</li>
            <li>Требовать уточнения, блокировки или уничтожения ваших данных;</li>
            <li>Отзывать согласие на обработку данных;</li>
            <li>Жаловаться в Роскомнадзор в случае нарушений.</li>
          </ul>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">
            Для реализации прав обратитесь по электронной почте: info@master-kaminoff.ru.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">7. Меры по защите персональных данных</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Мы применяем организационные и технические меры для защиты персональных данных: шифрование, firewalls, контроль доступа. Доступ к данным имеют только уполномоченные сотрудники под NDA.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">8. Изменения в Политике</h2>
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Политика может быть изменена в случае изменений в законодательстве или деятельности Компании. Актуальная версия публикуется на Сайте. Продолжение использования Сайта после изменений означает согласие с новой Политикой.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Дата последней редакции: 15 октября 2025 г.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-amber-700">9. Контактная информация</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            По вопросам конфиденциальности обращайтесь: <br />
            ООО «Мастер Каминофф» <br />
            Адрес: г. Самара, ул. Примерная, д. 1 <br />
            Email: info@master-kaminoff.ru <br />
            Телефон: +7 (846) 123-45-67
          </p>
        </section>
      </div>
    </div>
  );
}