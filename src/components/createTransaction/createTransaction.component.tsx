import {Image, Modal, Text, View} from 'react-native';
import {TransactionModal} from '../../interfaces/modal.interface';
import styles from './style';
import HeaderModalComponent from '../headerModal/headerModal.component';
import InputComponent from '../inputGeneric/input.component';

const CreateTransactionModal = ({visibleModal, onClose}: TransactionModal) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleModal}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <HeaderModalComponent onClose={onClose} text="Create transaction" />

          <View style={styles.containerImg}>
            <Image
              style={styles.img}
              source={require('../../utils/assets/transactionimg.png')}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateTransactionModal;
