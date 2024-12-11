import {BudgetResponse} from './budgets.interface';
import {CategoryResponse} from './categorys.interface';
import { WalletResponse } from './wallet.interface';

export interface BudgetListComponentProps {
  data: BudgetResponse[] | null;
  setID: React.Dispatch<React.SetStateAction<string | null>>;
  widthChoose: number,
  labelFocus: string,
  placeholder: string,
  placeholderFocus: string
}

export interface CategoryContainerComponent {
  data: CategoryResponse[] | null;
}

export interface walletInfoComponent{
  data: WalletResponse | null,
  walletError: boolean,
  setNewWallet: React.Dispatch<React.SetStateAction<boolean>>;
} 
