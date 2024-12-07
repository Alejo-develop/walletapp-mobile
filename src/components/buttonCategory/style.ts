import {StyleSheet} from 'react-native';
import { fourthyCorlor, height, primaryColor, secondaryColor, width } from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  button: {
    width: width * 0.25,
    height: height * 0.1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },
  icon: {
    color: secondaryColor,
    fontSize: height * 0.04,
    backgroundColor: primaryColor,
    padding: 12,
    borderRadius: 12
  },
  title: {
    color: secondaryColor
  },
  budget: {
    color: fourthyCorlor
  }
});

export default styles;
