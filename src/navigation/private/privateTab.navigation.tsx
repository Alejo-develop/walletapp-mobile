import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import { height, primaryColor, secondaryColor, width } from '../../utils/constants/style.constants';
import HomeScreen from '../../screens/private/home/home.screen';
import TransactionsScreen from '../../screens/private/transactions/transactions.screen';
import PercentagesScreen from '../../screens/private/percentages/percentages.screen';
import TabBarIcon from './icon.tab';

const Tab = createBottomTabNavigator()

const PrivateTabs = () => (
  <Tab.Navigator
  initialRouteName='home'
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => (
        <View>
          <TabBarIcon color={color} routeName={route.name} size={height * 0.025}/>
        </View>
      ),
      tabBarInactiveTintColor: 'white',
      tabBarActiveTintColor: secondaryColor,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarItemStyle: styles.tabBarItemStyle,
      headerShown: false,
      
    })}>
    <Tab.Screen name="share" component={TransactionsScreen} />
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="percents" component={PercentagesScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: primaryColor,
    borderTopColor: '#151515',
    width: width * 0.6, 
    height: 55,
    alignSelf: 'center',
    bottom: 19, 
    left: width * 0.2,
    borderRadius: 12
  },
  tabBarLabelStyle: {
    fontSize: 0,
  },
  tabBarItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PrivateTabs;

