import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationColomer'
import AFFIRMATION_GALLERY from '@/constants/affirmationgallery'

const AffirmationIdindex = () => {
   const {itemId} = useLocalSearchParams()
   const [affirmation, setAffirmation] = useState<GalleryPreviewData>()


   useEffect(() => {
    for(let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
        const affirmationData =  AFFIRMATION_GALLERY[idx].data;

        const affirmationToStart = affirmationData.find(
            (a) => a.id === Number(itemId)
        )

        if(affirmationToStart){
            setAffirmation(affirmationToStart)
            return;
        }
    }
   })


  return (
    <View>
      <Text>AffirmationIdindex</Text>
    </View>
  )
}

export default AffirmationIdindex