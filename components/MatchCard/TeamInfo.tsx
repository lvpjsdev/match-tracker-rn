import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Team } from '../../api/types';
import { GlobalStyles } from '@/app/_layout';
import { PlayerInfo } from './PlayerInfo';
import { ComponentStyles } from './styles';
import { useIsMobile } from '@/app/hooks';

interface TeamInfoProps {
  team: Team;
}

export const TeamInfo: React.FC<TeamInfoProps> = ({ team }) => {
  const isMobile = useIsMobile();
  return (
    <View style={[styles.container, isMobile && styles.mobileContainer]}>
      <View style={styles.playersListWrapper}>
        {team.players.map((player, index) => (
          <View style={styles.playerContainer} key={index}>
            <PlayerInfo name={player.username} kills={player.kills} />
          </View>
        ))}
      </View>
      <View style={styles.infoContainer}>
        <View style={[ComponentStyles.textSmallWarper]}>
          <Text
            style={[
              GlobalStyles.text,
              ComponentStyles.secondaryText,
              isMobile && ComponentStyles.mobileSecondaryText,
            ]}
          >
            Points:
          </Text>
          <Text style={[GlobalStyles.text, ComponentStyles.text]}>
            {' ' + team.points}
          </Text>
        </View>
        <View style={ComponentStyles.textSmallWarper}>
          <Text
            style={[
              GlobalStyles.text,
              ComponentStyles.secondaryText,
              isMobile && ComponentStyles.mobileSecondaryText,
            ]}
          >
            Место:
          </Text>
          <Text style={[GlobalStyles.text, ComponentStyles.text]}>
            {' ' + team.place}
          </Text>
        </View>
        <View style={ComponentStyles.textSmallWarper}>
          <Text
            style={[
              GlobalStyles.text,
              ComponentStyles.secondaryText,
              isMobile && ComponentStyles.mobileSecondaryText,
            ]}
          >
            Всего убийств:
          </Text>
          <Text style={[GlobalStyles.text, ComponentStyles.text]}>
            {' ' + team.total_kills}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    gap: 8,
    flex: 1,
    maxWidth: '50%',
  },
  mobileContainer: {
    maxWidth: '100%',
  },
  playersListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 8,
  },
  playerContainer: {
    flexShrink: 1,
    width: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 0,
    paddingVertical: 14,
    backgroundColor: 'rgba(16, 19, 24, 1)',
  },
});
