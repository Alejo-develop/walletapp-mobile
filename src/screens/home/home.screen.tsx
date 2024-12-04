import {Text, View} from 'react-native';
import styles from './style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>
          Hola desde home screen
      </Text>
    </View>
  );
};

export default HomeScreen;
