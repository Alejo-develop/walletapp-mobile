import {Modal, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  height,
  primaryColor,
  secondaryColor,
  width,
} from '../../../utils/constants/style.constants';
import {DeleteAndAddMoneyModalProps} from '../../../interfaces/modal.interface';
import ButtonComponent from '../../buttonGeneric/button.component';

const DeleteCategoryModal = ({
  onClose,
  visibleModal,
  id,
  deleteCategory,
}: DeleteAndAddMoneyModalProps) => {
  const handleDelete = () => {
    if (id && deleteCategory) {
      deleteCategory(id);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      visible={visibleModal}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>
            Are you sure you want to delete this category?
          </Text>

          <View style={{gap: 20}}>
            <ButtonComponent text="Back" onPress={onClose} />
            <ButtonComponent
              text="Delete"
              onPress={handleDelete}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: primaryColor,
    borderWidth: 1,
    borderRadius: 20,
    height: height * 0.3,
    width: width * 0.8,
    elevation: 12,
    alignItems: 'center',
    gap: height * 0.05,
    marginBottom: height * 0.1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: height * 0.018,
    textAlign: 'center',
  },
  input: {
    backgroundColor: primaryColor,
    color: secondaryColor,
    width: width * 0.6,
    textAlign: 'center',
    elevation: 6,
  },
});

export default DeleteCategoryModal;
