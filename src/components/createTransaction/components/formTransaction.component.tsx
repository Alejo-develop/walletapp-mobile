import {Text, View} from 'react-native';
import InputComponent from '../../inputGeneric/input.component';
import styles from '../style';

const FormTransactionModal = () => {
  return (
    <View style={styles.containerInput}>
      <View>
        <Text style={styles.titleInput}>Name</Text>
        <InputComponent placeholder="About transaction..." entry={false} />
      </View>

      <View>
        <Text style={styles.titleInput}>Store</Text>
        <InputComponent placeholder="Store where you bought..." entry={false} />
      </View>

      <View>
        <Text style={styles.titleInput}>Description</Text>
        <InputComponent placeholder="About transaction..." entry={false} />
      </View>

      <View>
        <Text style={styles.titleInput}>Cost</Text>
        <InputComponent
          placeholder="Cost by the transaction..."
          entry={false}
        />
      </View>
    </View>
  );
};

export default FormTransactionModal;
