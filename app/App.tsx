import { Text, View } from 'react-native';
import { fetchMatches } from '../api/api';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { Header } from '@/components/Header';

export default function App() {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header onRetry={refetch} isError={isError} isDisabled={isFetching} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
