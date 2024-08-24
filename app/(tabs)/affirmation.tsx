import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppGradiant from '@/components/Appgradient'

const Affirmation = () => {
  return (
    <SafeAreaView className='flex-1'>
        <AppGradiant colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className='text-slate-200 font-bold text-2xl'>Life is all about persepction</Text>

                <View>
                     
                </View>
            </ScrollView>
        </AppGradiant>
    </SafeAreaView>
  )
}

export default Affirmation