import { Card, FeatureCard } from "@/components/card";
import Search from "@/components/search";
import { cards, featuredCards, settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import seed from "@/utils/seed";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const navigation = useNavigation<any>();

  const handleRoute = () => {
    let ans = false;
    if (ans) {
      navigation.navigate("profile");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full w-full px-4">
      <ScrollView>
        <View className="flex-row justify-between items-center my-3">
          <View className="flex-row items-center gap-3">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View>
              <Text className="text-xs font-rubik text-black">
                Good morning
              </Text>
              <Text className="text-sm font-rubik-semibold">Nidhin Sankar</Text>
            </View>
          </View>
          <Image className="size-8" source={icons.bell} />
        </View>
        <Search />
        <View className="my-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-rubik-semibold">Featured</Text>
            <Text className="text-lg font-rubik-semibold text-primary-300">
              See All
            </Text>
          </View>
          <FlatList
            data={featuredCards}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="flex-row gap-4 mt-5"
            renderItem={({ item }) => (
              <FeatureCard
                category={item.category}
                image={item.image}
                location={item.location}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />
            )}
            keyExtractor={(item) => item.title}
          />
        </View>
        <View className="my-4">
          <View className="flex flex-row justify-between items-center">
            <Text className="font-rubik-semibold text-2xl">
              Our Recommendations
            </Text>
            <Text className="text-primary-300 font-rubik-semibold text-lg">
              See All
            </Text>
          </View>
        </View>
        <FlatList
          data={cards}
          key={"_"}
          keyExtractor={(item) => item.title}
          numColumns={2}
          renderItem={({ item }) => (
            <Card
              category={item.category}
              image={item.image}
              location={item.location}
              price={item.price}
              rating={item.rating}
              title={item.title}
            />
          )}
          contentContainerClassName="pb-20"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

{
  /* <Button title="seed" onPress={seed} />
      <Link href={"/profile"} className="font-rubik">
        profile
      </Link>
      <Link href={"/sign-in"}>Sign-in</Link>
      <Link href={"/explore"}>explore</Link>
      <Text
        onPress={() => {
          handleRoute();
        }}
      >
        profilehdjfv
      </Text>
      <Link href={"/properties/35"}>property</Link> */
}
