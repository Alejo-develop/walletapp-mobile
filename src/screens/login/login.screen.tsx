import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import styles from './style';
import FormLoginComponent from './components/formLogin.component';
import HeaderLoginComponent from './components/header.component';
import ButtonComponent from '../../components/buttonGeneric/button.component';

const LoginScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <HeaderLoginComponent />
      <FormLoginComponent />
      <ButtonComponent text="Login" />
    </ScrollView>
  );
};

export default LoginScreen;
