import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Slot, Stack } from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      <Stack.Screen name='index' options={{headerShown: false}}/>
    </Stack>
  );
}
