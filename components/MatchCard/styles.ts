import { StyleSheet } from 'react-native';

export const ComponentStyles = StyleSheet.create({
  text: {
    fontFamily: 'Inter_600SemiBold',
    fontWeight: '600',
    fontSize: 16,
  },
  mobileText: {
    fontSize: 14,
  },
  secondaryText: {
    fontFamily: 'Inter_500Medium',
    fontWeight: '500',
    fontSize: 14,
    color: 'rgba(250, 250, 250, 0.4)',
  },
  mobileSecondaryText: {
    fontSize: 12,
  },
  textSmallWarper: {
    display: 'flex',
    flexDirection: 'row',
  },
});
