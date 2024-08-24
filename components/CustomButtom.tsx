import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyle?: string;
    containerStyles?: string;
}  

const CustomButtom = ({ onPress, title, textStyle = "", containerStyles = "", }: CustomButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} 
        className={`bg-white rounded-xl min-h-[62px] justify-center ${containerStyles}`}
        onPress={onPress}
        >
            <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButtom