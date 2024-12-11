import {StyleSheet} from 'react-native';
import {
  height,
  primaryColor,
  width,
} from '../../utils/constants/style.constants';

const styles = StyleSheet.create({
  dropdown: {
    height: height * 0.06,
    width: width * 0.85,
    borderRadius: 12,
    paddingHorizontal: 8,
    backgroundColor: primaryColor,
    elevation: 12,
    borderWidth: 1,
  },
  label: {
    position: 'absolute',
    left: 22,
    zIndex: 999,
    top: height * -0.01,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: primaryColor,
    borderRadius: 12,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
    borderRadius: 12,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 12,
  },
  itemContainerStyle: {
    marginLeft: 12,
    width: width * 0.4,
    backgroundColor: primaryColor,
    color: primaryColor,
  },
  itemTextStyle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 8,
    borderRadius: 12,
    fontWeight: '600',
    backgroundColor: primaryColor,
  },
  dropdownContainer: {
    backgroundColor: primaryColor,
    borderRadius: 12,
    borderColor: primaryColor,
  },
  selectedItemContainerStyle: {backgroundColor: primaryColor},
});

export default styles;
