import '../assets/styles/components/Layout.scss';

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useSeo from '../hooks/useSeo';
import navRoutes from '../components/RoutesNav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonsFixed from '../components/ButtonsFixed';
import BlueLight from '../assets/static/BlueLight.svg';
import PinkLight from '../assets/static/PinkLight.svg';

const LoaderState = () => {
  useSeo({ title: 'Loading...', description: 'Loading awakate.dev route' });
  const currentTheme = localStorage.getItem('Theme');

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);
  return (
    <div className="loading">
      <div className="loading-pulse"></div>
    </div>
  );
};

const Layout = (prop) => {
  const [render, setRender] = useState(null);
  const location = useLocation();
  // console.log(location.pathname);

  useEffect(() => {
    const toMatch = [];
    navRoutes.forEach((element) => {
      toMatch.push(element.path);
      //setRender(toMatch);
    });

    if (location.pathname === toMatch[0]) {
      setTimeout(() => {
        setRender(true);
      }, 4000);
    } else if (location.pathname === toMatch[1]) {
      setTimeout(() => {
        setRender(true);
      }, 4000);
    } else if (location.pathname === toMatch[2]) {
      setTimeout(() => {
        setRender(true);
      }, 4000);
    } else {
      setTimeout(() => {
        setRender(false);
      }, 4000);
    }

    //console.log(typeof render, location.pathname)
  }, [render]);

  const emptyStructure = <>{prop.children}</>;

  const successStructure = (
    <>
      <Header />
      <ButtonsFixed />
      <img className="light-blue" src={BlueLight} alt="lights" />
      <img className="light-pink" src={PinkLight} alt="lights" />
      {prop.children}
      <Footer />
    </>
  );

  if (render === null) {
    return <LoaderState />;
  } else if (!render) {
    return emptyStructure;
  } else {
    return successStructure;
  }
};
export default Layout;
