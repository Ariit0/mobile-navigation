import "react-native-gesture-handler";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import StackA, { StackAParamList } from "./src/Stacks/StackA";
import StackB, { StackBParamList } from "./src/Stacks/StackB";
import StackC, { StackCParamList } from "./src/Stacks/StackC";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootTabParamList = {
  StackA: NavigatorScreenParams<StackAParamList>;
  StackB: NavigatorScreenParams<StackBParamList>;
  StackC: NavigatorScreenParams<StackCParamList>;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        detachInactiveScreens
        screenOptions={{ unmountOnBlur: true }}
      >
        <Tab.Screen name="StackA" component={StackA} />
        <Tab.Screen name="StackB" component={StackB} />
        <Tab.Screen name="StackC" component={StackC} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
