import { View , Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView>
    <View className='text-lg'>
      <Text>The best is comming now</Text>
    </View>
    </SafeAreaView>
  );
}

