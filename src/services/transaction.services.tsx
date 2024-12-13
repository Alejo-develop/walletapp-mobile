import axios from 'axios';
import {CreateTransactionInterface} from '../interfaces/transactions.interface';
import {apiUrl} from '../utils/constants/apiUrl.constants';

export const createTransactionServices = async (
  form: CreateTransactionInterface | null,
  token: string | null,
) => {
  try {
    await axios.post<CreateTransactionInterface>(`${apiUrl}/transactions`, form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return 
  } catch (err) {
    throw err;
  }
};
