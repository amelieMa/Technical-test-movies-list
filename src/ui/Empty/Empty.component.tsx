import { Empty as EmptyAntd } from 'antd';

import { EmptyWrapper } from './Empty.wrapper';

export const Empty = ({ description, image }: { description: string | JSX.Element, image: string | JSX.Element }) => (
  <EmptyWrapper>
    <EmptyAntd data-testid="empty-section" description={description} image={image} />
  </EmptyWrapper>
);
