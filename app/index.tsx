import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center gap-4">
      <Text>onboarding pagerd</Text>
      <Button title="Sign-in" onPress={() => router.push("/sign-in")} />
    </SafeAreaView>
  );
};

export default App;
