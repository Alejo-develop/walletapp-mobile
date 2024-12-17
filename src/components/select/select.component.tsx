import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {BudgetListComponentProps} from '../../interfaces/home.interface';
import {primaryColor, width} from '../../utils/constants/style.constants';
import styles from './styles';
import InfoBudgetModal from '../infoBudget/infoBudget.modal';
import {BudgetResponse} from '../../interfaces/budgets.interface';
import ButtonInfoBudgetComponent from '../../screens/private/home/components/buttonInfoBudget';

const SelectComponent = ({
  data,
  labelFocus,
  placeholder,
  placeholderFocus,
  widthChoose,
  position,
  isBudget,
  setID,
  setBudgetForTransactions,
}: BudgetListComponentProps) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<BudgetResponse | null>(
    null,
  );
  const [isBudgetModal, setIsBudgetModal] = useState<boolean>(false);

  function isBudgetResponse(item: any): item is BudgetResponse {
    return (item as BudgetResponse).id !== undefined;
  }

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && {backgroundColor: primaryColor}]}>
        {labelFocus}
      </Text>
    );
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {renderLabel()}
      <Dropdown
        style={[
          styles.dropdown,
          {width: width * widthChoose},
          isFocus && {borderColor: 'white'},
        ]}
        containerStyle={styles.dropdownContainer}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={[
          styles.inputSearchStyle,
          {backgroundColor: primaryColor, color: 'white'},
        ]}
        itemContainerStyle={[
          styles.itemContainerStyle,
          {backgroundColor: primaryColor},
        ]}
        itemTextStyle={[
          styles.itemTextStyle,
          {backgroundColor: primaryColor, color: 'white'},
        ]}
        dropdownPosition={
          position === 'top' || position === 'bottom' ? position : 'auto'
        }
        data={data || []}
        maxHeight={250}
        labelField="name"
        valueField="name"
        placeholder={!isFocus ? `${placeholder}` : `${placeholderFocus}`}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.name);
          setIsFocus(false);
          if (setID) {
            setID(item.id);
          }

          if (setBudgetForTransactions) {
            setBudgetForTransactions(item.id);
          }

          if (isBudgetResponse(item)) {
            setSelectedBudget(item);
          }
        }}
      />
      {isBudget ? (
        <View>
          <ButtonInfoBudgetComponent onPress={() => setIsBudgetModal(true)} />
          <InfoBudgetModal
            visibleModal={isBudgetModal}
            onClose={() => setIsBudgetModal(false)}
            info={selectedBudget}
          />
        </View>
      ) : null}
    </View>
  );
};

export default SelectComponent;
