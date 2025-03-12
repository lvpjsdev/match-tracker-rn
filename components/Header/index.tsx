import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useIsMobile } from '@/app/hooks';
import { ErrorComponent } from '../ErrorComponents';
import { Button } from '../Button';
import RetryIcon from '../../assets/icons/Refresh.svg';
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
  const isMobile = useIsMobile();

  return (
    <View style={[styles.header, isMobile && mobileStyles.header]}>
      <View style={[styles.leftContainer, isMobile && mobileStyles.container]}>
        <Image
          source={logo}
          style={[styles.logo, isMobile && mobileStyles.logo]}
          resizeMode='contain'
        />
        <DropList
          items={items}
          valueId={currentStatus}
          onSelect={setCurrentStatus}
        />
      </View>
      <View style={[styles.rightContainer, isMobile && mobileStyles.container]}>
        {isError && <ErrorComponent />}
        <Button
          disabled={isDisabled}
          onClick={onRetry}
          iconAfter={<RetryIcon width={24} height={24} />}
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
  leftContainer: {
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '24px',
  },
  rightContainer: {
    zIndex: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const mobileStyles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
  },
  logo: {
    marginTop: 32,
    marginBottom: 14,
  },
  container: {
    flexDirection: 'column',
    width: '100%',
  },
});
