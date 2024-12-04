import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/home.screen';

const Stack = createNativeStackNavigator();

const PrivateStacks = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      /> 
    </Stack.Navigator>
  );
};

export default PrivateStacks;
