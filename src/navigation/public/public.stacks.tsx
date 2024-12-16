import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/public/login/login.screen';
import SignUpScreen from '../../screens/public/signUp/signUp.screen';
import PublicTabs from './tab.navigation';

const Stack = createNativeStackNavigator();

const PublicStacks = () => {
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

export default PublicStacks
