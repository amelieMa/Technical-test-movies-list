import styled from 'styled-components';

export const EmptyWrapper = styled.div`
  color: ${({ theme }) => theme.colorPage};
  .ant-empty {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .ant-empty-image {
    font-size: 5rem;
    height: 6rem;
  }
  .ant-empty-description {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
