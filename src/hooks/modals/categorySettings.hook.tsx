import {useState} from 'react';

const CategorySettingsHook = () => {
  const [visibleModalId, setVisibleModalId] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setVisibleModalId(id);
  };

  const handleCloseModal = () => {
    setVisibleModalId(null);
  };

  const deleteCategory = async (id: string) => {};

  const addMoney = async (id: string) => {};

  return {
    visibleModalId,
    handleCloseModal,
    handleOpenModal,
    setVisibleModalId,
    deleteCategory,
    addMoney,
  };
};

export default CategorySettingsHook;
