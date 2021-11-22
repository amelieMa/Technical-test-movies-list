import styled from 'styled-components';

export const MovieItemWrapper = styled.article`
  .hoverDetails {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: ${({ theme }) => theme.backgroundPage};
    opacity: 0.8;
    .title {
      position: relative;
      margin-top: 40%;
      width: 100%;
      padding: 10px;
      text-transform: uppercase;
      font-size: 20px;
      line-height: 25px;
      color: ${({ theme }) => theme.colorPage};
    }
  }
`;