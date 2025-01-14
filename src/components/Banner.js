import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const handleWhatsAppClick = () => {
    const whatsappNumber = "+77017896556"; // Замените на нужный номер
    window.location.href = `https://wa.me/${whatsappNumber}`;
};

const Banner = ({
    backgroundImage,
    title,
    description,
    buttonText,
    onButtonClick,
}) => {
    // Анимация для заголовка
    const textAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div
            className="hero bg-base-200 h-[400px]"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Тонировка фона */}
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
                <div className="container mx-auto">
                    {/* Анимация только для заголовка */}
                    <motion.h1
                        className="text-5xl py-5 font-bold text-shadow"
                        initial="hidden"
                        animate="visible"
                        variants={textAnimation}
                    >
                        {title}
                    </motion.h1>

                    {/* Статичное описание */}
                    {description && <p className="py-6">{description}</p>}

                    {/* Статичная кнопка */}
                    {buttonText && (
                        <button
                            className="btn btn-primary"
                            onClick={handleWhatsAppClick}
                        >
                            {buttonText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    onButtonClick: PropTypes.func,
};

Banner.defaultProps = {
    description: "",
    buttonText: "",
    onButtonClick: () => {},
};

export default Banner;
