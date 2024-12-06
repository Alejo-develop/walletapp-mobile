import axios from 'axios';
import {AuthInterface} from '../interfaces/auth.interface';
import {apiUrl} from '../utils/constants/apiUrl.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginService = async (user: AuthInterface) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/login`, user);
    
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const signUpService = async (user: AuthInterface) => {
  try {
    await axios.post(`${apiUrl}/auth/signup`, user)

    return
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const isFirstLaunchService = async () => {
  try {
    const hasCompletedOnboarding = await AsyncStorage.getItem(
      'onboardingCompleted',
    );

    return hasCompletedOnboarding === null;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
