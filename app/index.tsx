import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

export default function Index() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
