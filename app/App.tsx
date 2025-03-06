import { View } from 'react-native';
import { fetchMatches } from '../api/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Header } from '@/components/Header';
import { MatchCard } from '@/components/MatchCard';
import { useWebSocket } from '@/api/ws';

export default function App() {
  const queryClient = useQueryClient();

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  useWebSocket((wsData) => {
    queryClient.setQueryData<typeof data>(['matches'], (oldData) => {
      console.log('oldData', oldData);

      console.log('wsData', wsData);

      if (oldData) {
        return {
          ...oldData,
          data: {
            // ...oldData.data,
            matches: wsData.data,
          },
        };
      }
    });
  });

  return (
    <View
      style={{
        backgroundColor: '#000',
        height: '100%',
      }}
    >
      <Header onRetry={refetch} isError={isError} isDisabled={isFetching} />
      {data?.data?.matches?.map((match, index) => (
        <MatchCard
          key={index}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          homeScore={match.homeScore}
          awayScore={match.awayScore}
          status={match.status}
        />
      ))}
    </View>
  );
}
