import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {WalletModal} from '../../interfaces/modal.interface';
import styles from './style';
import CreditCardComponent from './components/creditCard.component';
import ButtonComponent from '../buttonGeneric/button.component';
import { height, secondaryColor } from '../../utils/constants/style.constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const SeeOrCreateModal = ({
  visible,
  onClose,
  walletError,
  wallet,
  walletForm,
  handleEdit,
  handleFormChange,
  handleSubmit,
  setNewWallet,
}: WalletModal) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.headerModal}>
            <TouchableOpacity onPress={onClose}>
              <Icon name='arrow-left' style={{color: 'white', fontSize: height * 0.025}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Wallet</Text>
          </View>

          <CreditCardComponent
            walletError={walletError}
            wallet={wallet}
            handleFormChange={handleFormChange}
          />

          <View style={styles.cointainerInfoWallet}>
            <View style={styles.containerMoneyDetails}>
              <View style={styles.containerDetail}>
                <Text style={styles.bigTitleInfoWallet}>Salary</Text>
                <TextInput
                  placeholder={
                    walletError ? `$${wallet?.salary}` : `Add salary...`
                  }
                  style={[styles.bigCashInfoWallet , {
                    height: 40,
                  }]}
                  placeholderTextColor={secondaryColor}
                  keyboardType="decimal-pad"
                  onChangeText={text => handleFormChange('salary', text)}
                />
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.littleTitleInfoWallet}>Expenditures</Text>
                <Text style={styles.litleCashInfoWallet}>
                  {walletError && wallet?.expenditures !== null
                    ? `-$${wallet?.expenditures}`
                    : `have not spent anything yet`}
                </Text>
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.littleTitleInfoWallet}>Extra Money</Text>
                <TextInput
                  style={styles.litleCashInfoWallet}
                  placeholder={
                    walletError && wallet?.extraCash !== null
                      ? `$${wallet?.extraCash}`
                      : `Add money extra...`
                  }
                  placeholderTextColor={secondaryColor}
                  keyboardType="decimal-pad"
                  onChangeText={text => handleFormChange('extraCash', text)}
                />
              </View>
            </View>
            <View style={styles.containerTotalDetails}>
              <View style={[styles.containerDetail, {gap: 10}]}>
                <Text style={styles.bigTitleInfoWallet}>Total Cash</Text>
                <Text style={styles.bigCashInfoWallet}>
                  {walletError ? `$${wallet?.totalCash}` : `N/A`}
                </Text>
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.littleTitleInfoWallet}>Pay date</Text>
                <TextInput
                  placeholder={
                    walletError && wallet?.payDay !== null
                      ? `${wallet?.payDay} Moth after Moth`
                      : `exp 24 of this month`
                  }
                  style={styles.litleCashInfoWallet}
                  onChangeText={text => handleFormChange('payDay', text)}
                />
              </View>
            </View>
          </View>

          <ButtonComponent
            text={walletError ? `Save Changes` : 'Create Wallet'}
            onPress={
              walletError
                ? () => handleEdit(wallet?.id, walletForm, setNewWallet)
                : () => handleSubmit(walletForm, setNewWallet)
            }
          />
        </View>
      </View>
    </Modal>
  );
};

export default SeeOrCreateModal;
