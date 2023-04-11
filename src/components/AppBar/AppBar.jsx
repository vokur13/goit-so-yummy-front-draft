import { Container } from './AppBar.styled';

export default function AppBar({ mode }) {
  return (
    <>
      <Container mode={mode}>
        <h1>AppBar</h1>
        <div>Menu</div>
      </Container>
    </>
  );
}
