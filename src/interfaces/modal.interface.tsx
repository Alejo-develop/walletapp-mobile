import {Dispatch, SetStateAction} from 'react';
import {WalletInterface, WalletResponse} from './wallet.interface';
import {BudgetResponse} from './budgets.interface';
import {CategoryResponse} from './categorys.interface';
import {TransactionResponseInterface} from './transactions.interface';

export interface WalletModal {
  visible: boolean;
  onClose: () => void;
  wallet?: WalletResponse | null;
  walletError: boolean;
  walletForm: WalletResponse | null;
  setWalletForm: Dispatch<SetStateAction<WalletResponse>>;
  handleFormChange: (field: keyof WalletResponse, value: string) => void;
  handleEdit: (
    id: string | undefined,
    wallet: WalletInterface | null,
    setNewWallet: Dispatch<SetStateAction<boolean>>,
  ) => Promise<void>;
  handleSubmit: (
    wallet: WalletInterface | null,
    setNewWallet: Dispatch<SetStateAction<boolean>>,
  ) => Promise<void>;
  setNewWallet: Dispatch<SetStateAction<boolean>>;
}

export interface HeaderModalProps {
  onClose: () => void;
  text: string;
}

export interface TransactionModal {
  visibleModal: boolean;
  onClose: () => void;
  walletID?: string | null;
  budgets: BudgetResponse[] | null;
  categorys: CategoryResponse[] | null;
  setID?: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface TransactionInfoProps {
  visibleModal: boolean;
  onClose: () => void;
  info: TransactionResponseInterface;
}

export interface BudgetInfoProps {
  visibleModal: boolean;
  onClose: () => void;
  info: BudgetResponse | null;
}

export interface CategorySettingsProps {
  visibleModal: boolean;
  onClose: () => void;
  id: string | null;
  info: CategoryResponse | null;
  deleteCategory?: (id: string) => void;
  addMoney?: (
    id: string | null,
    BudgetID: string | null,
    money: number,
  ) => void;
}

export interface DeleteAndAddMoneyModalProps {
  id?: string |null;
  budgetID?: string | null;
  visibleModal: boolean;
  onClose: () => void;
  deleteCategory?: (id: string) => void;
  addMoney?: (
    id: string | null,
    BudgetID: string | null,
    money: number,
  ) => void;
  addMoneyBudget?: (
    id: string | null,
    money: number | null,
  ) => void;
}

export interface CreditCardProps {
  wallet?: WalletResponse | null | undefined;
  walletError: boolean;
  handleFormChange: (field: keyof WalletResponse, value: string) => void;
}
