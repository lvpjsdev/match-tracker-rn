import { SMALL_SCREEN_MEDIA_QUERY } from '@/constants';
import { Platform } from 'react-native';
import { useMediaQuery } from 'react-responsive';

// useMediaQuery почему то не работает в симуляторах, так что смотрим еще на платформу
export const useIsMobile = () => {
  const isQueryMatch = useMediaQuery({ query: SMALL_SCREEN_MEDIA_QUERY });
  const isMobilePlatform = Platform.OS === 'android' || Platform.OS === 'ios';
  return isMobilePlatform || isQueryMatch;
};
