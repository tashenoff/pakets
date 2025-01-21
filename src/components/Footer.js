// src/components/Footer.js
import SocialShare from "./SocialShare";
const Footer = () => {
    return (
        <div className="bg-blue-500 text-white ">
            <div className="container">
                <div className=' flex lg:flex-row flex-col justify-between items-center py-5 px-10'>
                    По всем вопросам: +7(707)0402121
                    <div className='flex lg:flex-row flex-col items-center'>
                        <div className='mr-2 my-5 lg:my-0'>
                            Все права защищены © 2025
                        </div>
                        <SocialShare />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
