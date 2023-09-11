import { createStackNavigator } from "@react-navigation/stack";
import Screen from "../Screen";
import SharedScreenFlow, {
  SharedScreenFlowParamList,
} from "./Flow/SharedScreenFlow";

export type StackAParamList = {
  ScreenA: { letter: string };
  ScreenB: { letter: string };
} & SharedScreenFlowParamList;

const Stack = createStackNavigator<StackAParamList>();

export default function StackA() {
  return (
    <Stack.Navigator initialRouteName="ScreenA">
      <Stack.Screen
        name="ScreenA"
        initialParams={{ letter: "A" }}
        component={Screen}
      />
      <Stack.Screen
        name="ScreenB"
        initialParams={{ letter: "B" }}
        component={Screen}
      />
      {SharedScreenFlow({ Stack })}
    </Stack.Navigator>
  );
}
