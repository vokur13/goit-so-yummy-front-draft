import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { toggleLogout } from '../../features/modal/modalSlice';

function LogoutContent() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleLogout());

  return (
    <>
      <h2>Are you sure you want to log out?</h2>
      <Button
        onClick={() => {
          handleClose();
        }}
      >
        Log out
      </Button>
    </>
  );
}

export default LogoutContent;
