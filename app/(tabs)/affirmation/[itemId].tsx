import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationColomer';
import AFFIRMATION_GALLERY from '@/constants/affirmationgallery';
import { AntDesign } from "@expo/vector-icons";
import AppGradient from '@/components/Appgradient';

const AffirmationIdIndex = () => {
    const { itemId } = useLocalSearchParams();
    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmationData.find(
                (a) => a.id === Number(itemId)
            );

            if (affirmationToStart) {
                setAffirmation(affirmationToStart);
                return;
            }
        }
    }, [itemId]);

    return (
        <View className="flex-1">
                <ImageBackground
                    source={affirmation?.image}
                    resizeMode="cover"
                    className="flex-1"
                >
                    <AppGradient colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>

                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>
                        <Text className="text-white text-lg font-bold">
                            {affirmation?.text}
                        </Text>
                    </ScrollView>
                    <Pressable
                        onPress={() => router.back()}
                        className="absolute top-12 left-6 p-2 bg-black bg-opacity-50 rounded-full"
                    >
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </Pressable>
                    </AppGradient>
                </ImageBackground>
            
        </View>
    );
};

export default AffirmationIdIndex;
