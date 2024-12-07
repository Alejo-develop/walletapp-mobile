import {Text, View} from 'react-native';
import styles from '../style';
import ButtonIconComponent from '../../../components/buttonIcon/buttonIcon.component';
import { WalletResponse } from '../../../interfaces/wallet.interface';

const WalletInfo = ({salary, expenditures}: WalletResponse) => {
  return (
    <View style={styles.containerMoney}>
      <View>
        <Text style={styles.money}>${salary}</Text>
        <Text style={styles.subtract}>{expenditures ? `-${expenditures}` : 'you have not spent anything yet'}</Text>
      </View>

      <View style={styles.containerButtonsActions}>
        <ButtonIconComponent name='usd' text='New transaction' />

        <ButtonIconComponent name='credit-card-alt' text='See your wallet ' />
      </View>
    </View>
  );
};

export default WalletInfo;
