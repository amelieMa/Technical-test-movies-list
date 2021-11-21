import styled from 'styled-components';

export const MoviePageWrapper = styled.div`
  color: ${({ theme }) => theme.colorPage};
  padding: 20px;
  h2 {
    color: ${({ theme }) => theme.colorPage};
  }

  .imageColumn {
    text-align: center;
  }

  .detailsColumn {
    padding-right: 15px;
  }
`;