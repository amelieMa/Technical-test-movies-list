import { Layout as LayoutAntd } from 'antd';
import { LayoutWrapper } from './Layout.wrapper'
import { Header } from '../Header/Header.component'

export const Layout = ({ children }: any) => {
  return (
    <LayoutWrapper>
      <LayoutAntd>
        <Header />
        {children}
      </LayoutAntd>
    </LayoutWrapper>
  );
}
