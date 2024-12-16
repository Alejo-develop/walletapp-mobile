import {StyleSheet} from 'react-native';
import {
  height,
  primaryColor,
  secondaryColor,
  width,
} from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  containerHeader: {
    width: width * 1,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    gap: width * 0.08,
    backgroundColor: primaryColor
  },
  cashify: {
    fontSize: height * 0.02,
    color: 'white',
  },
  welcome: {
    fontSize: height * 0.02,
    color: secondaryColor,
  },
  children: {
    height: height * 0.83,
  },
  sectionLeft: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  }
});

export default styles;
