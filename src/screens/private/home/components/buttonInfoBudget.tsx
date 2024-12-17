import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { height, primaryColor, terceryColor, width } from '../../../../utils/constants/style.constants';
import { ButtonInfoBudgetProps } from '../../../../interfaces/button.props';

const ButtonInfoBudgetComponent = ({onPress, text, icon}: ButtonInfoBudgetProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} color={terceryColor} size={height * 0.03}/>

      <Text style={{fontSize: height * 0.01}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    alignItems: 'center',
    borderRadius: 2,
    width: width * 0.2,
    elevation: 6,
  },
});

export default ButtonInfoBudgetComponent;
