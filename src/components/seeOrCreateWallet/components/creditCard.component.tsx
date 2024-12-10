import {Text, TextInput, View} from 'react-native';
import styles from '../style';
import {CreditCardProps} from '../../../interfaces/modal.interface';

const CreditCardComponent = ({walletError, wallet, handleFormChange}: CreditCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Cashify</Text>

        <Text style={styles.cardSpan}>Credit Card</Text>
      </View>

      <View style={styles.cardInputs}>
        <View style={styles.containerFirstInputs}>
          <TextInput
            style={styles.inputCardNumber}
            placeholder={
              walletError && wallet?.cardNumber != null
                ? `${wallet?.cardNumber}`
                : `XXX XXX XXXX`
            }
            onChangeText={text => handleFormChange('cardNumber', text)}
          />

          <TextInput
            style={styles.inputCardName}
            placeholder={
              walletError && wallet?.cardName != null
                ? `${wallet?.cardName}`
                : `Enter card name...`
            }
            onChangeText={text => handleFormChange('cardName', text)}
          />
        </View>
        <View style={styles.containerSecondInputs}>
          <TextInput
            style={styles.inputExpDate}
            placeholder={
              walletError && wallet?.expirationDate != null
                ? `${wallet?.expirationDate}`
                : `Exp date...`
            }
            onChangeText={text => handleFormChange('expirationDate', text)}
          />

          <View style={styles.containerCvv}>
            <Text>Cvv</Text>
            <TextInput
              style={styles.inputCvv}
              placeholder={
                walletError && wallet?.cvv != null ? `${wallet?.cvv}` : `N/A...`
              }
              onChangeText={text => handleFormChange('cvv', text)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreditCardComponent;
