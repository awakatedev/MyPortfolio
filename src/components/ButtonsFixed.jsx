import '../assets/styles/components/ButtonsFixed.scss';
import { Icon, InlineIcon } from '@iconify/react';

const ButtonsFixed = () => {
  return (
    <section className="buttonsFixed">
      <button className="curriculum btn btn__hover">CV</button>
      <a className="gitHub btn btn__hover" href="https://github.com/awakatedev">
        <Icon icon="akar-icons:github-fill" />
      </a>
    </section>
  );
};
export default ButtonsFixed;
