import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  .header {
    text-align: center;
    background-color: ${({ theme }) => theme.backgroundHeader};

    h1 {
      color: ${({ theme }) => theme.colorHeader};
    }
  }
`;

export const BackToHomeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 5px;
  a {
    color: ${({ theme }) => theme.colorHeader};
    span {
      line-height: 64px;
      font-size: 30px;
    }
  }
`;