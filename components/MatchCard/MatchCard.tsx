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
    <Pressable
      onPress={() => setIsOpen((state) => !state)}
      style={[styles.wrapperCard, isMobile && styles.mobileWrapperCard]}
    >
      <View
        style={[
          styles.shortInfoWrapper,
          isMobile && styles.mobileShortInfoWrapper,
        ]}
      >
        <View style={styles.commandWrapper}>
          <TeamIcon width={24} height={24} />
          <Text style={[GlobalStyles.text, ComponentStyles.text]}>
            {homeTeam.name}
          </Text>
        </View>
        <View style={styles.statusWrapper}>
          <AnimatedScore homeScore={homeScore} awayScore={awayScore} />
          <CardStatus status={status} />
        </View>
        <View style={[styles.commandWrapper, styles.commandWrapperRevers]}>
          <TeamIcon width={24} height={24} />
          <Text style={[GlobalStyles.text, ComponentStyles.text]}>
            {awayTeam.name}
          </Text>
        </View>
        <View
          style={[styles.iconWrapper, isMobile && styles.mobileIconWrapper]}
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
    gap: 8,
  },
  shortInfoWrapper: {
    position: 'relative',
    display: 'flex',
    minHeight: 52,
    paddingRight: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // alignSelf: 'stretch',
    // flexBasis: '100%',
  },
  mobileShortInfoWrapper: {
    paddingRight: 0,
    flexWrap: 'wrap',
    gap: 8,
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
    gap: 16,
    alignItems: 'flex-start',
    width: '100%',
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
  iconWrapper: {
    position: 'absolute',
    right: 0,
  },
  mobileIconWrapper: {
    position: 'static',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});
