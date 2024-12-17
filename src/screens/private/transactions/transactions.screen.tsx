import {Text, View} from 'react-native';
import styles from './styles';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import TransactionsHook from '../../../hooks/screens/transactions.hook';
import TransactionsList from './components/list.component';
import { height } from '../../../utils/constants/style.constants';

const TransactionsScreen = () => {
  const { fetchTransactions, sections, transactions} = TransactionsHook()  
  useFocusEffect(
      useCallback(() => {
        fetchTransactions()
      }, []),
    );

  return (
    <View style={styles.container}>{
      sections.length ? <TransactionsList sections={sections}/> : <Text style={{ textAlign: 'center', marginTop: height * 0.35,
        fontSize: 20
      }}>Not transactions aviables</Text>
    }
      
    </View>
  );
};

export default TransactionsScreen;
