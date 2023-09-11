import { createStackNavigator } from "@react-navigation/stack";
import Screen from "../Screen";
import SharedScreenFlow, {
  SharedScreenFlowParamList,
} from "./Flow/SharedScreenFlow";

export type StackBParamList = {
  ScreenE: { letter: string };
  ScreenF: { letter: string };
} & SharedScreenFlowParamList;

const Stack = createStackNavigator<StackBParamList>();

export default function StackB() {
  return (
    <Stack.Navigator initialRouteName="ScreenE">
      <Stack.Screen
        name="ScreenE"
        initialParams={{ letter: "E" }}
        component={Screen}
      />
      <Stack.Screen
        name="ScreenF"
        initialParams={{ letter: "F" }}
        component={Screen}
      />
      {SharedScreenFlow({ Stack })}
    </Stack.Navigator>
  );
}
