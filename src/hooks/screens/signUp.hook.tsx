import {useState} from 'react';
import {AuthInterface} from '../../interfaces/auth.interface';
import {signUpService} from '../../services/auth.services';
import {ErrorResponse} from '../../interfaces/error.interface';
import { useNavigation } from '@react-navigation/native';
import { RootStackPublicParamList } from '../../interfaces/navigation.type';

const SignUpHook = () => {
  const [form, setForm] = useState<AuthInterface>({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const goTo = useNavigation<RootStackPublicParamList>();

  const handleFormChange = (field: keyof AuthInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const signUp = async ({email, password, repeatPassword}: AuthInterface) => {
    if (!email && !password && !repeatPassword) {
      setError('All Inputs is required');
      return;
    }

    if (password !== repeatPassword) {
      setError('The passwords must be the same');
      return;
    }

    setLoading(true);
    try {
      await signUpService({email, password});

      setLoading(false);
      goTo.navigate('login')
    } catch (err: any) {
      const apiError = err.response?.data as ErrorResponse;
      if (apiError?.message) {
        setError(apiError.message);
        setLoading(false);
      } else {
        setLoading(false);
        console.error(err);
      }
    }
  };

  return {
    handleFormChange,
    form,
    error,
    loading,
    signUp,
  };
};

export default SignUpHook
