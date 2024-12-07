import axios from 'axios';
import {apiUrl} from '../utils/constants/apiUrl.constants';
import { WalletResponse } from '../interfaces/wallet.interface';

export const findWalletByIdService = async (userId: string | null, token: string | null) => {
  console.log(userId, token);
  try {
    const walletFound = await axios.get<WalletResponse>(`${apiUrl}/wallet/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    

    return walletFound.data;
  } catch (error) {
    throw error;
  }
};
