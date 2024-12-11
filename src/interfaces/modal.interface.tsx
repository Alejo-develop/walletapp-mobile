import {Dispatch, SetStateAction} from 'react';
import {WalletInterface, WalletResponse} from './wallet.interface';

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
  handleSubmit: (wallet: WalletInterface | null, setNewWallet: Dispatch<SetStateAction<boolean>>) => Promise<void>;
  setNewWallet: Dispatch<SetStateAction<boolean>>;
}

export interface HeaderModalProps{
  onClose: () => void;
  text: string
}

export interface TransactionModal {
  visibleModal: boolean;
  onClose: () => void;
  walletID?: WalletResponse | null;
}

export interface CreditCardProps {
  wallet?: WalletResponse | null | undefined;
  walletError: boolean;
  handleFormChange: (field: keyof WalletResponse, value: string) => void;
}
