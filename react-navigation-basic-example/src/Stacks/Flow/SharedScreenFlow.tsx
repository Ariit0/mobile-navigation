import Screen from "../../Screen";

interface SharedScreenFlowProps {
  Stack: any; // cbf with typing for this
}

export type SharedScreenFlowParamList = {
  ScreenC: { letter: string };
  ScreenD: { letter: string };
};

const SharedScreenFlow = ({ Stack }: SharedScreenFlowProps) => {
  return (
    <>
      <Stack.Screen
        name="ScreenC"
        initialParams={{ letter: "C" }}
        component={Screen}
      />
      <Stack.Screen
        name="ScreenD"
        initialParams={{ letter: "D" }}
        component={Screen}
      />
    </>
  );
};

export default SharedScreenFlow;
