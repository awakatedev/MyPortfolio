import '../assets/styles/components/Menu.scss';
import { useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';

const Menu = () => {
  const [menu, setMenu] = useState('');

  const handleMenu = () => {
    if (menu === '') {
      setMenu('active');
    } else {
      setMenu('');
    }
  };

  return (
    <button
      className={`menu ${menu}`}
      onClick={() => {
        handleMenu();
      }}
    >
      <Icon icon="mdi-light:chevron-right" />
    </button>
  );
};
export default Menu;
