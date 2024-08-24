import { View , Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';



export default function HomeScreen() {
  return (
    <SafeAreaView>
    <View className='text-lg'>
      <Text className='text-white'>The best is comming now</Text>
    </View>
    <StatusBar style='auto'/>
    </SafeAreaView>
  );
}

