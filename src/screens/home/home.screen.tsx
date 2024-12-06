import {Text, View} from 'react-native';
import styles from './style';
import WalletInfo from './components/walletInfo.component';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WalletInfo />
    </View>
  );
};

export default HomeScreen;
