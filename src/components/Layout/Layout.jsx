// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import PrimarySearchAppBar from '../../components/PrimarySearchAppBar';

// export default function Layout() {
//   return (
//     <>
//       <PrimarySearchAppBar />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// }

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
import { Footer } from '../Footer';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
