import {Modal, Text, View} from 'react-native';
import styles from './style';
import {CategorySettingsProps} from '../../interfaces/modal.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';
import ButtonComponent from '../buttonGeneric/button.component';
import ButtonIconComponent from '../buttonIcon/buttonIcon.component';
import DeleteCategoryModal from './components/deleteCategory.modal';
import AddMoneyModal from './components/addMoney.modal';
import {useState} from 'react';

const SettingsCategoryModal = ({
  onClose,
  deleteCategory,
  addMoney,
  visibleModal,
  info,
  id
}: CategorySettingsProps) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] =
    useState<boolean>(false);
  const [isAddMoneyModalVisible, setIsAddMoneyModalVisible] =
    useState<boolean>(false);

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
            <Text style={styles.budget}>
              <Text style={{color: 'white'}}>Budget: </Text>$
              {info?.budget_for_category}
            </Text>
          </View>

          <View style={{flexDirection: 'row', gap: 20}}>
            <ButtonIconComponent
              name="plus"
              text="Add money"
              onPress={() => setIsAddMoneyModalVisible(true)}
            />
            <ButtonIconComponent
              name="trash-o"
              text="Delete Category"
              onPress={() => setIsDeleteModalVisible(true)}
            />
          </View>
          <ButtonComponent text="Done" onPress={onClose} />

          <DeleteCategoryModal
            id={info?.id}
            visibleModal={isDeleteModalVisible}
            onClose={() => setIsDeleteModalVisible(false)}
            deleteCategory={deleteCategory}
          />

          <AddMoneyModal
            visibleModal={isAddMoneyModalVisible}
            onClose={() => setIsAddMoneyModalVisible(false)}
            addMoney={addMoney}
            id={info?.id}
            budgetID={info?.budgetID}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SettingsCategoryModal;
