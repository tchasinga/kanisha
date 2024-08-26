import { View, Text, ImageBackground, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import meditationImage from '@/constants/fileformeditation'
import AppGradiant from '@/components/Appgradient'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import CustomButtom from '@/components/CustomButtom'

const Meditate = () => {

  const { id } = useLocalSearchParams();
  const [secondRemaining, setSecondRemaining] = React.useState(10);

  return (
    <SafeAreaView className='flex-1'>
        <ImageBackground source={meditationImage[Number(id) - 1]} className='flex-1' resizeMode='cover'> 
            <AppGradiant colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
            <Text className='text-white text-2xl text-center'>Meditate</Text>
            <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10 bg-white rounded-full p-2 shadow-md'>
              <AntDesign name="back" size={24} color="black" />
            </Pressable>

             <View className='flex-1 justify-center'>
              <View className='mx-auto bg-neutral-200 rounded-full justify-center items-center w-44 h-44 shadow-md'>
                  <Text className='text-xl font-bold'>00:00</Text>
              </View>
             </View>

             <View className='mb-4'>
                 <CustomButtom  title='Start meditation'  onPress={() => console.log('start')}  />
             </View>
            </AppGradiant>
        </ImageBackground>
    </SafeAreaView>
  ) 
}

export default Meditate