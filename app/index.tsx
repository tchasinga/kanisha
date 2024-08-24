import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function componentName() {
  return (
    <SafeAreaView>
        <View>
        <Text></Text>
        </View>
        <StatusBar style='auto'/>
     </SafeAreaView>
  );
}
