import {useState} from 'react';
import {AuthInterface, LoginResponse} from '../../interfaces/auth.interface';
import {loginService} from '../../services/auth.services';
import {ErrorResponse} from '../../interfaces/error.interface';
import { useAuth } from '../../contexts/auth.context';

const LoginHook = () => {
  const [form, setForm] = useState<AuthInterface>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const auth = useAuth()

  const handleFormChange = (field: keyof AuthInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const login = async ({email, password}: AuthInterface) => {
    setError('')
    if (!email && !password) {
      setError('All Inputs is required');
      return;
    }
    console.log(email, password);
    
    
    setLoading(true);
    try {
      const res = await loginService({email, password});

      const {id, name, token} = res.data as LoginResponse;
      await auth.saveSessionInfo(id, token, name)
      
      setLoading(false);
    } catch (err: any) {
      const apiError = err.response?.data as ErrorResponse;
      if (apiError?.message) {
        console.log(apiError.message);
        
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
    login,
  };
};

export default LoginHook;
