import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            height: "100%",
          }}
        >
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require("../assets/images/onboarding.png")}
          />
          <View>
            <Text style={styles.title}>Welcome to Real Scout</Text>
            <Text className="text-2xl font-bold text-red-400 text-center">
              Let's get closer to your ideal home
            </Text>
            <Text>Login to real scout using google</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
