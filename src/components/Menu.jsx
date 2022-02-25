import '../assets/styles/components/Menu.scss';
import { useState } from 'react';
//import {createContext} from 'react';
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
        const content = document.querySelector('main');
        const header = document.querySelector('.header');
        if (menu === '') {
          content.classList.add('space');
          header.classList.add('active');
        } else {
          content.classList.remove('space');
          header.classList.remove('active');
        }
      }}
    >
      {menu === '' ? (
        <Icon icon="mdi-light:chevron-right" />
      ) : (
        <Icon icon="mdi-light:chevron-left" />
      )}
    </button>
  );
};

/*const statusLayout = createContext();

const statusProvider = ({children}) => {
return(
  <statusLayout.provider>
    {children}
    </statusLayout.provider>
  )
}*/

export default Menu;
//export default statusProvider;
