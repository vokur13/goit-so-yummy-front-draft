import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const CustomizedSlider = styled(Slider)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};

  :hover {
    color: ${theme.palette.secondary.light};
  }
`
);

export default function StyledComponents() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
    </Box>
  );
}
