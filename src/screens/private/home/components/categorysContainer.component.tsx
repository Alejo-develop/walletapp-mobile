import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from '../style';
import ButtonCategoryComponent from '../../../../components/buttonCategory/buttonCategory.component';
import { CategoryContainerComponent } from '../../../../interfaces/home.interface';
import SettingsCategoryModal from '../../../../components/settingsCategory/settingsCategory.modal';
import CategorySettingsHook from '../../../../hooks/modals/categorySettings.hook';

const CategoryContainerComponents = ({ data }: CategoryContainerComponent) => {
  const { deleteCategory, addMoney, handleCloseModal, handleOpenModal, setVisibleModalId, visibleModalId} = CategorySettingsHook()

  return (
    <View style={styles.containerSectionCategory}>
      <Text style={styles.titleCategorys}>Categories</Text>

      <View style={styles.containerCategorys}>
        {data && data.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <ButtonCategoryComponent
                  icon={item.url_icon}
                  title={item.name}
                  cost={item.budget_for_category}
                  onPress={() => handleOpenModal(item.id)}
                />
                <SettingsCategoryModal
                  visibleModal={visibleModalId === item.id}
                  onClose={handleCloseModal}
                  info={item}
                  id={visibleModalId}
                  deleteCategory={deleteCategory}
                  addMoney={addMoney}
                  
                />
              </View>
            )}
            numColumns={3}
            scrollEnabled={true}
          />
        ) : (
          <Text>No categories available.</Text>
        )}
      </View>
    </View>
  );
};

export default CategoryContainerComponents;
