import {StyleSheet} from 'react-native';
import {
  height,
  primaryColor,
  secondaryColor,
  terceryColor,
  width,
} from '../../utils/constants/style.constants';

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
  headerModal: {
    flexDirection: 'row',
    width: width * 1,
    height: height * 0.07,
    alignItems: 'center',
    gap: width * 0.297,
    marginLeft: width * 0.1,
  },
  title: {
    color: 'white',
    fontSize: height * 0.026,
    fontWeight: '800',
  },
  card: {
    backgroundColor: terceryColor,
    width: width * 0.92,
    height: height * 0.3,
    borderRadius: 20,
    borderWidth: 0.8,
    elevation: 12,
  },
  cardHeader: {
    width: width * 0.915,
    height: height * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: width * 0.3,
    marginTop: height * 0.03,
  },
  cardTitle: {
    color: 'white',
    fontSize: height * 0.017,
  },
  cardSpan: {
    color: secondaryColor,
    fontSize: height * 0.017,
  },
  cardInputs: {
    width: width * 0.915,
    height: height * 0.12,
    flexDirection: 'row',
  },
  containerFirstInputs: {
    width: width * 0.6,
  },
  containerSecondInputs: {
    width: width * 0.32,
    paddingTop: height * 0.005,
  },
  inputCardNumber: {
    fontSize: height * 0.03,
    paddingLeft: width * 0.065,
  },
  inputCardName: {
    paddingLeft: width * 0.065,
    paddingBottom: height * 0.0,
  },
  inputExpDate: {
    paddingLeft: width * 0.045,
  },
  containerCvv: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width * 0.045,
  },
  inputCvv: {
    paddingLeft: width * 0.025,
  },
  cointainerInfoWallet: {
    height: height * 0.26,
    width: width * 1,
    marginTop: height * 0.05,
    flexDirection: 'row',
  },
  containerMoneyDetails: {
    flex: 1,
    height: height * 0.26,
    width: width * 0.0,
    alignItems: 'center',
    gap: height * 0.006
  },
  containerTotalDetails: {
    flex: 1,
    alignItems: 'center',
    gap: height * 0.079 
  },
  containerDetail: {
    alignItems: 'center'
  },
  bigTitleInfoWallet: {
    color: 'white',
    fontWeight: '800',
    fontSize: height * 0.025,
    textAlign: 'center'
  },
  bigCashInfoWallet: {
    color: secondaryColor,
    fontSize: height * 0.02,
  },
  littleTitleInfoWallet: {
    color: 'white',
    fontWeight: '800',
    fontSize: height * 0.015,
  },
  litleCashInfoWallet: {
    color: secondaryColor,
    textAlign: 'center',
    width: width * 0.37,
    height: height * 0.04
  },

});

export default styles;
