import {ScrollView, Text} from 'react-native';
import styles from './style';
import FormLoginComponent from './components/formLogin.component';
import HeaderLoginComponent from './components/header.component';
import ButtonComponent from '../../../components/buttonGeneric/button.component';
import LoginHook from '../../../hooks/screens/login.hook';
import { secondaryColor } from '../../../utils/constants/style.constants';

const LoginScreen = () => {
  const {login, error, loading, form, handleFormChange} = LoginHook()

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <HeaderLoginComponent />
      {error && <Text style={{color: secondaryColor}}>{error}</Text>}
      <FormLoginComponent handleFormChange={handleFormChange}/>
      <ButtonComponent text="Login" onPress={() => login(form)}/>
    </ScrollView>
  );
};

export default LoginScreen;
