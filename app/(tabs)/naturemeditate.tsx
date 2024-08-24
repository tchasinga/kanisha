import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppGradiant from '@/components/Appgradient'
import myGradient from '@/hooks/myGradient'


const Naturemeditate = () => {
    return (
        <SafeAreaView className='flex-1'>
            <AppGradiant colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
                <View className='mb-6'>
                    <Text className='text-slate-200 mb-3 font-bold text-3xl text-left'> Nature Meditate</Text>
                </View>
            </AppGradiant>
        </SafeAreaView>
    )
}

export default Naturemeditate