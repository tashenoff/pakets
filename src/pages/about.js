import Banner from "../components/Banner";
import VideoWithText from "../components/VideoWithText";

export default function About() {

    return (
        <>
            <Banner
                backgroundImage="/about.jpg"
                title='О нас'

            />
            <VideoWithText />

            <div className="container mx-auto px-5 py-20">
                <h1 className="text-2xl text-blue-500 uppercase text-center font-bold">
                    О заводе

                </h1>
                <p className="text-center py-5">
                    Наше производство работает с 1996г  в г.Астана. Мы занимаемся производством различной видов упаковки из полиэтилена
                </p>
                <h1 className="text-2xl font-bold text-center">
                    В ассортимент входят пакеты:

                </h1>
                <ul className="grid lg:grid-cols-4 grid-cols-1">
                    <li className="p-5 flex items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>
                            Пакеты с вырубной ручкой
                        </span>
                    </li>
                    <li className="p-5 flex items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>
                            курьерские пакеты
                        </span>
                    </li>

                    <li className="p-5 flex items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>
                            вакуумные пакеты
                        </span>
                    </li>


                    <li className="p-5 flex items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>
                            зип пакеты разных видов
                        </span>
                    </li>



                </ul>




            </div>

            <Banner
                backgroundImage="/footer.png"
                title='Консультация'
                description=' Наши услуги включают разработку дизайна, утверждение эскиза, доставка, консультация клиента для подбора нужной упаковки'
                buttonText='связаться'
                
            />
        </>
    );
}

