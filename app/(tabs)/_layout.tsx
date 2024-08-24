import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tabs } from 'expo-router'
import Color from '@/constants/Color'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const RoomerDesignerLayoutlayout = () => {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.primary,
    }}
    >
      <Tabs.Screen name="naturemeditate" options={{tabBarLabel: "Meditate", 
        tabBarIcon:({color}) => (
            <FontAwesome5 name="book-reader" size={24} color="black" />
        )
      }} />

    </Tabs>
  )
}

export default RoomerDesignerLayoutlayout