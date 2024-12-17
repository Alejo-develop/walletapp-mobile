import {Modal, Text, View, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  height,
  primaryColor,
  secondaryColor,
  width,
} from '../../../utils/constants/style.constants';
import {DeleteAndAddMoneyModalProps} from '../../../interfaces/modal.interface';
import ButtonComponent from '../../buttonGeneric/button.component';
import {useState} from 'react';

const AddMoneyModal = ({
  onClose,
  visibleModal,
  addMoneyBudget,
  id,
}: DeleteAndAddMoneyModalProps) => {
  const [money, setMoney] = useState<number>(0);

  const handleSubmit = () => {
    if (id && addMoneyBudget) {
      addMoneyBudget(id, money);
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
          <Text style={styles.title}>How much money will you add?</Text>
          <TextInput
            style={styles.input}
            placeholder={'Add money'}
            placeholderTextColor={secondaryColor}
            keyboardType="decimal-pad"
            onChangeText={text => setMoney(parseFloat(text))}
          />

          <View style={{gap: 20}}>
            <ButtonComponent text="Back" onPress={onClose} />
            <ButtonComponent text="Send" onPress={handleSubmit} />
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
    gap: height * 0.02,
    marginBottom: height * 0.1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: height * 0.02,
  },
  input: {
    backgroundColor: primaryColor,
    color: secondaryColor,
    width: width * 0.6,
    textAlign: 'center',
    elevation: 6,
  },
});

export default AddMoneyModal;
