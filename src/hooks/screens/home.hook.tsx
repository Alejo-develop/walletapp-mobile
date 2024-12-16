import {useState} from 'react';
import {WalletResponse} from '../../interfaces/wallet.interface';
import {useAuth} from '../../contexts/auth.context';
import {findWalletByIdService} from '../../services/wallet.services';
import {GetBudgetsServices} from '../../services/budget.services';
import {BudgetResponse} from '../../interfaces/budgets.interface';
import {FindCantegorysServices} from '../../services/category.services';
import {CategoryResponse} from '../../interfaces/categorys.interface';

const HomeHook = () => {
  const auth = useAuth();
  const [walletInfo, setWalletInfo] = useState<WalletResponse | null>(null);
  const [budgets, setBudgets] = useState<BudgetResponse[] | null>(null);
  const [categorys, setCategorys] = useState<CategoryResponse[] | null>(null);
  const [budgetId, setBudgetId] = useState<string | null>(null);
  const [walletError, setWalletError] = useState<boolean>(true)
  const [getNewWallet, setGetNewWallet] = useState<boolean>(false);
  const [isVisibleBudgetModal, setIsVisibleBudgetModal] = useState<boolean>(false)

  const fetchWallet = async () => {
    const userId = auth.getId();
    const token = await auth.getToken();

    try {
      const wallet = await findWalletByIdService(userId, token);

      setWalletInfo(wallet);
      setWalletError(true)
      return wallet;
    } catch (err) {
      setWalletError(false)
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

  const fetchCategorys = async () => {
    const userId = auth.getId();
    const token = await auth.getToken();
    try {
      const categorys = await FindCantegorysServices(userId, budgetId, token);  
      setCategorys(categorys);
      return categorys;
    } catch (err) {
      console.log(err);
    } 
  };

  return {
    categorys,
    walletInfo,
    budgetId,
    budgets,
    walletError,
    getNewWallet,
    isVisibleBudgetModal,
    setIsVisibleBudgetModal,
    setGetNewWallet,
    fetchWallet,
    fetchBudgets,
    fetchCategorys,
    setBudgetId,
  };
};

export default HomeHook;
