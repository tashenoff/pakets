import React from "react";
import Button from "./Button";
import Link from "next/link";


const InstagramSection = () => {
    const images = [
        "/inst-1.png", // Замените пути на свои изображения
        "/inst-2.png",
        "/inst-3.png",
    ];

    return (
        <section className="py-8 bg-blue-500 bg-gradient-to-b from-blue-500 to-white via-blue-500 text-base-content">
            <div className="container">
                <div className="flex justify-between w-full items-center py-5 ">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>


                        <h2 className="text-center ml-5 text-2xl text-white font-bold">Наш Instagram</h2>
                    </div>
                    <Link className="border border-white px-5 py-2 text-white rounded-lg" href="/" passHref>
                          Посмотреть все
                       
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={src}
                                alt={`Instagram image ${index + 1}`}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default InstagramSection;
