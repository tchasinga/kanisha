import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppGradiant from '@/components/Appgradient'
import myGradient from '@/hooks/myGradient'
import { StatusBar } from 'expo-status-bar'
import { MEDITATION_DATA } from '../../constants/meditationData';
import MEDITATIONimage from '@/constants/fileformeditation'


const Naturemeditate = () => {
    return (
        <SafeAreaView className='flex-1'>
            <AppGradiant colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
                <View className='mb-6'>
                    <Text className='text-slate-200  font-bold text-2xl text-left'> Welcome to Nature Meditate</Text>
                    <Text className='text-slate-200 text-start'>Relax & take note......</Text>
                </View>
                 
                 <View>
                    <FlatList 
                    data={MEDITATION_DATA} 
                    className='mb-20'
                    keyExtractor={(item) => item.id.toString()} 
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Pressable
                        onPress={() => console.log('item is there now')}
                        className='h-48 my-3 rounded-md overflow-hidden'
                        >
                           <ImageBackground source={MEDITATIONimage[item.id -1]}
                           resizeMode='cover'
                           className='flex-1 rounded-xl justify-center'
                           >
                            <Text className=' text-slate-300  text-2xl font-bold left-[20px] top-[30px]'>{item.title}</Text>
                          </ImageBackground> 
                        </Pressable>
                    )}
                    />
                 </View>
            </AppGradiant>
            <StatusBar style='dark' />
        </SafeAreaView>
    )
}

export default Naturemeditate