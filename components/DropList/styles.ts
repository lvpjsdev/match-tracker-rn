import { StyleSheet } from 'react-native';

export const ComponentStyles = StyleSheet.create({
  textDefault: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
    textAlign: 'left',
    color: 'rgba(180, 181, 182, 1)',
  },
  textHover: {
    color: 'rgba(255, 255, 255, 1)',
  },
  buttonDefault: {
    backgroundColor: 'rgba(11, 14, 18, 1)',
  },
  buttonHover: {
    backgroundColor: 'rgba(15, 19, 24, 1)',
  },
  buttonPressed: {
    backgroundColor: 'rgba(11, 14, 18, 1)',
    borderColor: 'rgba(23, 29, 37, 1)',
    borderWidth: 1,
  },
});
