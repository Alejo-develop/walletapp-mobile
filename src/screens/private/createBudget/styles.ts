import {StyleSheet} from 'react-native';
import {
  fourthyCorlor,
  height,
  primaryColor,
  terceryColor,
  width,
} from '../../../utils/constants/style.constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    width: width * 1,
    height: height * 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: height * 0.3,
    gap: height * 0.05,
  },
  titleScreen: {
    fontSize: height * 0.03,
    color: 'white',
    fontWeight: '700'
  },
  containerInputs: {
    gap: 10,
    alignItems: 'center'
  },
  inputs: {
    gap: 10,
  },
  title: {
    color: 'white'
  }
});

export default styles
