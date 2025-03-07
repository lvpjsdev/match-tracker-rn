import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ErrorComponent } from '../ErrorComponents'; // Нужно будет переписать этот компонент
import { Button } from '../Button'; // Нужно будет переписать этот компонент
import RetryIcon from '../../assets/icons/Refresh.svg'; // Установка: npx expo install react-native-svg
import logo from '../../assets/images/Logo.png';
import { DropList } from '../DropList';
import { MatchStatus } from '@/api/types';

interface Props {
  isError?: boolean;
  isDisabled?: boolean;
  currentStatus: string;
  onRetry: () => void;
  setCurrentStatus: (status: string) => void;
}

const items = [
  { id: MatchStatus.Ongoing, label: 'Live' },
  { id: MatchStatus.Finished, label: 'Finished' },
  { id: MatchStatus.Scheduled, label: 'Match preparing' },
  { id: 'All', label: 'Все статусы' },
];

export const Header: React.FC<Props> = ({
  isError,
  isDisabled,
  onRetry,
  currentStatus,
  setCurrentStatus,
}) => {
  return (
    <View style={styles.header}>
      <View>
        <Image source={logo} style={styles.logo} resizeMode='contain' />
        <DropList
          items={items}
          valueId={currentStatus}
          onSelect={setCurrentStatus}
        />
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
    zIndex: 999,
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
