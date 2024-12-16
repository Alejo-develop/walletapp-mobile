import axios from 'axios';
import {
  CreateTransactionInterface,
  TransactionResponseInterface,
} from '../interfaces/transactions.interface';
import {apiUrl} from '../utils/constants/apiUrl.constants';

export const createTransactionServices = async (
  form: CreateTransactionInterface | null,
  token: string | null,
) => {
  try {
    await axios.post<CreateTransactionInterface>(
      `${apiUrl}/transactions`,
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return;
  } catch (err) {
    throw err;
  }
};

export const findAllTransactionsServices = async (
  userId: string | null,
  token: string | null,
) => {
  try {
    const transactions = await axios.get<TransactionResponseInterface[]>(
      `${apiUrl}/transactions/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return transactions;
  } catch (err) {
    throw err;
  }
};
