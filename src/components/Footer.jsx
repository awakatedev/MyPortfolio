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
        <a href="https://www.linkedin.com/in/jhonathan-saldarriaga-1a9181202">
          {' '}
          <Icon className="socialMedia--icon" icon="akar-icons:linkedin-fill" />
        </a>
        <a href="https://instagram.com/awakate.dev">
          {' '}
          <Icon
            className="socialMedia--icon"
            icon="akar-icons:instagram-fill"
          />
        </a>
        <a href="https://twitter.com/awakatedev?s=09">
          {' '}
          <Icon
            className="socialMedia--icon"
            icon="ant-design:twitter-circle-filled"
          />
        </a>
      </div>
      <div className="rights">
        <i>&copy; Copyright 2022 awakate.dev</i>
      </div>
    </footer>
  );
};
export default Footer;
