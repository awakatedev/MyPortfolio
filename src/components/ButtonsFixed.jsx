import '../assets/styles/components/ButtonsFixed.scss';
import { Icon, InlineIcon } from '@iconify/react';

const ButtonsFixed = () => {
  return (
    <section className="buttonsFixed">
      <button className="curriculum btn">CV</button>
      <a className="gitHub btn" href="https://github.com/awakatedev">
        <Icon icon="akar-icons:github-fill" />
      </a>
    </section>
  );
};
export default ButtonsFixed;
