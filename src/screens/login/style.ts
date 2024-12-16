import {StyleSheet} from 'react-native';
import {
  primaryColor,
  height,
  width,
} from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: width * 1,
    height: height * 0.85,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    gap: height * 0.05,
    paddingTop: height * 0.09
  },
});

export default styles;
