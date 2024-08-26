import { View, Text, ImageBackground, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useContext, useEffect } from 'react';
import meditationImage from '@/constants/fileformeditation';
import AppGradiant from '@/components/Appgradient';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomButtom from '@/components/CustomButtom';
import { Audio } from 'expo-av';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/meditationData';
import { TimerContext } from '@/context/Timercontext';

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const {duration:secondRemaining, setDuration} = useContext(TimerContext) 
  // const [secondRemaining, setSecondRemaining] = React.useState(10);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audioSound, setAudioSound] = React.useState<Audio.Sound | null>(null);
  const [isPlayingSound, setIsPlayingSound] = React.useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (secondRemaining === 0) {
      setIsPlaying(false);
      return;
    }

    if (isPlaying) {
      timerId = setTimeout(() => {
        setDuration(secondRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondRemaining, isPlaying]);

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  const toggleMeditationSessionStatus = async () => {
    if (secondRemaining === 0) setDuration(10);
    setIsPlaying(!isPlaying);
    await togglePlaySound();
  };

  const togglePlaySound = async () => {
    if (!audioSound) {
      const sound = await initializeSound();
      setAudioSound(sound);
      await sound.playAsync();
      setIsPlayingSound(true);
    } else {
      const status = await audioSound.getStatusAsync();

      if (status.isLoaded && !isPlayingSound) {
        await audioSound.playAsync();
        setIsPlayingSound(true);
      } else {
        await audioSound.pauseAsync();
        setIsPlayingSound(false);
      }
    }
  };

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
    return sound;
  };

  const handlerAdjustDuration = () => {
    if(isPlaying) toggleMeditationSessionStatus()
      router.push("/(modal)/adjustdurationmeditationduration")
  }

  const formattedTimeMinutes = String(Math.floor(secondRemaining / 60)).padStart(2, '0');
  const formattedTimeSeconds = String(secondRemaining % 60).padStart(2, '0');

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={meditationImage[Number(id) - 1]} className="flex-1" resizeMode="cover">
        <AppGradiant colors={['rgba(0,0,0, 0.4)', 'rgba(0,0,0, 0.8)']}>
          <Text className="text-white text-2xl text-center">Meditate</Text>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <AntDesign name="back" size={24} color="black" />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full justify-center items-center w-44 h-44 shadow-md">
              <Text className="text-xl font-bold">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-4 gap-4">
            <CustomButtom title={isPlaying ? 'Pause Meditation' : 'Start Meditation'} onPress={toggleMeditationSessionStatus} />
            <CustomButtom title={'fix timer'} containerStyles='my-4' onPress={handlerAdjustDuration} />
          </View>
        </AppGradiant>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Meditate;
