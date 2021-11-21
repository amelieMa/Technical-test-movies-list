import { Layout } from 'antd';
import { NavLink, useLocation, matchPath } from 'react-router-dom';

import { ROUTE as HomePageRoute } from '../../pages/HomePage/HomePage.container';
import { HeaderWrapper, BackToHomeWrapper } from './Header.wrapper';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme.component';

const { Header: HeaderAntd } = Layout;

const BackToHome = () => (
  <BackToHomeWrapper>
    <NavLink to={'/'}>
      <span className="material-icons">chevron_left</span>
    </NavLink>
  </BackToHomeWrapper>
)

export const Header = () => {
  const { pathname } = useLocation();
  const isHomePath = !!matchPath(HomePageRoute, pathname);

  return (
    <HeaderWrapper>
      <HeaderAntd className="header">
        {!isHomePath && <BackToHome />}
        <NavLink to={HomePageRoute}>
          <h1>Movies</h1>
        </NavLink>
        <SwitchTheme />
      </HeaderAntd>
    </HeaderWrapper>
  );
}
