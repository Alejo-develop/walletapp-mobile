import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login/login.screen';
import SignUpScreen from '../../screens/signUp/signUp.screen';
import PublicTabs from './tab.navigation';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen
        name="main"
        component={PublicTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Stacks
