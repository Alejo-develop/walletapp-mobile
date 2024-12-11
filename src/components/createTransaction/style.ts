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
  img: {
    width: width * 0.6,
    height: height * 0.07,
    borderWidth: 3,
  },
  containerInput: {
    marginTop: height * 0.025,
    gap: height * 0.02
  },
  titleInput: {
    color: 'white',
    marginBottom: height * 0.012
  }
});

export default styles;
