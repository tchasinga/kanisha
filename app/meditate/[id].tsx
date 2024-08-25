import { View, Text, ImageBackground, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import meditationImage from '@/constants/fileformeditation'
import AppGradiant from '@/components/Appgradient'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

const Meditate = () => {

  const { itemId } = useLocalSearchParams();

  return (
    <SafeAreaView className='flex-1'>
        <ImageBackground source={meditationImage[Number(itemId) - 1]} className='flex-1' resizeMode='cover'> 
            <AppGradiant colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
            <Text className='text-white text-2xl text-center'>Meditate</Text>
            <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10 bg-white rounded-full p-2 shadow-md'>
              <AntDesign name="back" size={24} color="black" />
            </Pressable>
            </AppGradiant>
        </ImageBackground>
    </SafeAreaView>
  ) 
}

export default Meditate