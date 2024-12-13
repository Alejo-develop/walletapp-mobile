import {useState} from 'react';
import {TransactionInterface} from '../../interfaces/transactions.interface';
import {useAuth} from '../../contexts/auth.context';
import { createTransactionServices } from '../../services/transaction.services';

const TransactionModalHook = () => {
  const [form, setForm] = useState<TransactionInterface>({});
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [budgetID, setBudgetID] = useState<string | null>(null);
  const [categoryID, setCategoryID] = useState<string | null>(null);
  const [error, setError] = useState<string>()
  const auth = useAuth();

  const handleFormChange = (
    field: keyof TransactionInterface,
    value: string,
  ) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: field === 'cost' ? Number(value) : value ?? '',
    }));
  };

  const createTransaction = async (
    form: TransactionInterface,
    walletID: string | null | undefined,
  ) => {
    const userId = auth.getId()
    const token = await auth.getToken()

    const formatedForm = {
      ...form,
      walletID: walletID,
      userID: userId,
      categoryID: categoryID,
      budgetID: budgetID
    }

    try {
      await createTransactionServices(formatedForm, token)
    } catch (err) {
      console.log(err);
    }
  };

  return {
    form,
    budgetID,
    categoryID,
    isModalVisible,
    handleFormChange,
    setIsModalVisible,
    setCategoryID,
    setBudgetID,
    createTransaction,
  };
};

export default TransactionModalHook;
