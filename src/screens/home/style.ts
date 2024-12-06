import {Platform, StyleSheet} from 'react-native';
import {
  height,
  primaryColor,
  secondaryColor,
  width,
} from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    width: width * 1,
    height: height * 1,
    backgroundColor: primaryColor,
  },
  containerMoney: {
    width: width * 1,
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    gap: height * 0.035
  },
  money: {
    color: secondaryColor,
    fontSize: height * 0.05,
    fontWeight: '700',
    fontFamily: Platform.select({ ios: 'Arial', android: 'Roboto', }),
  },
  subtract: {
    color: secondaryColor,
    textAlign: 'center'
  },
  containerButtonsActions: {
    width: width * 1,
    paddingTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: width * 0.15
  }
});

export default styles
