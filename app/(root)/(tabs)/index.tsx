import Card from "@/components/card";
import seed from "@/utils/seed";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
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
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="seed" onPress={seed} />
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
    </SafeAreaView>
  );
}
