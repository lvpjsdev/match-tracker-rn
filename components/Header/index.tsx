import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ErrorComponent } from '../ErrorComponent'; // Нужно будет переписать этот компонент
import { Button } from '../Button'; // Нужно будет переписать этот компонент
import RetryIcon from '../../assets/Refresh.svg'; // Установка: npx expo install react-native-svg
import logo from '../../assets/Logo.png';

interface Props {
  isError?: boolean;
  isDisabled?: boolean;
  onRetry: () => void;
}

export const Header: React.FC<Props> = ({ isError, isDisabled, onRetry }) => {
  return (
    <View style={styles.header}>
      <View>
        <Image source={logo} style={styles.logo} resizeMode='contain' />
      </View>
      <View style={styles.rightContainer}>
        {isError && <ErrorComponent />}
        <Button
          disabled={isDisabled}
          onClick={onRetry}
          iconAfter={<RetryIcon width={24} height={24} />} // Передал параметры, для отображения
        >
          Обновить
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 25,
    gap: 10,
  },
  logo: {
    height: 24,
    width: 257,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
