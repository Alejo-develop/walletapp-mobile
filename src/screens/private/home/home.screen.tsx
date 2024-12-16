import {View} from 'react-native';
import styles from './style';
import WalletInfo from './components/walletInfo.component';
import CategoryContainerComponents from './components/categorysContainer.component';
import HomeHook from '../../../hooks/screens/home.hook';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import SelectComponent from '../../../components/select/select.component';
import ButtonInfoBudgetComponent from './components/buttonInfoBudget';

const HomeScreen = () => {
  const {
    walletInfo,
    categorys,
    budgets,
    budgetId,
    walletError,
    getNewWallet,
    isVisibleBudgetModal,
    setIsVisibleBudgetModal,
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
        categorys={categorys}
        setNewWallet={setGetNewWallet}
        setID={setBudgetId}
      />
      <View style={styles.selectContainer}>
        <SelectComponent
          labelFocus="Budget"
          widthChoose={0.6}
          placeholder="Select Budget..."
          placeholderFocus="Budget..."
          data={budgets} 
          position="bottom"
          setID={setBudgetId}
          openModalInfoBudget={setIsVisibleBudgetModal}
          isVisibleModalInfoBudget={isVisibleBudgetModal}
        />
        <ButtonInfoBudgetComponent onPress={() => setIsVisibleBudgetModal(true)} />
      </View>

      <CategoryContainerComponents data={categorys} />
    </View>
  );
};

export default HomeScreen;
