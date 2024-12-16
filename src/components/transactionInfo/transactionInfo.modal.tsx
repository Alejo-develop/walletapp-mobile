import {Modal, Text, View} from 'react-native';
import styles from './styles';
import {TransactionInfoProps} from '../../interfaces/modal.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';
import DetailComponent from './components/detail.component';
import RelationshipCard from './components/relationshipCard.component';
import ButtonComponent from '../buttonGeneric/button.component';

const TransactionInfoModal = ({
  onClose,
  visibleModal,
  info,
}: TransactionInfoProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      visible={visibleModal}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <HeaderModalComponent text="Details" onClose={onClose} />

          <View style={styles.containerDetails}>
            <DetailComponent nameDetail="Name" info={info.name} />
            <DetailComponent nameDetail="Cost" info={info.cost} />
            <DetailComponent nameDetail="Description" info={info.description} />
            <DetailComponent nameDetail="Store" info={info.store} />
            <DetailComponent nameDetail="Date" info={info.date} />
          </View>

          <View style={styles.containerRealationship}>
            <Text style={{color: 'white'}}>Budget</Text>
            <RelationshipCard text={info.budget?.name}/>

            <Text style={{color: 'white'}}>Category</Text>
            <RelationshipCard text={info.category?.name}/>
          </View>

          <ButtonComponent text='Done' onPress={onClose}/>
        </View>
      </View>
    </Modal>
  );
};

export default TransactionInfoModal;
