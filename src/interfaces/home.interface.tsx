import {BudgetResponse} from './budgets.interface';
import {CategoryResponse} from './categorys.interface';
import { WalletResponse } from './wallet.interface';

export interface BudgetListComponentProps {
  data: BudgetResponse[] | null;
  setBudgetID: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface CategoryContainerComponent {
  data: CategoryResponse[] | null;
}

export interface walletInfoComponent{
  data: WalletResponse | null,
  walletError: boolean,
  setNewWallet: React.Dispatch<React.SetStateAction<boolean>>;
} 
