import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useSelector, useDispatch } from 'react-redux';
import {
  toggleUserLogo,
  toggleUserInfo,
  toggleLogout,
} from '../../features/modal/modalSlice';

import { Container } from './UserLogoModal.styled';

const style = {
  position: 'absolute',
  width: '161px',
  height: '130px',
  left: '154px',
  top: '72px',
  background: '#FAFAFA',
  border: '1px solid #8BAA36',
  borderRadius: '8px',
};

export default function UserLogoModal() {
  const open = useSelector((state) => state.modal.isUserLogoOpen);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleUserLogo());

  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={() => {
              dispatch(toggleUserInfo());
              handleClose();
            }}
          >
            Edit Profile
          </Button>
          <Button
            onClick={() => {
              dispatch(toggleLogout());
              handleClose();
            }}
          >
            Log out
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}
