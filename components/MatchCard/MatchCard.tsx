import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MatchStatus, Team } from '../../api/types';
import { CardStatus } from '../CardStatus';
import { TeamInfo } from './TeamInfo';
import { GlobalStyles } from '@/app/_layout';
import TeamIcon from '../../assets/icons/comand-icon.svg'; // Убедитесь, что путь корректен
import ArrowDownIcon from '../../assets/icons/arrow-drop.svg';
import ArrowUpIcon from '../../assets/icons/chevron-up.svg';
import { ComponentStyles } from './styles';

interface Props {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export const MatchCard: React.FC<Props> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable onPress={() => setIsOpen((state) => !state)}>
      <View style={styles.wrapperCard}>
        <View style={styles.shortInfoWrapper}>
          <View style={styles.commandWrapper}>
            <TeamIcon width={24} height={24} />
            <Text style={[GlobalStyles.text, ComponentStyles.text]}>
              {homeTeam.name}
            </Text>
          </View>
          <View style={styles.statusWrapper}>
            <Text
              style={[GlobalStyles.text, styles.score]}
            >{`${homeScore} : ${awayScore}`}</Text>
            <CardStatus status={status} />
          </View>
          <View style={[styles.commandWrapper, styles.commandWrapperRevers]}>
            <TeamIcon width={24} height={24} />
            <Text style={[GlobalStyles.text, styles.teamName]}>
              {awayTeam.name}
            </Text>
          </View>
          {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </View>
        {isOpen && (
          <View style={styles.teamsInfoWrapper}>
            <TeamInfo team={homeTeam} />
            <TeamInfo team={awayTeam} />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCard: {
    display: 'flex',
    paddingVertical: 16,
    paddingHorizontal: 36,
    marginBottom: 15,
    borderRadius: 4,
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(11, 14, 18, 1)',
    width: '100%',
  },
  shortInfoWrapper: {
    display: 'flex',
    minHeight: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  teamsInfoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 32,
    alignItems: 'center',
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
});
