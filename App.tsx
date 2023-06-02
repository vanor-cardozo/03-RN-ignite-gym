import { StatusBar, Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#202024",
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Text
          style={{
            fontSize: 32,
            color: "#fafafa",
            fontFamily: "Roboto_700Bold",
          }}
        >
          Ignite Gym
        </Text>
      ) : (
        <View />
      )}
    </View>
  );
}
