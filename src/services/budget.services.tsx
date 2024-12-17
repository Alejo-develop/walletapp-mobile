import axios from 'axios';
import {apiUrl} from '../utils/constants/apiUrl.constants';
import {CreateBudgetInterface} from '../interfaces/budgets.interface';

export const GetBudgetsServices = async (
  userId: string | null,
  token: string | null,
) => {
  try {
    const budgets = await axios.get(`${apiUrl}/budget/budgetsuser/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return budgets.data;
  } catch (err) {
    throw err;
  }
};

export const CreateBudgetsServices = async (
  dto: CreateBudgetInterface,
  token: string | null,
) => {
  try {
    await axios.post(`${apiUrl}/budget`, dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return;
  } catch (err) {
    throw err;
  }
};

export const AddMoneyBudgetsServices = async (
  id: string | null,
  userId: string | null,
  token: string | null,
  money: number,
) => {
  const dto = {
    budget: money,
  };
  try {
    const budgets = await axios.patch(`${apiUrl}/budget/${id}/${userId}`, dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return budgets.data;
  } catch (err) {
    throw err;
  }
};

export const DeleteBudgetsServices = async (
  id: string | null,
  token: string | null,
) => {
  try {
    const budgets = await axios.delete(`${apiUrl}/budget/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return budgets.data;
  } catch (err) {
    throw err;
  }
};
