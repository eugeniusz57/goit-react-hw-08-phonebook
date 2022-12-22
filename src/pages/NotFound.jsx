import { Box } from '@mui/material';
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import notPage from '../images/blad-404.jpg';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <NavLink to={'/'}>
        <BsArrowLeft size={26} />
        Home page
      </NavLink>
      <img src={notPage} alt="page not found" />
    </Box>
  );
};
export default NotFound;
