import {useState} from 'react';
import {useAuth} from '../../contexts/auth.context';
import {ErrorResponse} from '../../interfaces/error.interface';
import {AddMoneyBudgetsServices, DeleteBudgetsServices} from '../../services/budget.services';
import { useNavigation } from '@react-navigation/native';

const BudgetSettingsHook = () => {
  const auth = useAuth();
  const [error, setError] = useState<string>('');
  const [isModalAddMoney, setModalAddMoney] = useState<boolean>(false)
  const goTo = useNavigation() as any

  const addCategory = () => {
    goTo.navigate('createcategory')
  }

  const deleteBudget = async (id: string | null) => {
    const token = await auth.getToken();
    try {
      await DeleteBudgetsServices(id, token);
    } catch (err: any) {
      const apiError = err.response?.data as ErrorResponse;
      if (apiError?.message) {
        console.log(apiError.message);

        setError(apiError.message);
      } else {
        console.error(err);
      }
    }
  };

  const addMoney = async (
    id: string | null,
    money: number | null,
  ) => {
    if(money === null) return

    const token = await auth.getToken();
    const userId = auth.getId()

    try {
      await AddMoneyBudgetsServices(id, userId, token, money);
      setModalAddMoney(false)
    } catch (err: any) {
      const apiError = err.response?.data as ErrorResponse;
      if (apiError?.message) {
        console.log(apiError.message);

        setError(apiError.message);
      } else {
        console.error(err);
      }
    }
  };

  return {
    deleteBudget,
    addMoney,
    setModalAddMoney,
    addCategory,
    error,
    isModalAddMoney
  };
};

export default BudgetSettingsHook;
