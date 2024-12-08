import {Text, View, FlatList} from 'react-native';
import styles from '../style';
import ButtonCategoryComponent from '../../../components/buttonCategory/buttonCategory.component';
import React from 'react';
import { CategoryContainerComponent } from '../../../interfaces/home.interface';

const CategoryContainerComponents = ({data}: CategoryContainerComponent) => {
  return (
    <View style={styles.containerSectionCategory}>
      <Text style={styles.titleCategorys}>Categorys</Text>

      <View style={styles.containerCategorys}>
        {data && data.length > 0 ? (
          <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.item}>
              <ButtonCategoryComponent
                icon={item.url_icon}
                title={item.name}
                cost={item.budget_for_category}
              />
            </View>
          )}
          numColumns={3}
          scrollEnabled={true}
        />
        ): (
          <Text>No categories available.</Text>
        )}
      </View>
    </View>
  );
};

export default CategoryContainerComponents;
