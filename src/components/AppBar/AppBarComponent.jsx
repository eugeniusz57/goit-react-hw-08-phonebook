import Navigation from '../Navigation';
import UserMenu from '../UserMenu/UserMenu';
import MenuAuth from '../MenuAuth/MenuAuth';
import { AppBar, Container, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import authSelectors from '../../reducer/auth/selectors';

export default function AppBarCopmonent() {
  const isLogin = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <AppBar color="inherit" position="static">
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar disableGutters={true}>
          <Navigation />
          {isLogin ? <UserMenu /> : <MenuAuth />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
