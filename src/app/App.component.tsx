import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout.component'
import { HomePage, ROUTE as HomePageRoute } from '../pages/HomePage/HomePage.container';
import { MoviePage, ROUTE as MoviePageRoute } from '../pages/MoviePage/MoviePage.container';

export const AppComponent = () => (
  <Layout>
    <Routes>
      <Route path={HomePageRoute} element={<HomePage />} />
      <Route path={MoviePageRoute} element={<MoviePage />} />
    </Routes>
  </Layout>
);
