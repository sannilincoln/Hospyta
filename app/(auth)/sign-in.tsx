import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Icon } from "@rneui/themed";
import FormField from "@/components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="h-full bg-hoffWhite ">
      <View className="items-center mt-20 ">
        <Text className="font-axibold text-[32px]  text-hblack">
          Register Account
        </Text>
        <Text className="font-Gotlight text-[16px] mt-5 text-[#717171] w-[300px] text-center">
          Fill your details or continue with social media
        </Text>
      </View>

      {/* <FormField
        title="Username"
        value={form.username}
        handleChangeText={() => console.log()}
        otherStyles="mt-7"
      /> */}
    </SafeAreaView>
  );
};

export default SignIn;
