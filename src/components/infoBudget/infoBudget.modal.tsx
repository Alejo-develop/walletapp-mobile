import {Modal, View} from 'react-native';
import styles from './styles';
import {BudgetInfoProps} from '../../interfaces/modal.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';

const InfoBudgetModal = ({onClose, visibleModal, info}: BudgetInfoProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      visible={visibleModal}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <HeaderModalComponent text="Budget" onClose={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default InfoBudgetModal;
