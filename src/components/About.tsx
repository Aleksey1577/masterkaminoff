"use client";

import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      title: "Официальный договор с прозрачной сметой",
      description: "Мы предоставляем полный пакет документов, включая детальную смету без скрытых платежей. Это гарантирует полную прозрачность на всех этапах сотрудничества."
    },
    {
      title: "Опытные мастера со стажем более 15 лет",
      description: "Наша команда состоит из сертифицированных специалистов с общим стажем свыше 15 лет. Мы прошли тысячи проектов, от простых установок до сложных инженерных решений."
    },
    {
      title: "Гарантия на работы до 5 лет",
      description: "Мы уверены в качестве и даем гарантию до 5 лет на все монтажные работы. В случае любых вопросов — бесплатный выезд и устранение неисправностей."
    },
    {
      title: "Технический надзор на каждом объекте",
      description: "Профессиональный контроль на всех этапах: от замера до приемки. Это обеспечивает соответствие работ нормам безопасности и вашим ожиданиям."
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      {/* Номер раздела */}
      <div className="container mx-auto px-4 mb-12 flex gap-4 items-center">
        <span className="text-xl font-bold text-amber-500">01</span>
        <hr className="border-t border-amber-500 w-full" />
      </div>
      {/* Заголовок и преимущества */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">

        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6">О НАС</h2>
          <p className="text-lg mb-6">
            Мастер Каминофф — это команда профессионалов с более чем 15-летним опытом в монтаже печей, каминов и дымоходов в Самаре и Самарской области. Мы начали свой путь в 2008 году, когда основатель компании, мастер с дипломом инженера-теплотехника, решил создать сервис, где каждый проект — это не просто работа, а настоящее искусство создания уюта в вашем доме.
          </p>
          <p className="text-lg mb-12 text-gray-600">
            Наша миссия — сделать отопление безопасным, эффективным и эстетичным. Мы используем только сертифицированные материалы от ведущих производителей (например, Schiedel, Attika), соблюдаем все нормативы ГОСТ и СНиП, и предлагаем полный цикл: от бесплатного замера и расчета до установки и гарантийного обслуживания. За годы работы мы реализовали более 500 проектов — от компактных квартирных каминов до сложных систем дымоходов в загородных коттеджах. Клиенты ценят нас за честность, пунктуальность и внимание к деталям.
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-amber-50 border border-amber-200 p-6 rounded-lg shadow-md"
              style={{
                borderRadius: "0 50px 0 50px", // Закругляем только верхний левый и нижний правый углы
              }}
            >
              <h3 className="text-xl font-bold text-amber-700 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}