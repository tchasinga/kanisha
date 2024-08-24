import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import BImage from "@/assets/meditation-images/beach.webp";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={BImage} resizeMode="cover" className="flex-1 justify-center items-center">
        <Text className="text-black text-lg">The best is coming now</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
