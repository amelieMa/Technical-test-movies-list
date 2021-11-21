import { Row, Col } from 'antd'

import { Layout as LayoutAntd } from 'antd';
import { LayoutWrapper } from './Layout.wrapper'
import { Header } from '../Header/Header.component'

const responsive = {
  xs: { span: 24, offset: 0 },
  sm: { span: 24, offset: 0 },
  md: { span: 24, offset: 0 },
  lg: { span: 20, offset: 2 },
  xl: { span: 20, offset: 2 },
}

export const Layout = ({ children }: any) => {
  return (
    <LayoutWrapper>
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
}
