import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'next-share';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Импортируем иконки из react-icons

const SocialShare = () => {
  const url = "https://paketi.kz";

  return (
    <div className="flex ml-5 gap-4">
      <FacebookShareButton url={url}>
        <FaFacebook size={22} className="text-white" />
      </FacebookShareButton>

      <TwitterShareButton url={url}>
        <FaTwitter size={22} className="text-white" />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <FaLinkedin size={22} className="text-white" />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
