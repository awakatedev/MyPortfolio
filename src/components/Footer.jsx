import '../assets/styles/components/Footer.scss';
import { Icon, InlineIcon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <Icon icon="noto:avocado" />
        <span>Awakate.dev</span>
      </div>
      <div className="socialMedia">
        <Icon icon="akar-icons:linkedin-fill" />
        <Icon icon="akar-icons:instagram-fill" />
        <Icon icon="ant-design:twitter-circle-filled" />
      </div>
    </footer>
  );
};
export default Footer;
