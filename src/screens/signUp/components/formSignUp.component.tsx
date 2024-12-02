import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputComponent from '../../../components/inputGeneric/input.component';
import {
  height,
  secondaryColor,
  width,
} from '../../../utils/constants/style.constants';

const FormSignUpComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <Text style={styles.label}>Email</Text>
        <InputComponent
          placeholder="Enter your email..."
          entry={false}
        />
      </View>

      <View style={styles.containerInputs}>
        <Text style={styles.label}>Password</Text>
        <InputComponent
          placeholder="Enter your password..."
          entry={true}
          
        />
      </View>

      <View style={styles.containerInputs}>
        <Text style={styles.label}>Repeat Password</Text>
        <InputComponent
          placeholder="Repeat your password..."
          entry={true}
          
        />
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
    color: secondaryColor,
  },
});

export default FormSignUpComponent;
