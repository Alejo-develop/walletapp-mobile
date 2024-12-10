import {View} from 'react-native';
import styles from './style';
import WalletInfo from './components/walletInfo.component';
import BudgetSelectComponent from './components/budgetSelect.component';
import CategoryContainerComponents from './components/categorysContainer.component';
import HomeHook from '../../hooks/screens/home.hook';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';

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
    if(getNewWallet === true){
      fetchWallet()
      setGetNewWallet(false)
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
        data={walletInfo} 
        walletError={walletError}
        setNewWallet={setGetNewWallet}   
      /> 
 
      <BudgetSelectComponent data={budgets} setBudgetID={setBudgetId} /> 

      <CategoryContainerComponents data={categorys}/>  
    </View>     
  ); 
};
 
export default HomeScreen; 
   