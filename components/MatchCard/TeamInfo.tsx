import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Team } from '../../api/types';
import { GlobalStyles } from '@/app/_layout';
import { PlayerInfo } from './PlayerInfo';
import { ComponentStyles } from './styles';

interface TeamInfoProps {
  team: Team;
}

export const TeamInfo: React.FC<TeamInfoProps> = ({ team }) => {
  return (
    <View style={styles.container}>
      {team.players.map((player, index) => (
        <View style={styles.playerContainer} key={index}>
          <PlayerInfo name={player.username} kills={player.kills} />
        </View>
      ))}
      <View style={styles.infoContainer}>
        <View style={ComponentStyles.textSmallWarper}>
          <Text style={[GlobalStyles.text, ComponentStyles.secondaryText]}>
            Points:
          </Text>
          <Text style={[GlobalStyles.text, ComponentStyles.text]}>
            {team.points}
          </Text>
        </View>
        <View style={ComponentStyles.textSmallWarper}>
          <Text style={[GlobalStyles.text, ComponentStyles.secondaryText]}>
            Место:
          </Text>
          <Text style={[GlobalStyles.text, ComponentStyles.text]}>
            {team.place}
          </Text>
        </View>
        <View style={ComponentStyles.textSmallWarper}>
          <Text style={[GlobalStyles.text, ComponentStyles.secondaryText]}>
            Всего убийств:
          </Text>
          <Text style={[GlobalStyles.text, ComponentStyles.text]}>
            {team.total_kills}
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
    borderWidth: 1,
    borderRadius: 5,
  },
  playerContainer: {
    flexShrink: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1,
    width: '100%',
  },
});
