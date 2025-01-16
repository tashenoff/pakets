// src/components/Footer.js
import SocialShare from "./SocialShare";
const Footer = () => {
    return (
        <div className="bg-blue-500 text-white ">
            <div className="container">
                <div className=' flex justify-between items-center py-5 px-10'>
                    По всем вопросам: 8(701)789-65-56
                    <div className='flex items-center'>
                        <div className='mr-2'>
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
