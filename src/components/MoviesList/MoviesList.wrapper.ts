import styled from 'styled-components';

export const MoviesListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  padding: 5px;
  .movie {
    flex: 1 1 40%;
    max-width: 45%;
    margin: 5px;
    position: relative;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 768px) {
      margin: 5px;
      flex: 1 1 23%;
      max-width: 25%;
    }
    @media (min-width: 955px) { 
      margin: 10px;
      flex: 1 1 15%;
      max-width: 18%;
    }
    @media (min-width: 1450px) {
      flex: 1 1 18%;
      max-width: 20%;
    }
  }
`;
