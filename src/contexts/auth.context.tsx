import {createContext, useContext, useState} from 'react';
import {
  AuthContextProps,
  AuthProviderProps,
} from '../interfaces/auth.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserServices} from '../services/user.services';
import {UserResponseInterface} from '../interfaces/user.interface';

const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  signOut: async () => {},
  saveSessionInfo: async () => {},
  getInfoUser: async () => Promise.resolve(null),
  userInfo: null,
  name: null
});

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [idUser, setIdUser] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserResponseInterface | any>();

  const saveSessionInfo = async (id: string, token: string, name: string) => {
    setIsAuth(true);
    setIdUser(id);
    setName(name)
    await AsyncStorage.setItem('accesstoken', token);
    console.log('session guardada');

    return;
  };

  const signOut = async () => {
    setIsAuth(false);
    await AsyncStorage.removeItem('accesstoken');

    return;
  };

  const getId = () => {
    return idUser;
  };

  const getToken = async () => {
    return (await AsyncStorage.getItem('accesstoken')) as string;
  };

  const fetchInfouser = async () => {
    const id = getId();
    const token = await getToken();

    try {
      const user = await getUserServices(id, token);

      return user;
    } catch (err) {
      console.log(err);
    }
  };

  const getInfoUser = async () => {
    const user = await fetchInfouser()
    console.log(user);
    

    setUserInfo(user);
    return user;
  };

  return (
    <AuthContext.Provider
      value={{getInfoUser, isAuth, saveSessionInfo, signOut, userInfo, name}}>
      {children}
    </AuthContext.Provider> 
  );
};

export const useAuth = () => useContext(AuthContext);
