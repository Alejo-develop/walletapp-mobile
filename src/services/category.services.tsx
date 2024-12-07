import axios from 'axios';
import {apiUrl} from '../utils/constants/apiUrl.constants';

export const FindCantegorysServices = async (
  budgetId: string | null,
  userId: string | null,
  token: string | null,
) => {
  try {
    const categorys = await axios.get(
      `${apiUrl}/categorys/${budgetId}/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return categorys.data;
  } catch (err) {
    throw err;
  }
};
