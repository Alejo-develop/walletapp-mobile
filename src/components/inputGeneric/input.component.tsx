import {TextInput, View} from 'react-native';
import {InputGenericProps} from '../../interfaces/input.props';
import styles from './style';

const InputComponent = ({
  placeholder,
  value,
  onChangeText,
  entry,
}: InputGenericProps) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        editable={true}
        value={value}
        secureTextEntry={entry}
        onChangeText={onChangeText}
        placeholderTextColor={'gray'}
      />
    </View>
  );
};

export default InputComponent;
