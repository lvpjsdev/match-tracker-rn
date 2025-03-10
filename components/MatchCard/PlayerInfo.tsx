import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '@/app/_layout';
import avatar from '../../assets/icons/avatar_global.png';
import { ComponentStyles } from './styles';
import { useIsMobile } from '@/app/hooks';

interface Props {
  name: string;
  kills: number;
}

export const PlayerInfo: React.FC<Props> = ({ name, kills }) => {
  const isMobile = useIsMobile();
  return (
    <View style={[styles.container, isMobile && styles.mobileContainer]}>
      <View style={ComponentStyles.textSmallWarper}>
        <Image source={avatar} style={styles.avatar} resizeMode='contain' />
        <Text style={[GlobalStyles.text, ComponentStyles.text]}>{name}</Text>
      </View>
      <View style={ComponentStyles.textSmallWarper}>
        <Text style={[GlobalStyles.text, ComponentStyles.secondaryText]}>
          Убийств:
        </Text>
        <Text style={[GlobalStyles.text, ComponentStyles.text]}>
          {' ' + kills}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 19, 24, 1)',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignContent: 'stretch',
    borderRadius: 4,
    minWidth: 110,
  },
  mobileContainer: {
    flexDirection: 'column',
    paddingVertical: 7,
    paddingHorizontal: 4,
  },
  avatar: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  infoContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  playersTitle: { marginTop: 5, fontWeight: 'bold' },
});
