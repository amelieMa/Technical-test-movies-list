import { Row, Col } from 'antd'

import { Layout as LayoutAntd } from 'antd';
import { LayoutWrapper } from './Layout.wrapper'
import { Header } from '../Header/Header.component'

const responsive = {
  xs: { span: 24, offset: 0 },
  sm: { span: 24, offset: 0 },
  md: { span: 24, offset: 0 },
  lg: { span: 18, offset: 3 },
  xl: { span: 16, offset: 4 },
}

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <LayoutWrapper data-testid="layout">
    <LayoutAntd>
      <Header />
      <Row>
        <Col {...responsive}>
          {children}
        </Col>
      </Row>
    </LayoutAntd>
  </LayoutWrapper>
);
