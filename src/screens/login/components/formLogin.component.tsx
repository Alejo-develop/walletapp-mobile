import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputComponent from '../../../components/inputGeneric/input.component';
import {
  height,
  width,
} from '../../../utils/constants/style.constants';
import { FormAuthComponentProps } from '../../../interfaces/auth.interface';

const FormLoginComponent = ({handleFormChange}: FormAuthComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <Text style={styles.label}>Email</Text>
        <InputComponent
          placeholder="Enter your email..."
          entry={false}
          onChangeText={text => handleFormChange('email', text)}
        />
      </View>

      <View style={styles.containerInputs}>
        <Text style={styles.label}>Password</Text>
        <InputComponent
          placeholder="Enter your password..."
          entry={true}
          onChangeText={text => handleFormChange('password', text)}
        />
        <TouchableOpacity style={styles.forgotYourPassworButton}>
          <Text style={styles.textButton}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    gap: height * 0.02,
  },
  containerInputs: {
    gap: height * 0.015,
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
  },
  forgotYourPassworButton: {
    alignSelf: 'flex-end',
  },
  textButton: {
    textDecorationLine: 'underline',
    color: 'white'
  }
});

export default FormLoginComponent;
