import { Stack } from 'expo-router';
import {
  useFonts,
  Inter_600SemiBold,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import { View, StyleSheet, Text } from 'react-native';
import { useCallback } from 'react';
import { Loader } from '@/components/Loader';
import { useIsMobile } from './hooks';

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
  });
  const isMobile = useIsMobile();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      //
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <Loader />;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={[styles.container, isMobile && styles.containerMobile]}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(6, 8, 12, 1)',
    padding: 42,
    minWidth: 320,
  },
  containerMobile: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  text: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter_600SemiBold',
    fontWeight: '600',
    lineHeight: 1.5 * 16, // 1.5 * font-size
  },
});

export const GlobalStyles = styles;
