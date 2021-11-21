import { Route, Routes } from 'react-router-dom';

import { HomePage, ROUTE as HomePageRoute } from '../pages/HomePage/HomePage.container';
import { MoviePage, ROUTE as MoviePageRoute } from '../pages/MoviePage/MoviePage.container';

export const AppComponent = () => (
  <Routes>
    <Route path={HomePageRoute} element={<HomePage />} />
    <Route path={MoviePageRoute} element={<MoviePage />} />
  </Routes>
);
