import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../journey/dashboard';
import CounterApp from '../journey/counter-app';
import AppNavigation from './AppNavigation';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="dashboard">
        <Stack.Screen name={'dashboard'} component={Dashboard} />
        <Stack.Screen name={'CounterApp'} component={CounterApp} />
        <Stack.Screen name={'AnimeApp'} component={AppNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
