import {Text, View} from 'react-native';
import styles from '../style';
import ButtonIconComponent from '../../../components/buttonIcon/buttonIcon.component';
import {walletInfoComponent} from '../../../interfaces/home.interface';
import SeeOrCreateModal from '../../../components/seeOrCreateWallet/seeOrCreateWalletModal.component';
import WalletModalHook from '../../../hooks/modals/walletModal.hook';

const WalletInfo = ({data, walletError}: walletInfoComponent) => {
  const {
    walletForm,
    visibleWalletModal,
    setCloseWalletModal,
    setWalletForm,
    handleFormChange,
    handleEdit,
    handleSubmit,
  } = WalletModalHook();

  return (
    <View style={styles.containerMoney}>
      <View>
        <Text style={data?.totalCash ? styles.money : styles.dontMoney}>
          {data?.totalCash ? `$${data?.totalCash}` : `You don't have money `}
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
          onPress={() => setCloseWalletModal(true)}
        />
      </View>

      <SeeOrCreateModal
        visible={visibleWalletModal}
        onClose={() => setCloseWalletModal(false)}
        walletError={walletError}
        wallet={data}
        walletForm={walletForm}
        handleFormChange={handleFormChange}
        setWalletForm={setWalletForm}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

export default WalletInfo;
