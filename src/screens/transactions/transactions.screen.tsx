import {Text, View} from 'react-native';
import styles from './styles';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import TransactionsHook from '../../hooks/screens/transactions.hook';
import TransactionsList from './components/list.component';

const TransactionsScreen = () => {
  const { fetchTransactions, sections, transactions} = TransactionsHook()  
  useFocusEffect(
      useCallback(() => {
        fetchTransactions()
      }, []),
    );

  return (
    <View style={styles.container}>
      <TransactionsList sections={sections}/>
    </View>
  );
};

export default TransactionsScreen;
