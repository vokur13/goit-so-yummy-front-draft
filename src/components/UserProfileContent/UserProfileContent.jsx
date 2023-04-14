import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { toggleUserInfo } from '../../features/modal/modalSlice';

function UserProfileContent() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleUserInfo());

  return (
    <>
      <h2>UserProfileContent</h2>
      <Button
        onClick={() => {
          handleClose();
        }}
      >
        Save changes
      </Button>
    </>
  );
}

export default UserProfileContent;
