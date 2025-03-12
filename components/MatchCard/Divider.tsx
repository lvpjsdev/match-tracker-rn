import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Divider: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>VS</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    // justifyContent: '',
    // padding: 10,
    // borderWidth: 1,
    borderRadius: 5,
    gap: 10,
    // minWidth: 123,
  },
  line: {
    width: 10,
    height: 0,
    minWidth: 130,
    flexGrow: 1,
    borderTopColor: 'rgba(19, 24, 31, 1)',
    borderTopWidth: 1,
  },
  text: {
    flexGrow: 0,
    fontSize: 14,
    color: 'rgba(49, 58, 71, 1)',
  },
});
