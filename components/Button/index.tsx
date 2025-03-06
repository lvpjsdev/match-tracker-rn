import React, { ReactNode, useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

interface Props {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  iconAfter?: ReactNode;
  isLoading?: boolean; // Добавил пропс для индикатора загрузки
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled = false,
  iconAfter,
  isLoading = false, // Добавил isLoading и по умолчанию false
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const onPressHandler = () => {
    if (!isLoading) {
      // Проверяем, что не в состоянии загрузки
      onClick();
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        isPressed && !disabled && styles.activeButton,
      ]}
      onPress={onPressHandler} // Заменил onClick на onPress
      disabled={disabled || isLoading} // Привязываем isLoading к disabled
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {isLoading && (
        <ActivityIndicator color='white' style={{ marginRight: 10 }} />
      )}
      <View style={styles.content}>
        <Text style={[styles.text, disabled && styles.disabledText]}>
          {children}
        </Text>
        {iconAfter}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(235, 2, 55, 1)',
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 0,
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: 'rgba(160, 17, 49, 1)',
  },
  disabledButton: {
    backgroundColor: 'rgba(112, 19, 40, 1)',
  },
  disabledText: {
    color: 'rgba(120, 120, 120, 1)',
  },
  text: {
    color: 'rgba(255, 255, 255, 1)',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
