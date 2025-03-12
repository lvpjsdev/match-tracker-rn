import { GlobalStyles } from '@/app/_layout';
import { useIsMobile } from '@/app/hooks';
import React, { ReactNode, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Pressable,
} from 'react-native';

interface Props {
  onClick: () => void;
  disabled?: boolean;
  iconAfter?: ReactNode;
  isLoading?: boolean; // Добавил пропс для индикатора загрузки
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  onClick,
  disabled = false,
  iconAfter,
  isLoading = false,
}) => {
  const isSmallScreen = useIsMobile();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const onPressHandler = () => {
    if (!isLoading) {
      onClick();
    }
  };
  return (
    <Pressable
      style={[
        styles.button,
        disabled && styles.disabledButton,
        isPressed && !disabled && styles.activeButton,
        isSmallScreen && smallScreenStyles.button,
      ]}
      onPress={onPressHandler}
      disabled={disabled || isLoading}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {isLoading && (
        <ActivityIndicator color='white' style={{ marginRight: 10 }} />
      )}
      <View style={styles.content}>
        <Text
          style={[
            GlobalStyles.text,
            styles.text,
            disabled && styles.disabledText,
          ]}
        >
          {children}
        </Text>
        {iconAfter}
      </View>
    </Pressable>
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

const smallScreenStyles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
