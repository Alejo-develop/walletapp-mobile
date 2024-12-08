import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity, View} from 'react-native';
import {secondaryColor, width} from '../../utils/constants/style.constants';
import {ButtonIconProps} from '../../interfaces/button.props';
import styles from './styles';

const ButtonIconComponent = ({name, text}: ButtonIconProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerButton}>
        <Icon
          name={`${name}`}
          color={'white'}
          size={width * 0.06}
          style={styles.icon}
        />
      </TouchableOpacity>

      <View>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </View>
  );
};

export default ButtonIconComponent;
