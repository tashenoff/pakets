import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CheckCircleIcon } from "@heroicons/react/24/solid";


export default function Thanks() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md"
            >
                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-800">Спасибо за ваш заказ!</h1>
                <p className="text-gray-600 mt-2">Мы свяжемся с вами в ближайшее время для подтверждения.</p>

                <button
                    onClick={() => router.push("/")}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Вернуться на главную
                </button>
            </motion.div>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}
