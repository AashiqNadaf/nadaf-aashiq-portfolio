import styled from 'styled-components';

export const FullScreenDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 56px);
  box-sizing: border-box;
  padding: 0 128px;

  @media (max-width: 964px) {
    padding: 0 25px;
    height: auto !important;
  }
  @media (max-width: 768px) {
    padding: 35px;
    height: auto !important;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
