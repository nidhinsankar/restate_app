import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "90%",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#234234",
  },
});
