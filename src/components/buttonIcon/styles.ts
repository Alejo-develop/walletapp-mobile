import {Button, StyleSheet} from 'react-native';
import { secondaryColor, terceryColor, width } from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    gap: 10
  },
    containerButton: {
    alignItems: 'center',
    width: width * 0.2,
    backgroundColor: terceryColor,
    borderRadius: 12
  },
  textButton: {
    textAlign: 'center',
    color: secondaryColor
  },
  icon: {
    padding: 15,
    alignSelf: 'center'
  }
});

export default styles;
