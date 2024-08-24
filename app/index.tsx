import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import BImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from 'expo-linear-gradient';
import CustomButtom from '@/components/CustomButtom';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={BImage} resizeMode="cover" className="flex-1">
        <LinearGradient className='flex-1' colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
          <SafeAreaView className='flex-1 justify-between mx-5'>
            <View>
              <Text className="text-white text-center font-bold text-3xl">Zua tango</Text>
              <Text className='text-white text-center text-sm'>Relax & take note, more you read more you learn</Text>
            </View>

            <View className='my-12'>
              <CustomButtom onPress={() => console.log("tap this game")}  title='Get stared now'/>
            </View>
            <StatusBar style="dark" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}
