import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  isActive: boolean;
  children: React.ReactNode;
  onPress?: () => void;
}

export const DropItem: React.FC<Props> = ({ isActive, children, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isActive && styles.activeContainer,
        isPressed && !isActive && styles.hoverContainer,
      ]}
      onPress={onPress}
      disabled={false}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'rgba(15, 19, 24, 1)',
  },
  activeContainer: {
    backgroundColor: 'rgba(17, 22, 29, 1)',
  },
  hoverContainer: {
    backgroundColor: 'rgba(17, 22, 29, 1)',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(180, 181, 182, 1)',
  },
  activeText: {
    color: 'rgba(255, 255, 255, 1)',
  },
  disabledText: {
    color: 'rgba(104, 105, 106, 1)',
  },
});
