import {useState} from 'react';
import {FormCategoryInterface} from '../../interfaces/categorys.interface';
import {useAuth} from '../../contexts/auth.context';
import {useNavigation} from '@react-navigation/native';
import {GetBudgetsServices} from '../../services/budget.services';
import {BudgetResponse} from '../../interfaces/budgets.interface';
import {CreateCategoryServices} from '../../services/category.services';
import {WalletResponse} from '../../interfaces/wallet.interface';
import {findWalletByIdService} from '../../services/wallet.services';

const CreateCategoryHook = () => {
  const auth = useAuth();
  const goTo = useNavigation() as any;
  const [form, setForm] = useState<FormCategoryInterface>({
    name: '',
    budget_for_category: 0,
  });
  const [budgets, setBudgets] = useState<BudgetResponse[] | null>(null);
  const [budgetId, setBudgetID] = useState<string | null>(null);
  const [walletInfo, setWalletInfo] = useState<WalletResponse | null>(null);

  const handleFormChange = (
    field: keyof FormCategoryInterface,
    value: string,
  ) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: field === 'budget_for_category' ? Number(value) : value ?? '',
    }));
  };

  const fetchWallet = async () => {
    const userId = auth.getId();
    const token = await auth.getToken();

    try {
      const wallet = await findWalletByIdService(userId, token);

      setWalletInfo(wallet);
      return wallet;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBudgets = async () => {
    const userId = auth.getId();
    const token = await auth.getToken();
    try {
      const budgets = await GetBudgetsServices(userId, token);
      setBudgets(budgets);
      return budgets;
    } catch (err) {
      console.log(err);
    }
  };

  const createCategory = async (
    budgetId: string | null,
    walletId: string | null |undefined,
    form: FormCategoryInterface,
  ) => {
    const token = await auth.getToken();
    const userId = auth.getId();

    const formatedData = {
      ...form,
      userID: userId,
      budgetID: budgetId,
      walletID: walletId,
    };

    try {
      await CreateCategoryServices(formatedData, token);
      goTo.navigate('main');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    form,
    budgets,
    budgetId,
    walletInfo,
    fetchWallet,
    setBudgetID,
    setForm,
    handleFormChange,
    createCategory,
    fetchBudgets,
  };
};

export default CreateCategoryHook;
