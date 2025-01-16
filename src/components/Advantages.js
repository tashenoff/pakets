import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { FaUsers, FaClock, FaTrophy, FaMoneyBillWave } from 'react-icons/fa'; // Импортируем иконки

const Advantages = () => {
    const { t } = useTranslation("common"); // Указываем namespace "common"

    const advantages = [
        { value: 1000, label: t("advantages.clients"), icon: <FaUsers size={32} /> },
        { value: 27, label: t("advantages.years"), icon: <FaClock size={32} /> },
        { value: 100, label: t("advantages.quality"), isPercentage: true, icon: <FaTrophy size={32} /> },
        { value: 90, label: t("advantages.cheaper"), isPercentage: true, icon: <FaMoneyBillWave size={32} /> },
    ];

    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    // Наблюдение за блоком
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div ref={sectionRef} className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 bg-base-100 text-base-content">
                {advantages.map((advantage, index) => (
                    <AdvantageCard
                        key={index}
                        value={advantage.value}
                        label={advantage.label}
                        isPercentage={advantage.isPercentage}
                        animate={visible}
                        icon={advantage.icon}
                    />
                ))}
            </div>
        </div>
    );
};

const AdvantageCard = ({ value, label, isPercentage, animate, icon }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (!animate) return;

        let startValue = 0;
        const duration = 2000; // Длительность анимации (мс)
        const increment = value / (duration / 16); // Рассчитываем шаг

        const updateValue = () => {
            startValue += increment;
            if (startValue >= value) {
                setCurrentValue(value);
            } else {
                setCurrentValue(Math.floor(startValue));
                requestAnimationFrame(updateValue);
            }
        };

        updateValue();
    }, [animate, value]);

    return (
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg border border-blue-500/20 ">
            <div className="mb-4 text-blue-500">{icon}</div> {/* Иконка */}
            <span className="text-4xl font-bold text-blue-500 ">
                {currentValue}
                {isPercentage && "%"}
            </span>
            <span className="text-sm font-medium ">{label}</span>
        </div>
    );
};

export default Advantages;
