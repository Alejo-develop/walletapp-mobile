import {useState} from 'react';
import {useAuth} from '../../contexts/auth.context';
import {useNavigation} from '@react-navigation/native';
import {WalletResponse} from '../../interfaces/wallet.interface';
import {findWalletByIdService} from '../../services/wallet.services';
import {FormBudget} from '../../interfaces/budgets.interface';
import { CreateBudgetsServices } from '../../services/budget.services';

const CreateBudgetHook = () => {
  const auth = useAuth();
  const goTo = useNavigation() as any;
  const [form, setForm] = useState<FormBudget>({
    name: '',
    budget: 0,
  });
  const [walletInfo, setWalletInfo] = useState<WalletResponse | null>(null);

  const handleFormChange = (field: keyof FormBudget, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: field === 'budget' ? Number(value) : value ?? '',
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

  const createBudget = async (
    form: FormBudget,
    walletId: string | null | undefined,
  ) => {
    const token = await auth.getToken();
    const userId = auth.getId();

    const formatedData = {
      ...form,
      userID: userId,
      walletID: walletId,
    };

    try {
        await CreateBudgetsServices(formatedData, token)
        goTo.navigate('main');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    form,
    walletInfo,
    fetchWallet,
    setForm,
    handleFormChange,
    createBudget,
  };
};

export default CreateBudgetHook;
