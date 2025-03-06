import styled from 'styled-components';

export const DropItem = styled.div<{ $isActive: boolean }>`
  padding: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $isActive }) =>
    $isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(180, 181, 182, 1)'};
  background-color: ${({ $isActive }) =>
    $isActive ? 'rgba(17, 22, 29, 1)' : 'rgba(15, 19, 24, 1)'};

  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(17, 22, 29, 1);
  }

  &:active {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(13, 17, 21, 1);
  }

  &:disabled {
    color: rgba(104, 105, 106, 1);
    background-color: rgba(15, 19, 24, 1);
  }
`;
