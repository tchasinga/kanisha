import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import TimerProvider, { TimerContext } from '@/context/Timercontext';
import '../global.css';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/RobotoMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <TimerProvider>
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      <Stack.Screen name='index' options={{headerShown: false}}/>
      <Stack.Screen name='meditate/[id]' options={{headerShown: false}}/>
      <Stack.Screen name='(modal)/adjustdurationmeditationduration' options={{headerShown: false, presentation: 'modal'}}/>
    </Stack>
    </TimerProvider>
  );
}
