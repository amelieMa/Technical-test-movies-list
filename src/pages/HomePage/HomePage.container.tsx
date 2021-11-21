import { BASE_URL } from '../../app/App.constants';
import { HomePageComponent } from './HomePage.component';

export const ROUTE = BASE_URL;

export const HomePage = () => {
  return (
    <HomePageComponent />
  );
}