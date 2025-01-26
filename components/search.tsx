import icons from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

const Search = () => {
  return (
    <View className=" flex flex-row items-center justify-between w-full bg-[#fbfbfd] border border-purple-50 rounded-lg mt-4 px-4 py-2">
      <View className=" flex flex-row  items-center justify-start w-full">
        <Image source={icons.search} className="size-6" />
        <TextInput className=" px-4 flex-1" placeholder="Search Something" />
        <Image source={icons.filter} className="size-6" />
      </View>
    </View>
  );
};

export default Search;
