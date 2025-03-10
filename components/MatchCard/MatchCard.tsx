import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { MatchStatus, Team } from '../../api/types';
import { CardStatus } from '../CardStatus';
import { TeamInfo } from './TeamInfo';
import { GlobalStyles } from '@/app/_layout';
import TeamIcon from '../../assets/icons/comand-icon.svg'; // Убедитесь, что путь корректен
import ArrowDownIcon from '../../assets/icons/arrow-drop.svg';
import ArrowUpIcon from '../../assets/icons/chevron-up.svg';
import { ComponentStyles } from './styles';
import { useIsMobile } from '@/app/hooks';
import { Divider } from './Divider';

const AnimatedScore: React.FC<{
  homeScore: number;
  awayScore: number;
}> = ({ homeScore, awayScore }) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(1.2, {
      damping: 10,
      stiffness: 100,
    });

    setTimeout(() => {
      scale.value = withTiming(1, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
    }, 250);
  }, [homeScore, awayScore]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.Text style={[GlobalStyles.text, styles.score, animatedStyle]}>
      {`${homeScore} : ${awayScore}`}
    </Animated.Text>
  );
};

interface Props {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export const MatchCard: React.FC<Props> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Pressable onPress={() => setIsOpen((state) => !state)}>
      <View style={[styles.wrapperCard, isMobile && styles.mobileWrapperCard]}>
        <View
          style={[styles.shortInfoWrapper, isMobile && { flexWrap: 'wrap' }]}
        >
          <View style={[styles.scoresInfoWrapper, { width: '100%' }]}>
            <View style={styles.commandWrapper}>
              <TeamIcon width={24} height={24} />
              <Text style={[GlobalStyles.text, ComponentStyles.text]}>
                {homeTeam.name}
              </Text>
            </View>
            <View style={[styles.statusWrapper]}>
              <AnimatedScore homeScore={homeScore} awayScore={awayScore} />
              <CardStatus status={status} />
            </View>
            <View
              style={[
                styles.commandWrapper,
                styles.commandWrapperRevers,
                isMobile && styles.mobileCommandWrapper,
              ]}
            >
              <TeamIcon width={24} height={24} />
              <Text style={[GlobalStyles.text, styles.teamName]}>
                {awayTeam.name}
              </Text>
            </View>
          </View>
          <View
            style={[
              { width: 28, marginLeft: 10 },
              isMobile && styles.mobileDropdownButton,
            ]}
          >
            {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </View>
        </View>
        {isOpen && (
          <View
            style={[
              styles.teamsInfoWrapper,
              isMobile && styles.mobileTeamsInfoWrapper,
            ]}
          >
            <TeamInfo team={homeTeam} />
            {isMobile && <Divider />}
            <TeamInfo team={awayTeam} />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCard: {
    display: 'flex',
    paddingVertical: 16,
    paddingHorizontal: 36,
    marginBottom: 15,
    borderRadius: 4,
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(11, 14, 18, 1)',
    width: '100%',
    flexShrink: 0,
  },
  mobileWrapperCard: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  shortInfoWrapper: {
    display: 'flex',
    minHeight: 52,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignSelf: 'stretch',
    // flexBasis: '100%',
  },
  scoresInfoWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    flexShrink: 0,
    justifyContent: 'space-between',
  },
  teamsInfoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 32,
    alignItems: 'center',
  },
  mobileTeamsInfoWrapper: {
    width: '100%',
    flexShrink: 0,
    flexDirection: 'column',
    gap: 8,
  },
  commandWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 14,
  },
  mobileCommandWrapper: {
    gap: 6,
  },
  commandWrapperRevers: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  statusWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 2,
  },
  mobileDropdownButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexGrow: 1,
    width: '100%',
    marginTop: 8,
    marginLeft: 10,
  },
});
