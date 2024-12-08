import {Text, View} from 'react-native';
import styles from '../style';
import ButtonIconComponent from '../../../components/buttonIcon/buttonIcon.component';
import {walletInfoComponent} from '../../../interfaces/home.interface';

const WalletInfo = ({data, walletError}: walletInfoComponent) => {
  return (
    <View style={styles.containerMoney}>
      <View>
        <Text style={data?.salary ? styles.money : styles.dontMoney}>
          {data?.salary ? `$${data?.salary}` : `You don't have money `}
        </Text>
        <Text style={styles.subtract}>
          {data?.expenditures
            ? `-$${data?.expenditures}`
            : 'you have not spent anything yet'}
        </Text>
      </View>

      <View style={styles.containerButtonsActions}>
        {walletError && (
          <ButtonIconComponent name="usd" text="New transaction" />
        )}

        <ButtonIconComponent
          name="credit-card-alt"
          text={walletError ? 'See your wallet' : 'Create wallet'}
        />
      </View>
    </View>
  );
};

export default WalletInfo;
