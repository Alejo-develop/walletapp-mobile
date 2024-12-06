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
        <ButtonIconComponent />

        <ButtonIconComponent />
      </View>
    </View>
  );
};

export default WalletInfo;
