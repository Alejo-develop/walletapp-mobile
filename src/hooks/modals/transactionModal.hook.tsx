import {useState} from 'react';

const TransactionModalHook = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return {
    isModalVisible,
    setIsModalVisible,
  };
};

export default TransactionModalHook;
