'use client';

import { motion } from 'framer-motion';

export default function Steps() {
  const steps = [
    {
      number: '01',
      title: 'Заявка и замер',
      description: 'Вы оставляете заявку, наш специалист связывается с вами и проводит замер объекта.'
    },
    {
      number: '02',
      title: 'Расчет стоимости',
      description: 'После замера мы рассчитываем стоимость работ и материалов, отправляем смету.'
    },
    {
      number: '03',
      title: 'Подписание договора и оплата',
      description: 'Оформляем официальный договор с прозрачными условиями и сроками выполнения работ. После подписания договора производите оплату.'
    },
    {
      number: '04',
      title: 'Подготовка материалов',
      description: 'Закупаем материалы, доставляем их на объект и готовим инструменты к работе.'
    },
    {
      number: '05',
      title: 'Выполнение работ',
      description: 'Выполняем монтаж печей, каминов или дымоходов в соответствии с ГОСТ и СНИП.'
    },
    {
      number: '06',
      title: 'Приемка',
      description: 'Вы принимаете работу, проверяете качество, подписываете акт.'
    },
  ];

  return (
    <section id="steps" className="bg-white py-20">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-start items-center gap-4">
          <span className="text-xl font-bold text-amber-500 whitespace-nowrap">04</span>
          <hr className="flex-1 border-t border-amber-500 min-w-0" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">ЭТАПЫ РАБОТ</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Мы соблюдаем строгий порядок выполнения работ, чтобы гарантировать высокое качество и соблюдение сроков.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-200 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-700 text-white text-xl font-bold">
                  {step.number}
                </div>
              </div>

              <div className="w-4 h-4 rounded-full bg-amber-700 relative z-10"></div>

              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}