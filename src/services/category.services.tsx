import axios from 'axios';
import {apiUrl} from '../utils/constants/apiUrl.constants';
import { CreateCategory } from '../interfaces/categorys.interface';

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

export const CreateCategoryServices = async (dto :CreateCategory, token: string | null) => {
  console.log(dto);
  try {
    await axios.post(`${apiUrl}/categorys/`, dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    throw err;
  }
}

export const AddMoneyToCategoryServices = async (
  id: string | null | undefined,
  token: string | null,
  budgetID: string | null | undefined,
  money: number,
) => {
  const body = {
    budget_for_category: money,
    budgetID
  }
  try {
    await axios.patch(`${apiUrl}/categorys/${id}/`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    throw err;
  }
};

export const DeleteCategoryServices = async (
  id: string | null | undefined,
  token: string | null,
) => {
  try {
    await axios.delete(`${apiUrl}/categorys/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    throw err;
  }
};
