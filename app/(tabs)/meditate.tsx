import { View, Text, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import meditationImage from '@/constants/fileformeditation'
import AppGradiant from '@/components/Appgradient'

const Meditate = () => {
  return (
    <SafeAreaView className='flex-1'>
        <ImageBackground source={meditationImage[0]} className='flex-1' resizeMode='cover'> 
            <AppGradiant colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
            <Text className='text-white text-2xl text-center'>Meditate</Text>
            </AppGradiant>
        </ImageBackground>
    </SafeAreaView>
  ) 
}

export default Meditate