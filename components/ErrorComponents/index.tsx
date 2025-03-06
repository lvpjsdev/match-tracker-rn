import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AlertIcon from '../../assets/alert-triangle.svg';

export const ErrorComponent = () => {
  return (
    <View style={styles.container}>
      <AlertIcon width={24} height={24} />
      <Text style={styles.text}>Ошибка: не удалось загрузить информацию</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    padding: 14,
    backgroundColor: 'rgba(15, 19, 24, 1)',
    gap: 10,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: 'white', // Добавил цвет текста, т.к. фон темный
  },
});
