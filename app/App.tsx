import { View } from 'react-native';
import { fetchMatches } from '../api/api';
import { useQuery } from '@tanstack/react-query';
import { Header } from '@/components/Header';
import { MatchCard } from '@/components/MatchCard';

export default function App() {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  return (
    <View
      style={{
        backgroundColor: '#000',
        height: '100%',
      }}
    >
      <Header onRetry={refetch} isError={isError} isDisabled={isFetching} />
      {data?.data.matches.map((match, index) => (
        <MatchCard
          key={index}
          homeTeamName={match.homeTeam.name}
          awayTeamName={match.awayTeam.name}
          homeScore={match.homeScore}
          awayScore={match.awayScore}
          status={match.status}
        />
      ))}
    </View>
  );
}
