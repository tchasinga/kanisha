import { Image, View, Text, FlatList, Pressable } from "react-native";
import { Link } from "@react-navigation/native";
import { GalleryPreviewData } from "@/constants/models/AffirmationColomer";
import images from "@/constants/affirmationforimages";

interface GuidedAffirmationsGalleryProps {
    title: string;
    products: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
    title,
    products,
}: GuidedAffirmationsGalleryProps) => {
    return (
        <View className="my-5">
            <View className="mb-2">
                <Text className="text-white font-bold text-xl">{title}</Text>
            </View>
            <View className="space-y-2">
                <FlatList 
                    data={products} 
                    showsHorizontalScrollIndicator={false} 
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Link to={`/affirmation/${item.id.toString()}`} >
                           <Pressable>
                                <View className="h-36 w-32 rounded-md mr-4">
                                    <Image
                                        source={item.image}
                                        resizeMode="cover"
                                        className="w-full h-full"
                                    />
                                    <Text>ProductGallery</Text>
                                </View>
                            </Pressable>
                        </Link>
                    )} 
                    horizontal  
                />
            </View>
        </View>
    );
};

export default GuidedAffirmationsGallery;
