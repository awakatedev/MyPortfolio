import { createContext } from 'react';
//import Menu from '../components/Menu';

const statusLayout = createContext();

const statusProvider = ({ children }) => {
  return <statusLayout.provider>{children}</statusLayout.provider>;
};
export default statusProvider;
