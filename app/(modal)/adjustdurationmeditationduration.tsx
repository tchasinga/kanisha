import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppGradient from '@/components/Appgradient';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomButtom from '@/components/CustomButtom';
import { TimerContext } from '@/context/Timercontext';

const Adjustdurationmeditationduration = () => {

    const { setDuration } = useContext(TimerContext);

    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    };

  return (
    <View className="flex-1 relative">
            <AppGradient
                // Background Linear Gradient
                colors={["#161b2e", "#0a4d4a", "#766e67"]}
            >
                <Pressable
                    onPress={() => router.back()}
                    className="absolute top-8 left-6 z-10 bg-white p-4 rounded-full"
                >
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
                <View className="justify-center h-4/5">
                    <View>
                        <Text className="text-center font-bold text-3xl text-white pt-[30%] pb-[10%]">
                            Adjust your meditation duration
                        </Text>
                    </View>

                    <View>
                        <CustomButtom
                            title="10 seconds"
                            onPress={() => handlePress(10)}
                            containerStyles="mb-5"
                        />
                        <CustomButtom
                            title="5 minutes"
                            onPress={() => handlePress(5 * 60)}
                            containerStyles="mb-5"
                        />
                        <CustomButtom
                            title="10 minutes"
                            onPress={() => handlePress(10 * 60)}
                            containerStyles="mb-5"
                        />
                        <CustomButtom
                            title="15 minutes"
                            onPress={() => handlePress(15 * 60)}
                            containerStyles="mb-5"
                        />
                    </View>
                </View>
            </AppGradient>
        </View>
  )
}

export default Adjustdurationmeditationduration