import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/login.screen';
import SignUpScreen from '../screens/signUp/signUp.screen';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName="login">
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
