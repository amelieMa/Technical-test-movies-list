import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  .ant-layout {
    background-color: ${({ theme }) => theme.backgroundPage};
  }
`;
