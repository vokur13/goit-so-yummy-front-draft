import { Container, Title } from './AppBar.styled';
import Rectangles from '../Rectangles';

function AppBar({ mode }) {
  return (
    <>
      <Container mode={mode}>
        <Title>AppBar</Title>
        <div>Menu</div>
        {/* <Rectangles /> */}
      </Container>
    </>
  );
}

export default AppBar;
