import {StyleSheet} from 'react-native';
import { height, primaryColor, width } from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: primaryColor,
    borderWidth: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: height * 0.91,
    width: width * 1,
    elevation: 12,
    alignItems: 'center',
  },
  containerImg: {
    borderWidth: 10
  },
  img: {
    width: width * 0.75,
    height: height * 0.17,
    borderWidth: 3,
  }
});

export default styles;
