import axios from 'axios';
import {apiUrl} from '../utils/constants/apiUrl.constants';

export const GetBudgetsServices = async (userId: string | null, token: string | null) => {
  try {
    const budgets = await axios.get(`${apiUrl}/budget/budgetsuser/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return budgets.data
  } catch (err) {
    throw err;
  }
};
