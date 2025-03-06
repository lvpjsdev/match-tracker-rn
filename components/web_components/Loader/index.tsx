import LoadingIcon from '../../assets/loading.svg?react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoadingIcon = styled(LoadingIcon)`
  animation: ${rotate} 2s linear infinite;
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

export const Loader = () => <StyledLoadingIcon />;
