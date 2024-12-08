import {Platform, StyleSheet} from 'react-native';
import {
  fourthyCorlor,
  height,
  primaryColor,
  secondaryColor,
  terceryColor,
  width,
} from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    width: width * 1,
    height: height * 1,
    backgroundColor: primaryColor,
    alignItems: 'center'
  },
  containerMoney: {
    width: width * 1,
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: height * 0.015
  },
  money: {
    color: 'white',
    fontSize: height * 0.045,
    fontWeight: '700',
  },
  subtract: {
    color: fourthyCorlor,
    textAlign: 'center'
  },
  containerButtonsActions: {
    width: width * 1,
    paddingTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: width * 0.15
  },
  containerSectionCategory: {
    backgroundColor: terceryColor,
    width: width * 1,
    height: height * 0.5,
    borderTopEndRadius: 42,
    borderTopStartRadius: 42,
    marginTop: height * 0.01,
    alignItems: 'center',
    elevation: 24,
    zIndex: 2,
    gap: 14,
    paddingBottom: height * 0.3
  },
  titleCategorys: {
    marginTop: height * 0.02,
    fontSize: height * 0.023,
    fontWeight: '900',
    color: fourthyCorlor
  },
  containerCategorys: {
    width: width * 1, 
    minHeight: height * 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  list: {
    width: width * 1,
    alignItems: 'center',
    gap: height * 0.03,
    marginLeft: 11,
  },
  item:{
    margin: 5,
    width: width * 0.3
  },
  dontMoney: {
    textAlign: 'center'
  }
});

export default styles
