import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();

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
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/profile"}>profile</Link>
      <Text
        onPress={() => {
          handleRoute();
        }}
      >
        profilehdjfv
      </Text>
    </View>
  );
}
