import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
//import statusProvider from '../context/menuContext';
import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Blog from '../containers/Blog';
import Layout from './Layout';
import ErrorPage from '../containers/ErrorPage';
const App = () => {
  return (
    <BrowserRouter>
      <statusProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="About" element={<About />} />
            <Route exact path="Contact" element={<Contact />} />
            <Route exact path="Blog" element={<Blog />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </statusProvider>
    </BrowserRouter>
  );
};

export default App;
