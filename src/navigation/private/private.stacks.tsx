import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/home.screen';
import LayoutComponent from '../../components/layout/layout.component';

const Stack = createNativeStackNavigator();

const PrivateStacks = () => {
  return (
    <LayoutComponent>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </LayoutComponent>
  );
};

export default PrivateStacks;
