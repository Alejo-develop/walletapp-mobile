import {Dispatch, SetStateAction, useState} from 'react';
import {TransactionFormInterface} from '../../interfaces/transactions.interface';
import {useAuth} from '../../contexts/auth.context';
import {createTransactionServices} from '../../services/transaction.services';
import {ErrorResponse} from '../../interfaces/error.interface';

const TransactionModalHook = () => {
  const [form, setForm] = useState<TransactionFormInterface>({});
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [budgetID, setBudgetID] = useState<string | null>(null);
  const [categoryID, setCategoryID] = useState<string | null>(null);
  const [error, setError] = useState<string>();
  const auth = useAuth();

  const handleFormChange = (
    field: keyof TransactionFormInterface,
    value: string,
  ) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: field === 'cost' ? Number(value) : value ?? '',
    }));
  };

  const createTransaction = async (
    form: TransactionFormInterface,
    walletID: string | null | undefined,
    setClose: Dispatch<SetStateAction<boolean>>,
  ) => {
    const userId = auth.getId();
    const token = await auth.getToken();

    const formatedForm = {
      ...form,
      walletID: walletID,
      userID: userId,
      categoryID: categoryID,
      budgetID: budgetID,
    };

    try {
      await createTransactionServices(formatedForm, token);
      setClose(false);
    } catch (err: any) {
      const apiError = err.response?.data as ErrorResponse;
      if (apiError?.message) {
        setError(apiError.message);
      } else {
        console.error(err);
      }
    }
  };

  return {
    form,
    budgetID,
    categoryID,
    isModalVisible,
    error,
    handleFormChange,
    setIsModalVisible,
    setCategoryID,
    setBudgetID,
    createTransaction,
  };
};

export default TransactionModalHook;
