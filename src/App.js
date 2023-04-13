import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';

const Recipe = React.lazy(() => import('./pages/Recipe'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipe" element={<Recipe />}></Route>
        </Route>
      </Routes>
    </>
  );
}
