import {Text, View} from 'react-native';
import styles from '../style';
import ButtonIconComponent from '../../../components/buttonIcon/buttonIcon.component';

const WalletInfo = () => {
  return (
    <View style={styles.containerMoney}>
      <View>
        <Text style={styles.money}>$3000000</Text>
        <Text style={styles.subtract}>-$3000</Text>
      </View>

      <View style={styles.containerButtonsActions}>
        <ButtonIconComponent name='usd' text='New transaction' />

        <ButtonIconComponent name='credit-card-alt' text='See your wallet ' />
      </View>
    </View>
  );
};

export default WalletInfo;
