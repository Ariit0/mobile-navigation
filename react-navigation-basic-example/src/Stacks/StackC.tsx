import { createStackNavigator } from "@react-navigation/stack";
import Screen from "../Screen";

export type StackCParamList = {
  ScreenG: { letter: string };
  ScreenH: { letter: string };
  ScreenI: { letter: string };
  ScreenJ: { letter: string };
};

const Stack = createStackNavigator<StackCParamList>();

export default function StackC() {
  return (
    <Stack.Navigator initialRouteName="ScreenG">
      <Stack.Screen
        name="ScreenG"
        initialParams={{ letter: "G" }}
        component={Screen}
      />
      <Stack.Screen
        name="ScreenH"
        initialParams={{ letter: "H" }}
        component={Screen}
      />
      <Stack.Screen
        name="ScreenI"
        initialParams={{ letter: "I" }}
        component={Screen}
      />
      <Stack.Screen
        name="ScreenJ"
        initialParams={{ letter: "J" }}
        component={Screen}
      />
    </Stack.Navigator>
  );
}
