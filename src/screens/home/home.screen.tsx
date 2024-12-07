import {Text, View} from 'react-native';
import styles from './style';
import WalletInfo from './components/walletInfo.component';
import BudgetSelectComponent from './components/budgetSelect.component';
import CategoryContainerComponents from './components/categorysContainer.component';
import HomeHook from '../../hooks/home.hook';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

const HomeScreen = () => {
  const {walletInfo, fetchWallet, budgets, fetchBudgets} = HomeHook();

  useFocusEffect(
    useCallback(() => {
      fetchWallet();
      fetchBudgets()  
    }, []),
  );

  return (
    <View style={styles.container}>
      <WalletInfo
        salary={walletInfo?.salary}
        expenditures={walletInfo?.expenditures}
      />

      <BudgetSelectComponent data={budgets} />

      <CategoryContainerComponents />
    </View>
  );
};

export default HomeScreen;
