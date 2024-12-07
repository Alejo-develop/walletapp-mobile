import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
    fourthyCorlor,
  height,
  primaryColor,
  secondaryColor,
  width,
} from '../../../utils/constants/style.constants';
import { GetBudgetResponse } from '../../../interfaces/budgets.interface';

const BudgetSelectComponent = ({data}: GetBudgetResponse) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && {color: secondaryColor, backgroundColor: primaryColor}]}>
        Budgets
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: secondaryColor}]}
        containerStyle={styles.dropdownContainer}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        dropdownPosition="bottom"
        data={data || []}
        maxHeight={250}
        labelField="name"
        valueField="name"
        placeholder={!isFocus ? 'Select budget...' : 'Budget...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.name);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    padding: 20,
    marginTop: height * 0.045,
  },
  dropdown: {
    height: height * 0.06,
    width: width * 0.85,
    borderRadius: 12,
    paddingHorizontal: 8,
    backgroundColor: primaryColor,
    elevation: 12,
    borderWidth: 1
  },
  label: {
    position: 'absolute',
    left: 22,
    zIndex: 999,
    top: 10,
    paddingHorizontal: 8,
    fontSize: 14,
    color: fourthyCorlor,
  },
  placeholderStyle: {
    fontSize: 16,
    color: primaryColor,
    borderRadius: 12,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: secondaryColor,
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
  },
  itemTextStyle: {
    color: secondaryColor,
    fontSize: 16,
    paddingVertical: 8,
    borderRadius: 12,
    fontWeight: '600'
  },
  dropdownContainer: {
    backgroundColor: primaryColor,
    borderRadius: 12,
    borderColor: primaryColor
  },
});

export default BudgetSelectComponent;
