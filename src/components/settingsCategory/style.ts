import {StyleSheet} from 'react-native';
import {
  height,
  primaryColor,
  secondaryColor,
  width,
} from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  modal: {
    backgroundColor: primaryColor,
    borderWidth: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: height * 0.5,
    width: width * 1,
    elevation: 12,
    alignItems: 'center',
    gap: height * 0.02
  },
  containerTitles: {
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: height * 0.02
  },
  title: {
    fontSize: height * 0.03,
    color: 'white',
    fontWeight: '700'
  },
  budget: {
    color: secondaryColor
  }
});

export default styles;
