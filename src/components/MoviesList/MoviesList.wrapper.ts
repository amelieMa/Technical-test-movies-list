import styled from 'styled-components';

export const MoviesListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding: 5px;
  .movie {
    flex: 1 1 40%;
    margin: 5px;
    position: relative;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 768px) {
      margin: 5px;
      flex: 1 1 30%;
    }

    @media (min-width: 955px) {
      margin: 10px;
      flex: 1 1 15%;
    }

    @media (min-width: 1450px) {
      flex: 1 1 18%;
    }
  }
`;

export const MovieWrapper = styled.article`
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