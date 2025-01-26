import { ProfileLink } from "@/components/profile-link";
import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="px-4 bg-red-500">
      <ScrollView>
        <View className="flex flex-row items-center justify-between">
          <Text className=" font-rubik-Bold text-2xl">Profile</Text>
          <Image source={icons.bell} height={220} />
        </View>
        <View className="flex items-center mt-6">
          <Image source={images.avatar} />
          <Text className="font-rubik-Bold text-2xl mt-4">John Doe</Text>
        </View>
        {settings.map((setting) => (
          <ProfileLink
            icon={setting.icon}
            title={setting.title}
            key={setting.title}
          />
        ))}
        <View className="flex flex-row items-center">
          <Image source={icons.logout} />
          <Text className="font-rubik-semibold text-red-500 text-2xl">
            Logout
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
