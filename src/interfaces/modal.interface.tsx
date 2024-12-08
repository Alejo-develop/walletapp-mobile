import { Dispatch, SetStateAction } from 'react';
import {WalletInterface, WalletResponse} from './wallet.interface';

export interface WalletModal {
  visible: boolean;
  onClose: () => void;
  wallet?: WalletResponse | null;
  walletError: boolean;
  walletForm: WalletResponse | null;
  setWalletForm: Dispatch<SetStateAction<WalletResponse>>
  handleFormChange: (field: keyof WalletResponse, value: string) => void;
  handleEdit: (wallet: WalletInterface | null) => Promise<void>;
  handleSubmit: (wallet: WalletInterface | null) => Promise<void>;
}

export interface CreditCardProps {
  wallet?: WalletResponse | null | undefined;
  walletError: boolean;
  handleFormChange: (field: keyof WalletResponse, value: string) => void;
}
