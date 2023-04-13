import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../../components/AppBar';
import { Container } from './Layout.styled';

function Layout() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default Layout;
