import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import GetStartedScreen from "../ui/GetStartedScreen";

import MainStack from "./tabNavigation";

const Stack = createStackNavigator();

const StackNavigator = () => {
    
    return(
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
                {/* On Boarding */}
                <Stack.Screen name="GetStarted" component={GetStartedScreen} />
                {/* Main App with Tab Navigation */}
                <Stack.Screen name="MainApp" component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;