import { Box } from 'components/Box';

import { BsArrowLeft } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import notPage from '../images/blad-404.jpg';

const NotFound = () => {
  return (
    <Box>
      <NavLink to={'/'}>
        <BsArrowLeft size={26} />
        Home page
      </NavLink>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={notPage} alt="page not found" />
      </Box>
    </Box>
  );
};
export default NotFound;
