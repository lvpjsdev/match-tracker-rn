import styled from 'styled-components';
import { MatchStatus } from '../../api/types';
import { FC } from 'react';
import TeamIcon from '../../assets/comand-icon.svg?react';
import { CardStatus } from '../CardStatus';

interface Props {
  homeTeamName: string;
  awayTeamName: string;
  homeScore: number; // Счет домашней команды
  awayScore: number; // Счет гостевой команды
  status: MatchStatus;
}

const CommandWrapper = styled.section<{ $isRevers?: boolean }>`
  display: flex;
  flex-direction: ${({ $isRevers = false }) =>
    $isRevers ? 'row-reverse' : 'row'};
  justify-content: ${({ $isRevers = false }) => ($isRevers ? 'end' : 'start')};
  align-items: center;
  gap: 14px;
  font-weight: 700;
  font-size: 16px;
`;

const StatusWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Score = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 2px;
`;

const WrapperCard = styled.section`
  display: flex;
  height: 52px;
  padding: 16px 36px;
  margin-bottom: 15px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(11, 14, 18, 1);
`;

export const MatchCard: FC<Props> = ({
  homeTeamName,
  awayTeamName,
  homeScore,
  awayScore,
  status,
}) => {
  return (
    <WrapperCard>
      <CommandWrapper>
        <TeamIcon />
        <div>{homeTeamName}</div>
      </CommandWrapper>
      <StatusWrapper>
        <Score>{`${homeScore} : ${awayScore}`}</Score>
        <CardStatus status={status} />
      </StatusWrapper>
      <CommandWrapper $isRevers>
        <TeamIcon />
        <span>{awayTeamName}</span>
      </CommandWrapper>
    </WrapperCard>
  );
};
