import {Text, View} from 'react-native';
import { height, primaryColor, width } from '../../utils/constants/style.constants';

const TransactionsScreen = () => {
  return (
    <View style={{backgroundColor: primaryColor, width: width * 1, height: height * 1}}>
      <Text>Hola desde Transactions</Text>
    </View>
  );
};

export default TransactionsScreen;
