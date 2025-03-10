import { SMALL_SCREEN_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  return useMediaQuery({ query: SMALL_SCREEN_MEDIA_QUERY });
};
