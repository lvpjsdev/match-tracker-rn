import { FC } from 'react';
import { ErrorComponent } from '../ErrorComponent';
import { Button } from '../Button';
import RetryIcon from '../../assets/Refresh.svg?react';
import logo from '../../assets/Logo.png';
import styled from 'styled-components';

interface Props {
  isError?: boolean;
  isDisabled?: boolean;
  onRetry: () => void;
}

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  gap: 10px;
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

export const Header: FC<Props> = ({ isError, isDisabled, onRetry }) => {
  return (
    <StyledHeader>
      <StyledH1>
        <img height={24} width={257} src={logo} alt='Match Tracker' />
      </StyledH1>
      <StyledDiv>
        {isError && <ErrorComponent />}
        <Button
          disabled={isDisabled}
          onClick={onRetry}
          iconAfter={<RetryIcon />}
        >
          Обновить
        </Button>
      </StyledDiv>
    </StyledHeader>
  );
};
