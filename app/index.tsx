import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import BImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from 'expo-linear-gradient';
import CustomButtom from '@/components/CustomButtom';
import { useRouter } from 'expo-router';
import AppGradiant from '@/components/Appgradient';



export default function HomeScreen() {

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={BImage} resizeMode="cover" className="flex-1">
        <AppGradiant colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
          <SafeAreaView className='flex-1 justify-between px-1'>
            <View>
              <Text className="text-white text-center font-bold text-3xl">Zua tango</Text>
              <Text className='text-white text-center text-sm'>Relax & take note, more you read more you learn</Text>
            </View>

            <View className='my-12'>
              <CustomButtom onPress={() => router.navigate("/naturemeditate")}  title='Get stared now'/>
            </View>
            <StatusBar style="dark" />
          </SafeAreaView>
        </AppGradiant>
      </ImageBackground>
    </SafeAreaView>
  );
}
