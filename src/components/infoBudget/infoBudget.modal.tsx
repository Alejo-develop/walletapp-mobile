import {Modal, Text, View} from 'react-native';
import styles from './styles';
import {BudgetInfoProps} from '../../interfaces/modal.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';
import ButtonComponent from '../buttonGeneric/button.component';
import ButtonIconComponent from '../buttonIcon/buttonIcon.component';

const InfoBudgetModal = ({onClose, visibleModal, info}: BudgetInfoProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      visible={visibleModal}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <HeaderModalComponent text="Settings" onClose={onClose} />

          <View style={styles.containerTitles}>
            <Text style={styles.title}>{info?.name}</Text>
            <Text style={styles.budget}><Text style={{color: 'white'}}>Budget: </Text>${info?.budget}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 20}}>
            <ButtonIconComponent name='trash-o' text='Delete budget'  />
            <ButtonIconComponent name='plus' text='Add money'  />
            <ButtonIconComponent name='cart-plus' text='Add Category'  />
          </View>
          <ButtonComponent text="Done" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default InfoBudgetModal;
