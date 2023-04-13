import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../features/modal/modalSlice';

import Box from '@mui/material/Box';
import BasicSwitch from '../BasicSwitch';
import ImageAvatar from '../ImageAvatar';
import BasicModal from '../BasicModal';

function User() {
  const isOpen = useSelector((state) => state.modal.isOpen);
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
      }}
    >
      <Box
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => {
          dispatch(toggle());
        }}
      >
        <ImageAvatar />
      </Box>
      <p>User</p>
      <Box
        sx={{
          marginLeft: '50px',
        }}
      >
        <BasicSwitch />
      </Box>
      {isOpen && <BasicModal />}
    </Box>
  );
}

export default User;
