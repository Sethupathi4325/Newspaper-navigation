import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Screen1 from "./command/Screen1";
import Screen2 from "./command/Screen2";
import Screen3 from "./command/Screen3";
import HomeScreen from "./command/HomeScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const taskStack1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Myself" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const taskStack2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Indian" component={Screen1} />
    </Stack.Navigator>
  );
};

const taskStack3 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="International" component={Screen2} />
    </Stack.Navigator>
  );
};

const taskStack4 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Local" component={Screen3} />
    </Stack.Navigator>
  );
};

const TabNavigator1 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={taskStack1}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="md-home" size={focused ? 26 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Indian"
        component={taskStack2}
        options={{
          tabBarLabel: "Indian",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="md-pin" size={focused ? 26 : 20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Internation"
        component={taskStack3}
        options={{
          tabBarLabel: "International",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="md-earth" size={focused ? 26 : 20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Local"
        component={taskStack4}
        options={{
          tabBarLabel: "Local",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="md-home" size={focused ? 26 : 20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator1 />
    </NavigationContainer>
  );
}
