import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/private/home/home.screen';
import LayoutComponent from '../../components/layout/layout.component';
import TransactionsScreen from '../../screens/private/transactions/transactions.screen';
import PercentagesScreen from '../../screens/private/percentages/percentages.screen';
import PrivateTabs from './privateTab.navigation';
import CreateBudgetScreen from '../../screens/private/createBudget/createBudget.screen';
import CreateCategoryScreen from '../../screens/private/createCategory/createCategory.screen';

const Stack = createNativeStackNavigator();

const PrivateStacks = () => {
  return (
    <LayoutComponent>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={PrivateTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="transactions"
          component={TransactionsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="percents"
          component={PercentagesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="createcategory"
          component={CreateCategoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="createbudget"
          component={CreateBudgetScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </LayoutComponent>
  );
};

export default PrivateStacks;
