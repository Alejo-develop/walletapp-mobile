import axios from 'axios';
import {apiUrl} from '../utils/constants/apiUrl.constants';
import { UserResponseInterface } from '../interfaces/user.interface';

export const getUserServices = async (id: string, token: string) => {
  try {
    const user = await axios.get<UserResponseInterface>(`${apiUrl}/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
