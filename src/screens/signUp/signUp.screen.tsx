import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import ButtonComponent from '../../components/buttonGeneric/button.component';
import HeaderSignUpComponent from './components/headerSignUp.component';
import FormSignUpComponent from './components/formSignUp.component';
import SignUpHook from '../../hooks/signUp.hook';
import { secondaryColor } from '../../utils/constants/style.constants';

const SignUpScreen = () => {
  const {signUp, error, form, handleFormChange, loading} = SignUpHook()

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <HeaderSignUpComponent />
      {error && <Text style={{color: secondaryColor}}>{error}</Text>}
      <FormSignUpComponent handleFormChange={handleFormChange}/>
      <ButtonComponent text="Sign Up" onPress={() => signUp(form)}/>
    </ScrollView>
  );
};

export default SignUpScreen;
