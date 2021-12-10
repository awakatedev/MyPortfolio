import '../assets/styles/components/Layout.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlueLight from '../assets/static/BlueLight.svg';
import PinkLight from '../assets/static/PinkLight.svg';

const Layout = (prop) => {
  return (
    <>
      <Header />
      <img className="light-blue" src={BlueLight} alt="lights" />
      <img className="light-pink" src={PinkLight} alt="lights" />
      {prop.children}
      <Footer />
    </>
  );
};
export default Layout;