import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ZCOOLKuaiLe_400Regular, useFonts } from "@expo-google-fonts/zcool-kuaile";
import { RFPercentage } from 'react-native-responsive-fontsize';

//screens
import MapScreen from './app/screens/MapScreen';
import RewardScreen from './app/screens/RewardScreen';
import EnterRoomScreen from './app/screens/EnterRoomScreen';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    ZCOOLKuaiLe_400Regular
  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MapScreen">
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="RewardScreen" component={RewardScreen} />
        <Stack.Screen name="EnterRoomScreen" component={EnterRoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)
// Regards!
// Native_Devv


