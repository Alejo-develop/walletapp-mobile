import {Modal, Text, View} from 'react-native';
import styles from './style';
import {CategorySettingsProps} from '../../interfaces/modal.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';
import ButtonComponent from '../buttonGeneric/button.component';
import ButtonIconComponent from '../buttonIcon/buttonIcon.component';

const SettingsCategoryModal = ({onClose, visibleModal, info}: CategorySettingsProps) => {
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
            <Text style={styles.budget}><Text style={{color: 'white'}}>Budget: </Text>${info?.budget_for_category}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 20}}>
            <ButtonIconComponent name='plus' text='Add money' />
            <ButtonIconComponent name='trash-o' text='Delete Category'  />
          </View>
          <ButtonComponent text="Done" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default SettingsCategoryModal;
