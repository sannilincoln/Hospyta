import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View, useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Axiforma-Black": require("../assets/fonts/Axiforma-Black.ttf"),
    "Axiforma-Bold": require("../assets/fonts/Axiforma-Bold.ttf"),
    "Axiforma-Medium": require("../assets/fonts/Axiforma-Medium.ttf"),
    "Axiforma-Regular": require("../assets/fonts/Axiforma-Regular.ttf"),
    "GothamPro-Black": require("../assets/fonts/GothamPro-Black.ttf"),
    "GothamPro-Bold": require("../assets/fonts/GothamPro-Bold.ttf"),
    "GothamPro-Medium": require("../assets/fonts/GothamPro-Medium.ttf"),
    "GothamPro-Light": require("../assets/fonts/GothamPro-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
