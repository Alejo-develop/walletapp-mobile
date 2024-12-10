import axios from 'axios';
import {apiUrl} from '../utils/constants/apiUrl.constants';
import {WalletInterface, WalletResponse} from '../interfaces/wallet.interface';

export const findWalletByIdService = async (
  userId: string | null,
  token: string | null,
) => {
  try {
    const walletFound = await axios.get<WalletResponse>(
      `${apiUrl}/wallet/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return walletFound.data;
  } catch (error) {
    throw error;
  }
};

export const createWalletServices = async (
  token: string | null,
  walletUpdate: WalletInterface | null
) => {
  try {
    await axios.post<WalletInterface>(`${apiUrl}/wallet`, walletUpdate, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return
  } catch (error) {
    throw error;
  }
};

export const updateWalletServices = async (
  id: string | undefined,
  token: string | null,
  walletUpdate: WalletInterface | null,
) => {
  try {
    await axios.patch<WalletResponse>(`${apiUrl}/wallet/${id}`, walletUpdate, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return;
  } catch (error) {
    throw error;
  }
};
