import { ScrollView, View } from 'react-native';
import { fetchMatches } from '../api/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Header } from '@/components/Header';
import { MatchCard } from '@/components/MatchCard';
import { useWebSocket } from '@/api/ws';
import { useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('All');
  const queryClient = useQueryClient();

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
    select: (data) => {
      if (status === 'All') {
        return data;
      }

      return {
        ...data,
        data: {
          ...data.data,
          matches: data.data.matches.filter((match) => match.status === status),
        },
      };
    },
  });

  useWebSocket((wsData) => {
    queryClient.setQueryData<typeof data>(['matches'], (oldData) => {
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
        backgroundColor: 'rgba(6, 8, 12, 1)',
        height: '100%',
      }}
    >
      <Header
        onRetry={refetch}
        isError={isError}
        isDisabled={isFetching}
        currentStatus={status}
        setCurrentStatus={setStatus}
      />
      <ScrollView>
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
      </ScrollView>
    </View>
  );
}
