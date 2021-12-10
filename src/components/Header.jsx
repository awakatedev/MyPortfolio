import '../assets/styles/components/Header.scss';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import navRoutes from './RoutesNav';
import { Icon, InlineIcon } from '@iconify/react';

const Header = () => {
  const [theme, setTheme] = useState(false);

  useEffect = () => {
    const currentTheme = localStorage.getItem('Theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  };

  let themeColor = 'light';
  // document.body.className=(themeColor);
  const handleClick = (themeColor) => {
    setTheme(themeColor);
    localStorage.setItem('Theme', themeColor);
    document.body.className = themeColor;
  };

  let navigationList = navRoutes.map(({ path, name, key, icon }) => (
    <NavLink exact="true" key={key} to={path}>
      <li>
        <Icon icon={icon} />
        <span> {name} </span>
      </li>
    </NavLink>
  ));

  return (
    <>
      <header className="header">
        <section className="header--container">
          <div className="header--logo">
            <Icon icon="noto:avocado" />
            <p>Awakate.dev</p>
          </div>
          <nav className="header--navBar">
            <ul>{navigationList}</ul>

            <button>
              <Icon icon="mdi-light:book-multiple" /> Blog{' '}
              <Icon icon="mdi-light:chevron-down" />
            </button>
          </nav>
          <div className="header--themeSwitch">
            <button
              onClick={() =>
                handleClick(
                  themeColor === 'light'
                    ? (themeColor = 'dark')
                    : (themeColor = 'light'),
                )
              }
            >
              <Icon icon="mdi-light:lightbulb" /> theme
            </button>
          </div>
        </section>
      </header>
      <button></button>
    </>
  );
};
export default Header;
