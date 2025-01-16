import Banner from "../components/Banner";
import { InboxIcon, PhoneIcon, MapIcon, CubeIcon } from '@heroicons/react/24/solid';

export default function Contact() {
    return (
        <>
            <Banner
                backgroundImage="/contact.jpg"
                title="Контакты"
            />

            <div className="container mx-auto px-5">
                <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                        <MapIcon className="h-5 w-5 text-blue-500" />
                        <p>Казахстан, г. Астана, ул. Аксай 11</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-5 w-5 text-blue-500" />
                        <p>тел.: +7 707 040 21 21</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <InboxIcon className="h-5 w-5 text-blue-500" />
                        <p>e-mail: salespaketi@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CubeIcon className="h-5 w-5 text-blue-500" />
                        <p>ИП "Paketikz" ИИН 911122350042</p>
                    </div>
                </div>

                {/* Google Maps iframe */}
                <div className="py-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.937097243477!2d71.43739727640256!3d51.201810732981905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245809675fff1c7%3A0x122fd697fc334ced!2z0YPQuy4g0JDQutGB0LDQuSAxMSwg0JDRgdGC0LDQvdCwIDAxMDAwMA!5e0!3m2!1sru!2skz!4v1736869822527!5m2!1sru!2skz"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
