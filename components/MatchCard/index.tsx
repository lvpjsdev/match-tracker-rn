import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MatchStatus } from '../../api/types';
import TeamIcon from '../../assets/icons/comand-icon.svg'; // Убедитесь, что путь корректен
import { CardStatus } from '../CardStatus';
import { GlobalStyles } from '@/app/_layout';

interface Props {
  homeTeamName: string;
  awayTeamName: string;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export const MatchCard: React.FC<Props> = ({
  homeTeamName,
  awayTeamName,
  homeScore,
  awayScore,
  status,
}) => {
  return (
    <View style={styles.wrapperCard}>
      <View style={styles.commandWrapper}>
        <TeamIcon width={24} height={24} />
        <Text style={[GlobalStyles.text, styles.teamName]}>{homeTeamName}</Text>
      </View>
      <View style={styles.statusWrapper}>
        <Text
          style={[GlobalStyles.text, styles.score]}
        >{`${homeScore} : ${awayScore}`}</Text>
        <CardStatus status={status} />
      </View>
      <View style={[styles.commandWrapper, styles.commandWrapperRevers]}>
        <TeamIcon width={24} height={24} />
        <Text style={[GlobalStyles.text, styles.teamName]}>{awayTeamName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperCard: {
    display: 'flex',
    height: 52,
    paddingVertical: 16,
    paddingHorizontal: 36,
    marginBottom: 15,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(11, 14, 18, 1)',
    width: '100%',
  },
  commandWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 14,
  },
  commandWrapperRevers: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  statusWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 2,
  },
  teamName: {
    fontWeight: '700',
    fontSize: 16,
  },
});
