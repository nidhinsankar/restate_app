import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <SafeAreaView>
        <Text>Single property {id}</Text>
      </SafeAreaView>
    </View>
  );
};
export default Property;
