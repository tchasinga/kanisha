import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tabs } from 'expo-router'
import Color from '@/constants/Color'

const RoomerDesignerLayoutlayout = () => {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.primary,
    }}
    >
      <Tabs.Screen name="naturemeditate" options={{tabBarLabel: "Meditate"}} />
      
    </Tabs>
  )
}

export default RoomerDesignerLayoutlayout