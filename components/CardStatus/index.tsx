import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MatchStatus } from '../../api/types'; // Убедитесь, что путь корректен

interface Props {
  status: MatchStatus;
}

const getTextAndStyles = (status: MatchStatus) => {
  switch (status) {
    case MatchStatus.Ongoing:
      return {
        backgroundColor: 'rgba(67, 173, 40, 1)',
        text: 'Live',
      };
    case MatchStatus.Finished:
      return {
        backgroundColor: 'rgba(235, 2, 55, 1)',
        text: 'Finished',
      };
    case MatchStatus.Scheduled:
      return {
        backgroundColor: 'rgba(235, 100, 2, 1)',
        text: 'Match preparing',
      };
    default:
      return {
        backgroundColor: 'transparent',
        text: '',
      };
  }
};

export const CardStatus: React.FC<Props> = ({ status }) => {
  const { backgroundColor, text } = getTextAndStyles(status);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 21,
    borderRadius: 4,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    fontSize: 12,
  },
});
