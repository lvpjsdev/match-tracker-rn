import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
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
      <View
        style={[
          ComponentStyles.textSmallWarper,
          {
            flex: 1,
            minWidth: 0,
            ...(Platform.select({
              web: {
                overflow: 'hidden',
              } as any,
            }) || {}),
          },
        ]}
      >
        <Image source={avatar} style={styles.avatar} resizeMode='contain' />
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={[
            GlobalStyles.text,
            ComponentStyles.text,
            {
              textOverflow: 'ellipsis',
              ...(Platform.select({
                web: {
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  minWidth: 0,
                  width: '100%',
                } as any,
              }) || {}),
            },
          ]}
        >
          {name}
        </Text>
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
    paddingHorizontal: 12,
    borderRadius: 4,
    width: '100%',
  },
  mobileContainer: {
    flexDirection: 'column',
  },
  avatar: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  infoContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  playersTitle: { marginTop: 5, fontWeight: 'bold' },
});
