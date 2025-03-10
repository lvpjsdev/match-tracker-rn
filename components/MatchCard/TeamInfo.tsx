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
    <View style={styles.container}>
      {team.players.map((player, index) => (
        <View style={styles.playerContainer} key={index}>
          <PlayerInfo name={player.username} kills={player.kills} />
        </View>
      ))}
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
          <Text
            style={[
              GlobalStyles.text,
              ComponentStyles.text,
              isMobile && ComponentStyles.mobileText,
            ]}
          >
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
          <Text
            style={[
              GlobalStyles.text,
              ComponentStyles.text,
              isMobile && ComponentStyles.mobileText,
            ]}
          >
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
          <Text
            style={[
              GlobalStyles.text,
              ComponentStyles.text,
              isMobile && ComponentStyles.mobileText,
            ]}
          >
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
    // padding: 10,
    // borderWidth: 1,
    borderRadius: 5,
    // gap: 8,
    // minWidth: 123,
  },
  playerContainer: {
    // minWidth: 123,
    flexShrink: 3,
    flexGrow: 0,
    flexBasis: 'auto',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(16, 19, 24, 1)',
    paddingVertical: 14,
    marginTop: 8,
  },
  mobileTextSmall: {
    flexShrink: 3,
  },
});
