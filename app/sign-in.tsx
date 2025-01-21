import { login } from "@/utils/appwrite";
import { useglobalContext } from "@/utils/global-provider";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { isLoggedIn, loading, refetch, user } = useglobalContext();
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      console.log("Login success", result);
    } else {
      Alert.alert("Error", "Unable to login");
    }
  };
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
          <View className="flex gap-5 items-center justify-center py-4">
            <Text style={styles.title} className="uppercase">
              Welcome to Real Scout
            </Text>
            <Text className="text-5xl font-rubik-semibold text-[#191D31] text-center">
              Let's get closer to{" "}
              <Text className="text-blue-600">your ideal home</Text>
            </Text>
            <TouchableOpacity
              onPress={handleLogin}
              className="flex flex-row items-center gap-2 justify-center bg-[#f1f1f1] w-[80%] rounded-full py-2"
            >
              <Image source={require("@/assets/icons/google.png")} />
              <Text className="font-rubik-semibold text-2xl">
                Sign up with google
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "70%",
    backgroundColor: "#f1f1f1",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#234234",
  },
});
