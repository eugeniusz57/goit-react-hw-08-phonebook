import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import authSelectors from 'reducer/auth/selectors';
import { logOut } from 'reducer/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.selectUser);
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'inherit',
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <AccountCircleIcon
          sx={{
            color: 'white',
            background: '#3f51b5',
            borderRadius: 50,
            marginRight: 1,
          }}
        />
        {email}
      </Typography>

      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{
          marginLeft: 2,
          color: '#3f51b5',
          background: 'white',
          borderRadius: 50,
          '&:hover': {
            color: 'white',
            background: '#303f9f',
          },
        }}
      >
        <LogoutIcon />
      </Button>
    </Container>
  );
}
