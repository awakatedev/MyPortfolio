import '../assets/styles/components/Layout.scss';
import { useLocation } from 'react-router-dom';
import navRoutes from '../components/RoutesNav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonsFixed from '../components/ButtonsFixed';
import BlueLight from '../assets/static/BlueLight.svg';
import PinkLight from '../assets/static/PinkLight.svg';

const Layout = (prop) => {
  const location = useLocation();
  console.log(location);
  const paths = navRoutes.map((path) => path);
  console.log(paths);
  const ConditionalRender =
    !location.pathname === paths ? (
      <>{prop.children}</>
    ) : (
      <>
        <Header />
        <ButtonsFixed />
        <img className="light-blue" src={BlueLight} alt="lights" />
        <img className="light-pink" src={PinkLight} alt="lights" />
        {prop.children}
        <Footer />
      </>
    );

  return ConditionalRender;
};
export default Layout;
