import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa'; // Импортируем иконку

const faqData = [
    {
        question: "Какие типы пакетов вы предлагаете?",
        answer: "Мы предлагаем пакеты типа 'майка', фасовочные пакеты, Курьерские пакеты, Пакеты зип лок, Пакеты дой пак, Полипропиленовые Бопп пакеты, Вакуумные пакеты, Пакет с клеейкой лентой, Пакет слайдер с бегунком, мешки полиэтиленовые, пакеты с логотипом и прочные пакеты для тяжёлых грузов.",
    },
    {
        question: "Можно ли заказать пакеты с логотипом компании?",
        answer: "Да, мы изготавливаем пакеты с индивидуальным логотипом для вашего бренда. Вы можете выбрать размер, цвет и плотность.",
    },
    {
        question: "Какие материалы используются для производства пакетов?",
        answer: "ПЭ,ПП,Бопп и другие",
    },
    {
        question: "Как быстро производится и доставляется заказ?",
        answer: "Мы обеспечиваем оперативное производство и доставку в кратчайшие сроки. Сроки зависят от объёма и типа заказа.",
    },
    {
        question: "Предлагаете ли вы оптовые скидки?",
        answer: "Да, мы предлагаем выгодные условия и оптовые скидки при крупных заказах.",
    },
];

const Faq = () => {
    return (
        <div className="container mx-auto py-20">
            <h2 className="text-2xl text-blue-500 font-bold mb-4 flex items-center">
                <FaQuestionCircle size={24} className="mr-2" /> {/* Иконка перед заголовком */}
                Часто задаваемые вопросы
            </h2>
            <div className="accordion">
                {faqData.map((item, index) => (
                    <div key={index} className="collapse collapse-arrow bg-blue-500 my-5 text-white">
                        <input type="checkbox" id={`faq-${index}`} className="peer" />
                        <div className="collapse-title font-medium">{item.question}</div>
                        <div className="collapse-content">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
