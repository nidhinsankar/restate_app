import {
  Client,
  Account,
  ID,
  Avatars,
  OAuthProvider,
  Databases,
} from "react-native-appwrite";
import { makeRedirectUri } from "expo-auth-session";
import { openAuthSessionAsync } from "expo-web-browser";
import { Platform } from "react-native";
export const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
  galleriesId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID!,
  agentsId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID!,
  reviewsId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID!,
  propertiesId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID!,
};
export const client = new Client();
client.setEndpoint(config.endpoint).setProject(config.projectId);
switch (Platform.OS) {
  case "ios":
    client.setPlatform(config.platform);
}

console.log(config.endpoint, config.projectId, config.platform);

export const account = new Account(client);
export const avatar = new Avatars(client);
export const databases = new Databases(client);

export async function login() {
  try {
    let redirectUri = makeRedirectUri({ preferLocalhost: true });
    if (!redirectUri.includes("localhost")) {
      redirectUri = `${redirectUri}localhost`;
    }

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response) throw new Error("Unable to create token");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    if (browserResult.type !== "success") {
      console.log(browserResult);

      throw new Error("create oauth2 token failed to authenticate");
    }
    const url = new URL(browserResult.url);
    const userId = url.searchParams.get("userId")?.toString();
    const secret = url.searchParams.get("secret")?.toString();
    if (!userId || !secret)
      throw new Error("create oauth2 token failed Unable to authenticate");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Unable to create session");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    const response = await account.deleteSession("current");
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatar.getInitials(result.$id);
      return { ...result, avatar: userAvatar.toString() };
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
