import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, View } from "react-native";

interface IProfileLink {
  icon: any;
  title: string;
}

export const ProfileLink = ({ icon, title }: IProfileLink) => {
  return (
    <View className="flex flex-row items-center justify-between my-4">
      <View className="flex flex-row items-center">
        <Image source={icon} />
        <Text className="font-rubik-semibold text-2xl">{title}</Text>
      </View>
      <Image source={icons.rightArrow} />
    </View>
  );
};
