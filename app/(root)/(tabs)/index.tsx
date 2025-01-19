import Card from "@/components/card";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation<any>();

  const handleRoute = () => {
    let ans = false;
    if (ans) {
      navigation.navigate("profile");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      <Link href={"/properties/35"}>property</Link>
    </View>
  );
}
