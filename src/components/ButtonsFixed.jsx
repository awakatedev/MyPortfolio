import '../assets/styles/components/ButtonsFixed.scss';
import { Icon, InlineIcon } from '@iconify/react';
const ButtonsFixed = () => {
  return (
    <section className="buttonsFixed">
      <button>CV</button>
      <button>
        <Icon icon="akar-icons:github-fill" />
      </button>
    </section>
  );
};
export default ButtonsFixed;
