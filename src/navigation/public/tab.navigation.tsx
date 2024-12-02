import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../../screens/login/login.screen';
import SignUpScreen from '../../screens/signUp/signUp.screen';
import { Text, View, StyleSheet } from 'react-native';
import { secondaryColor, width } from '../../utils/constants/style.constants';

const Tab = createBottomTabNavigator();

const PublicTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => (
        <View>
          <Text style={{color}}>{route.name}</Text>
        </View>
      ),
      tabBarActiveTintColor: secondaryColor,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarItemStyle: styles.tabBarItemStyle,
      headerShown: false,
    })}>
    <Tab.Screen name="login" component={LoginScreen} />
    <Tab.Screen name="signup" component={SignUpScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#151515',
    borderTopColor: '#151515',
    width: width * 0.6, 
    height: 55,
    alignSelf: 'center',
    bottom: 20, 
    left: width * 0.21
  },
  tabBarLabelStyle: {
    fontSize: 0,
  },
  tabBarItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PublicTabs;
