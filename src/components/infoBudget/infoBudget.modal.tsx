import {Modal, Text, View} from 'react-native';
import styles from './styles';
import {BudgetInfoProps} from '../../interfaces/modal.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';
import ButtonComponent from '../buttonGeneric/button.component';
import ButtonIconComponent from '../buttonIcon/buttonIcon.component';
import BudgetSettingsHook from '../../hooks/modals/budgetSettings.hook';
import AddMoneyModal from './components/addMoneyBudget.modal.tsx';

const InfoBudgetModal = ({onClose, visibleModal, info}: BudgetInfoProps) => {
  const {deleteBudget, addMoney, setModalAddMoney, addCategory, isModalAddMoney} = BudgetSettingsHook()
  const handleDelete = async () => {
    if (info?.id && deleteBudget) {
      await deleteBudget(info.id)
      onClose()
    }
  };

  const handleNavigate = () => {
    onClose()
    addCategory()
  }
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
            <ButtonIconComponent name='trash-o' text='Delete budget' onPress={handleDelete}  />
            <ButtonIconComponent name='plus' text='Add money'  onPress={() => setModalAddMoney(true)}/>
            <ButtonIconComponent name='cart-plus' text='Add Category' onPress={handleNavigate} />
          </View>
          <ButtonComponent text="Done" onPress={onClose} />

          <AddMoneyModal onClose={() => setModalAddMoney(false)} visibleModal={isModalAddMoney} addMoneyBudget={addMoney} id={info?.id}/>
        </View>
      </View>
    </Modal>
  );
};

export default InfoBudgetModal;
