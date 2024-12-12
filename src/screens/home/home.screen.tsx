import {View} from 'react-native';
import styles from './style';
import WalletInfo from './components/walletInfo.component';
import CategoryContainerComponents from './components/categorysContainer.component';
import HomeHook from '../../hooks/screens/home.hook';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import SelectComponent from '../../components/select/select.component';

const HomeScreen = () => {
  const {
    walletInfo,
    categorys,
    budgets,
    budgetId,
    walletError,
    getNewWallet,
    fetchWallet,
    fetchBudgets,
    fetchCategorys,
    setBudgetId,
    setGetNewWallet,
  } = HomeHook();

  useEffect(() => {
    if (getNewWallet === true) {
      fetchWallet();
      setGetNewWallet(false);
    }
    if (budgetId) {
      console.log('pidiendo categorias');
      fetchCategorys();
    }
  }, [budgetId, getNewWallet]);

  useFocusEffect(
    useCallback(() => {
      fetchWallet();
      fetchBudgets();
    }, []),
  );

  return (
    <View style={styles.container}>
      <WalletInfo
        budgets={budgets}
        data={walletInfo}
        walletError={walletError}
        setNewWallet={setGetNewWallet}
        categorys={categorys}
      />
      <View style={styles.selectContainer}>
        <SelectComponent
          labelFocus="Budget"
          widthChoose={0.85}
          placeholder="Select Budget..."
          placeholderFocus="Budget..."
          data={budgets}
          setID={setBudgetId}
        />
      </View>

      <CategoryContainerComponents data={categorys} />
    </View>
  );
};

export default HomeScreen;
