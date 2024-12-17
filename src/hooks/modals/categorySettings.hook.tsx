import {useState} from 'react';
import {useAuth} from '../../contexts/auth.context';
import {AddMoneyToCategoryServices, DeleteCategoryServices} from '../../services/category.services';
import {ErrorResponse} from '../../interfaces/error.interface';

const CategorySettingsHook = () => {
  const [visibleModalId, setVisibleModalId] = useState<string | null>(null);
  const auth = useAuth();
  const [error, setError] = useState<string>('');

  const handleOpenModal = (id: string) => {
    setVisibleModalId(id);
  };

  const handleCloseModal = () => {
    setVisibleModalId(null);
  };

  const deleteCategory = async (id: string | undefined) => {
    const token = await auth.getToken();
    try {
        await DeleteCategoryServices(id, token);
        setVisibleModalId(null)
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
    BudgetID: string | null,
    money: number,
  ) => {
    const token = await auth.getToken();
    console.log(money, BudgetID, token);
    

    try {
      await AddMoneyToCategoryServices(id, token, BudgetID, money);
      setVisibleModalId(null)
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
    visibleModalId,
    handleCloseModal,
    handleOpenModal,
    setVisibleModalId,
    deleteCategory,
    addMoney,
  };
};

export default CategorySettingsHook;
