import { FC } from 'react';
import styled from 'styled-components';
import { MatchStatus } from '../../api/types';

interface Props {
  status: MatchStatus;
}

const getStyles = (status: MatchStatus) => {
  switch (status) {
    case MatchStatus.Ongoing:
      return `
        background-color: rgba(67, 173, 40, 1);
        content: 'Live';
      `;
      break;
    case MatchStatus.Finished:
      return `
        background-color: rgba(235, 2, 55, 1);
        content: 'Finished';
      `;
      break;
    case MatchStatus.Scheduled:
      return `
        background-color: rgba(235, 100, 2, 1);
        content: 'Match preparing';
      `;
      break;
    default:
      return ';';
      break;
  }
};

const StyledDiv = styled.div<{ $status: MatchStatus }>`
  padding: 5px 21px;
  border-radius: 4px;
  min-width: 50px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 12px;
  ${({ $status }) => getStyles($status)}
`;

export const CardStatus: FC<Props> = ({ status }) => {
  return <StyledDiv $status={status}>{status}</StyledDiv>;
};
