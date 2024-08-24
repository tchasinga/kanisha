import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppGradiant from '@/components/Appgradient'
import AFFIRMATION_GALLERY from '@/constants/affirmationgallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'

const Affirmation = () => {
  return (
    <SafeAreaView className='flex-1'>
        <AppGradiant colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className='text-slate-200 font-bold text-2xl'>Life is all about persepction</Text>

                <View>
                {AFFIRMATION_GALLERY.map((g) => (
                            <GuidedAffirmationsGallery
                                key={g.title}
                                title={g.title}
                                products={g.data}
                            />
                        ))}
                </View>
            </ScrollView>
        </AppGradiant>
    </SafeAreaView>
  )
}

export default Affirmation