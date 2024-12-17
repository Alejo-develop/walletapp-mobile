import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonCategoryProps } from '../../interfaces/button.props';

const ButtonCategoryComponent = ({title, icon, cost, onPress}: ButtonCategoryProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Icon style={styles.icon} name={icon} />
      <Text style={styles.budget}>${cost}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCategoryComponent;
