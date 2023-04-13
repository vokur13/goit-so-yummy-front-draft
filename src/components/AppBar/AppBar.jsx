import { Container, Title } from './AppBar.styled';
import Rectangles from '../Rectangles';
import User from '../User';

function AppBar({ mode }) {
  return (
    <>
      <Container mode={mode}>
        <Title>AppBar</Title>
        <div>Menu</div>
        <User />
        {/* <Rectangles /> */}
      </Container>
    </>
  );
}

export default AppBar;
