import icons from "@/constants/icons";
import images from "@/constants/images";
import { Text, View, Image } from "react-native";
interface IFeatureCardProps {
  title: string;
  location: string;
  price: string;
  rating: number;
  image: any;
  category: string;
}
export const FeatureCard = ({
  category,
  image,
  location,
  price,
  rating,
  title,
}: IFeatureCardProps) => {
  return (
    <View className="bg-red-400 rounded-2xl w-52 h-80  relative shadow-black-100/70">
      <Image source={image} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
      <View className="flex-row items-center gap-2 absolute top-2 right-2 p-2 bg-white rounded-full px-3">
        <Image source={icons.star} />
        <Text className="text-black-200">{rating}</Text>
      </View>
      <View className="absolute bottom-0 p-2 flex-col gap-2 py-4 px-4">
        <Text
          numberOfLines={1}
          className=" text-xl font-rubik-semibold text-white"
        >
          {title}
        </Text>
        <Text
          numberOfLines={1}
          className="text-base  font-rubik-semibold text-white"
        >
          {location}
        </Text>
        <View className="flex-row items-center gap-2 justify-between w-full">
          <Text className="font-rubik-semibold text-white">{price}</Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </View>
  );
};

export const Card = ({
  category,
  image,
  location,
  price,
  rating,
  title,
}: IFeatureCardProps) => {
  return (
    <View className="flex-1 flex-col gap-2 mx-2 bg-accent-100 my-4 p-4 rounded-lg relative shadow-lg shadow-black-100/70">
      <View>
        <Image source={image} className="size-20 w-full h-40" />
        <View className="flex-col gap-2  ">
          <Text>{title}</Text>
          <Text>{location}</Text>
          <View className="flex-row items-center gap-2 justify-between w-full">
            <Text>{price}</Text>
            <Image
              source={icons.heart}
              className="size-5"
              tintColor="#191D31"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
