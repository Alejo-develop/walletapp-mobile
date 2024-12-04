import {NavigationContainer} from '@react-navigation/native';
import PublicStacks from './public/public.stacks';
import { useAuth } from '../contexts/auth.context';
import PrivateStacks from './private/private.stacks';

const Router = () => {
  const auth = useAuth()
  const isAuth = auth.isAuth

  return (
    <NavigationContainer>
      {isAuth ? <PrivateStacks /> : <PublicStacks />}
    </NavigationContainer>
  );
};

export default Router
