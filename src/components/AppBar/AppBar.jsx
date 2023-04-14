import { Container, Title } from './AppBar.styled';
import Rectangles from '../Rectangles';
import UserLogo from '../UserLogo';
import BasicSwitch from '../BasicSwitch';

function AppBar({ mode }) {
  return (
    <>
      <Container mode={mode}>
        <Title>AppBar</Title>
        <div>Menu</div>
        <UserLogo />
        <BasicSwitch />
        {/* <Rectangles /> */}
      </Container>
    </>
  );
}

export default AppBar;
