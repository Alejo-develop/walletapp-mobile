import {Dispatch, SetStateAction, useState} from 'react';
import {useAuth} from '../../contexts/auth.context';
import {
  WalletInterface,
  WalletResponse,
} from '../../interfaces/wallet.interface';
import {ErrorResponse} from '../../interfaces/error.interface';
import {
  createWalletServices,
  updateWalletServices,
} from '../../services/wallet.services';

const WalletModalHook = () => {
  const auth = useAuth();
  const [walletForm, setWalletForm] = useState<WalletInterface>({});
  const [visibleWalletModal, setCloseWalletModal] = useState<boolean>(false);
  const [error, SetError] = useState<string>('');

  const handleFormChange = (field: keyof WalletResponse, value: string) => {
    setWalletForm(prevForm => ({
      ...prevForm,
      [field]:
        field === 'extraCash' ||
        field === 'salary' ||
        field === 'totalCash' ||
        field === 'expenditures'
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (
    wallet: WalletInterface | null,
    setNewWallet: Dispatch<SetStateAction<boolean>>,
  ) => {
    if (!wallet) {
      setCloseWalletModal(false);
    }

    const userID = auth.getId();
    const token = await auth.getToken();

    const formatWallet = {
      ...wallet,
      userID: userID,
    };

    try {
      console.log(formatWallet);

      await createWalletServices(token, formatWallet);

      setCloseWalletModal(false);
      setNewWallet(true);
    } catch (err: any) {
      const error = err.response?.data as ErrorResponse;

      if (error.message) {
        SetError(error.message);
      }
      console.log(error);
    }
  };

  const handleEdit = async (
    id: string | undefined,
    wallet: WalletInterface | null,
    setNewWallet: Dispatch<SetStateAction<boolean>>,
  ) => {
    if (!wallet) {
      setCloseWalletModal(false);
    }

    const token = await auth.getToken();
    try {
      await updateWalletServices(id, token, wallet);

      setCloseWalletModal(false);
      setNewWallet(true);
    } catch (err: any) {
      const error = err.response?.data as ErrorResponse;

      if (error.message) {
        SetError(error.message);
      }
      console.log(error);
    }
  };

  return {
    walletForm,
    visibleWalletModal,
    setCloseWalletModal,
    handleFormChange,
    setWalletForm,
    handleEdit,
    handleSubmit,
  };
};

export default WalletModalHook;
