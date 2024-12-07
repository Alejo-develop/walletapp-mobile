import {useState} from 'react';
import {WalletResponse} from '../interfaces/wallet.interface';
import {useAuth} from '../contexts/auth.context';
import {findWalletByIdService} from '../services/wallet.services';
import {GetBudgetsServices} from '../services/budget.services';
import {BudgetResponse} from '../interfaces/budgets.interface';
import { FindCantegorysServices } from '../services/category.services';

const HomeHook = () => {
  const auth = useAuth();
  const [walletInfo, setWalletInfo] = useState<WalletResponse | null>(null);
  const [budgets, setBudgets] = useState<BudgetResponse[] | null>(null)
  const [budgetId, setBudgetId] = useState<string |null>(null)

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

  const fetchCategorys = async () => {
    const userId = auth.getId();
    const token = await auth.getToken();
    try {
      const categorys = await FindCantegorysServices(userId, budgetId, token);
      setBudgets(categorys);
      return categorys;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    fetchWallet,
    walletInfo,
    fetchBudgets,
    budgets,
    fetchCategorys,
    setBudgetId
  };
};

export default HomeHook;
