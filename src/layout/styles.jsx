import { styled } from '@mui/material/styles';

// make footer stay at bottom
export const Main = styled('div')`
  min-height: 100vh;
`;

// make footer stay at bottom
// 92px - height of footer
export const Section = styled('div')`
  min-height: calc(100vh - 92px);
`;
