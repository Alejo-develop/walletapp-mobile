import {Image, Modal, Text, View} from 'react-native';
import {TransactionModal} from '../../interfaces/modal.interface';
import styles from './style';
import HeaderModalComponent from '../headerModal/headerModal.component';
import FormTransactionModal from './components/formTransaction.component';
import ButtonComponent from '../buttonGeneric/button.component';
import SelectComponent from '../select/select.component';

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

          <View>
            <Image
              style={styles.img}
              source={require('../../utils/assets/transactionimg.png')}
            />
          </View>

          <FormTransactionModal />

       
          <ButtonComponent text='Create'/>
        </View>
      </View>
    </Modal>
  );
};

export default CreateTransactionModal;
