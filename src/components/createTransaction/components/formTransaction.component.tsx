import {Text, View} from 'react-native';
import InputComponent from '../../inputGeneric/input.component';
import styles from '../style';
import {FormTransactionComponentProps} from '../../../interfaces/transactions.interface';

const FormTransactionModal = ({
  handleFormChange,
}: FormTransactionComponentProps) => {
  return (
    <View style={styles.containerInput}>
      <View>
        <Text style={styles.titleInput}>Name</Text>
        <InputComponent
          placeholder="About transaction..."
          entry={false}
          onChangeText={text => handleFormChange('name', text)}
        />
      </View>

      <View>
        <Text style={styles.titleInput}>Store</Text>
        <InputComponent
          placeholder="Store where you bought..."
          entry={false}
          onChangeText={text => handleFormChange('store', text)}
        />
      </View>

      <View>
        <Text style={styles.titleInput}>Description</Text>
        <InputComponent
          placeholder="About transaction..."
          entry={false}
          onChangeText={text => handleFormChange('description', text)}
        />
      </View>

      <View>
        <Text style={styles.titleInput}>Cost</Text>
        <InputComponent
          placeholder="Cost by the transaction..."
          entry={false}
          onChangeText={text => handleFormChange('cost', text)}
        />
      </View>
    </View>
  );
};

export default FormTransactionModal;
