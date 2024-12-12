import {BudgetResponse} from './budgets.interface';
import {CategoryResponse} from './categorys.interface';
import {WalletResponse} from './wallet.interface';

export interface BudgetListComponentProps {
  data: (BudgetResponse | CategoryResponse)[] | null;
  widthChoose: number;
  labelFocus: string;
  placeholder: string;
  placeholderFocus: string;
  setID?: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface CategoryContainerComponent {
  data: CategoryResponse[] | null;
}

export interface walletInfoComponent {
  data: WalletResponse | null;
  budgets: BudgetResponse[] | null;
  categorys: CategoryResponse[] | null;
  walletError: boolean;
  setID?: React.Dispatch<React.SetStateAction<string | null>>;
  setNewWallet: React.Dispatch<React.SetStateAction<boolean>>;
}
