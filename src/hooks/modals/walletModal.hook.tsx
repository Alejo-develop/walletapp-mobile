import {useState} from 'react';
import {useAuth} from '../../contexts/auth.context';
import {WalletInterface, WalletResponse} from '../../interfaces/wallet.interface';

const WalletModalHook = () => {
  const auth = useAuth();
  const [walletForm, setWalletForm] = useState<WalletInterface>({});
  const [visibleWalletModal, setCloseWalletModal] = useState<boolean>(false);

  const handleFormChange = (field: keyof WalletResponse, value: string) => {
    setWalletForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleSubmit = async (wallet: WalletInterface | null) => {
    console.log(wallet);
    
  };

  const handleEdit = async (wallet: WalletInterface | null) => {
    console.log(wallet);
  };

  return{
    walletForm,
    visibleWalletModal,
    setCloseWalletModal,
    handleFormChange,
    setWalletForm,
    handleEdit,
    handleSubmit
  }
};

export default WalletModalHook
