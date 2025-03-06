import { Text, View } from 'react-native';
import { fetchMatches } from '../api/api';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { Header } from '@/components/Header';
import App from './App';

export default function Index() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
