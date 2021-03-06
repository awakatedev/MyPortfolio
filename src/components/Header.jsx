import '../assets/styles/components/Header.scss';
import Menu from '../components/Menu';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import navRoutes from './RoutesNav';
import { Icon, InlineIcon } from '@iconify/react';

const Header = () => {
  const currentTheme = localStorage.getItem('Theme');
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    localStorage.setItem('Theme', theme);
    document.body.className = theme;
  }, [theme]);

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    localStorage.setItem('Theme', theme);
    document.body.className = theme;
  };

  const menuState = document.querySelector('.menu');
  const mainState = document.querySelector('main');
  const navState = document.querySelector('.header');

  let navigationList = navRoutes.map(({ path, name, key, icon }) => (
    <NavLink
      className={(navData) => (navData.isActive ? `active ${theme}` : '')}
      exact="true"
      key={key}
      to={path}
      onClick={() => {
        if (true) {
          navState.classList.remove('active');
          menuState.classList.remove('active');
          mainState.classList.remove('space');
        }
      }}
    >
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
          <div className="logo">
            <Icon icon="noto:avocado" />
            <span>Awakate.dev</span>
          </div>
          <nav className="header--navBar">
            <ul>{navigationList}</ul>

            <hr />
            <button
              className={`blog btn__hover ${theme}`}
              onClick={() => {
                alert(
                  'Sorry, this functionality is under development, will be ready in soon ;)',
                );
              }}
            >
              <Icon icon="mdi-light:book-multiple" /> <span>Blog</span>
              <Icon className="angle-down" icon="mdi-light:chevron-down" />
            </button>
          </nav>
          <section className="header--themeSwitch">
            <button
              className={`btn__hover ${theme}`}
              onClick={() => {
                handleClick();
              }}
            >
              <Icon icon="mdi-light:lightbulb" /> <span>theme</span>
            </button>
          </section>
        </section>
      </header>
      <Menu />
    </>
  );
};
export default Header;
