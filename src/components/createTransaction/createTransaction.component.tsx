import {Image, Modal, View} from 'react-native';
import {TransactionModal} from '../../interfaces/modal.interface';
import styles from './style';
import HeaderModalComponent from '../headerModal/headerModal.component';
import FormTransactionModal from './components/formTransaction.component';
import ButtonComponent from '../buttonGeneric/button.component';
import SelectComponent from '../select/select.component';
import TransactionModalHook from '../../hooks/modals/transactionModal.hook';

const CreateTransactionModal = ({
  visibleModal,
  onClose,
  budgets,
  walletID,
  categorys,
  setID
}: TransactionModal) => {
  const {
    form,
    createTransaction,
    handleFormChange,
    setBudgetID,
    setCategoryID,
  } = TransactionModalHook();

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

          <FormTransactionModal handleFormChange={handleFormChange} />

          <View style={styles.containerSelects}>
            <SelectComponent
              position="top"
              data={budgets}
              placeholder="Select a Budget..."
              labelFocus="Budget"
              placeholderFocus="Budget..."
              widthChoose={0.55}
              setID={setBudgetID}
              setBudgetForTransactions={setID}
            />
            <SelectComponent
              position="top"
              data={categorys}
              placeholder="Select a Category..."
              labelFocus="Categorys"
              placeholderFocus="categorys..."
              widthChoose={0.55}
              setID={setCategoryID}
            />
          </View>

          <ButtonComponent text="Create" onPress={() => createTransaction(form, walletID)} />
        </View>
      </View>
    </Modal>
  );
};

export default CreateTransactionModal;
