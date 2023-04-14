import { useSelector, useDispatch } from 'react-redux';
import { toggleUserLogo } from '../../features/modal/modalSlice';

import Box from '@mui/material/Box';
import ImageAvatar from '../ImageAvatar';
import UserLogoModal from '../UserLogoModal';
import UserInfoModal from '../UserInfoModal';
import LogoutModal from '../LogoutModal';

function UserLogo() {
  const isUserLogoOpen = useSelector((state) => state.modal.isUserLogoOpen);
  const isUserInfoOpen = useSelector((state) => state.modal.isUserInfoOpen);
  const isLogoutOpen = useSelector((state) => state.modal.isLogoutOpen);
  const dispatch = useDispatch();

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        border: '1px solid red',
        background: '#8BAA36',
        alignItems: 'center',
        padding: '0px',
        gap: '14px',
        width: '101px',
        height: '46px',
        cursor: 'pointer',
      }}
    >
      <Box
        onClick={() => {
          dispatch(toggleUserLogo());
        }}
      >
        <ImageAvatar />
      </Box>
      <p>User</p>
      {isUserLogoOpen && <UserLogoModal />}
      {isUserInfoOpen && <UserInfoModal />}
      {isLogoutOpen && <LogoutModal />}
    </Box>
  );
}

export default UserLogo;
