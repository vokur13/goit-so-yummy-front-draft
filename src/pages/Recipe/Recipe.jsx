import { Container, ImgBox, Title, Paragraph, MenuItem } from './Recipe.styled';
import Box from '@mui/material/Box';

function Recipe() {
  return (
    <Container>
      <ImgBox>
        <Title>Salmon Avocado Salad</Title>
        <Paragraph>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </Paragraph>
      </ImgBox>
      <Box component="section" sx={{ py: '50px', border: '1px solid blue' }}>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            border: '1px solid blue',
            height: '60px',
            background: '#8BAA36',
            borderRadius: '8px',
          }}
        >
          <MenuItem>Ingredients</MenuItem>
          <MenuItem>Number</MenuItem>
          <MenuItem>Add to list</MenuItem>
        </Box>
      </Box>
    </Container>
  );
}

export default Recipe;
