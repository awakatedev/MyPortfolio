import '../assets/styles/components/Footer.scss';
import { Icon, InlineIcon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <Icon icon="noto:avocado" />
        <span>Awakate.dev</span>
      </div>
    </footer>
  );
};
export default Footer;
