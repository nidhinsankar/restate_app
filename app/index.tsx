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
      <Text className="font-light">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/profile"} className="font-rubik">
        profile
      </Link>
      <Link href={"/sign-in"}>Sign-in</Link>

      <Card />
    </View>
  );
}
