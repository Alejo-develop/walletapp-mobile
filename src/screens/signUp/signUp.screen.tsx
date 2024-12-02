import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import ButtonComponent from '../../components/buttonGeneric/button.component';
import HeaderSignUpComponent from './components/headerSignUp.component';
import FormSignUpComponent from './components/formSignUp.component';

const SignUpScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <HeaderSignUpComponent />
      <FormSignUpComponent />
      <ButtonComponent text="Sign Up" />
    </ScrollView>
  );
};

export default SignUpScreen;
