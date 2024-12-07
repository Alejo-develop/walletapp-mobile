import {Text, View, FlatList} from 'react-native';
import styles from '../style';
import ButtonCategoryComponent from '../../../components/buttonCategory/buttonCategory.component';

const data = [
  {id: '1', icon: 'home', title: 'House', cost: '1500'},
  {id: '2', icon: 'car', title: 'Car', cost: '800'},
  {id: '3', icon: 'home', title: 'Food', cost: '500'},
  {id: '4', icon: 'home', title: 'Health', cost: '200'},
  {id: '5', icon: 'home', title: 'Health', cost: '200'},
  {id: '6', icon: 'home', title: 'Health', cost: '200'},
  {id: '7', icon: 'home', title: 'Health', cost: '200'},
  {id: '8', icon: 'home', title: 'Health', cost: '200'},
  {id: '9', icon: 'home', title: 'Health', cost: '200'},
  {id: '10', icon: 'home', title: 'Health', cost: '200'},
  {id: '11', icon: 'home', title: 'Health', cost: '200'},
  {id: '12', icon: 'home', title: 'Health', cost: '200'},
  {id: '13', icon: 'home', title: 'Health', cost: '200'},
];

const CategoryContainerComponents = () => {
  return (
    <View style={styles.containerSectionCategory}>
      <Text style={styles.titleCategorys}>Categorys</Text>

      <View style={styles.containerCategorys}>
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.item}>
              <ButtonCategoryComponent
                icon={item.icon}
                title={item.title}
                cost={item.cost}
              />
            </View>
          )}
          numColumns={3}
          scrollEnabled={true}
        />
      </View>
    </View>
  );
};

export default CategoryContainerComponents;
