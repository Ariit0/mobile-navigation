import { View, Text, Button, Alert } from "react-native";
import { StackAParamList } from "./Stacks/StackA";
import { StackBParamList } from "./Stacks/StackB";
import { StackCParamList } from "./Stacks/StackC";
import { StackScreenProps } from "@react-navigation/stack";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from "@react-navigation/core";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../App";

type AppStackScreenProps = StackScreenProps<
  StackAParamList & StackBParamList & StackCParamList,
  | "ScreenA"
  | "ScreenB"
  | "ScreenC"
  | "ScreenD"
  | "ScreenE"
  | "ScreenF"
  | "ScreenG"
  | "ScreenH"
  | "ScreenI"
  | "ScreenJ"
>;

interface ScreenProps extends AppStackScreenProps {}

const Screen = ({ navigation, route }: ScreenProps) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Screen A"
        onPress={() => navigation.navigate("ScreenA", { letter: "A" })}
      />
      <Button
        title="Go to Screen B"
        onPress={() => navigation.navigate("ScreenB", { letter: "B" })}
      />
      <Button
        title="Go to Screen C"
        onPress={() => navigation.navigate("ScreenC", { letter: "C" })}
      />
      <Button
        title="Go to Screen D"
        onPress={() => navigation.navigate("ScreenD", { letter: "D" })}
      />
      <Button
        title="Go to Screen E"
        onPress={() => navigation.navigate("ScreenE", { letter: "E" })}
      />
      <Button
        title="Go to Screen F"
        onPress={() => navigation.navigate("ScreenF", { letter: "F" })}
      />
      <Button
        title="Go to Screen G"
        onPress={() => navigation.navigate("ScreenG", { letter: "G" })}
      />
      <Button
        title="Go to Screen H"
        onPress={() => navigation.navigate("ScreenH", { letter: "H" })}
      />
      <Button
        title="Go to Screen I"
        onPress={() => navigation.navigate("ScreenI", { letter: "I" })}
      />
      <Button
        title="Go to Screen J"
        onPress={() => navigation.navigate("ScreenJ", { letter: "J" })}
      />
    </View>
  );
};

export default Screen;
