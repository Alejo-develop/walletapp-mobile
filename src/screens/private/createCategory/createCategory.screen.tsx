import {Text, View} from 'react-native';
import styles from './styles';
import InputComponent from '../../../components/inputGeneric/input.component';
import ButtonComponent from '../../../components/buttonGeneric/button.component';
import CreateCategoryHook from '../../../hooks/screens/createCategory.hook';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import SelectComponent from '../../../components/select/select.component';

const CreateCategoryScreen = () => {
  const {
    form,
    budgets,
    budgetId,
    walletInfo,
    fetchBudgets,
    handleFormChange,
    createCategory,
    setBudgetID,
    fetchWallet,
  } = CreateCategoryHook();

  useFocusEffect(
    useCallback(() => {
      fetchBudgets();
      fetchWallet();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Create Category</Text>

      <View style={styles.containerInputs}>
        <View style={styles.inputs}>
          <Text style={styles.title}>Name</Text>
          <InputComponent
            placeholder="Name..."
            entry={false}
            onChangeText={text => handleFormChange('name', text)}
          />
        </View>

        <View style={styles.inputs}>
          <Text style={styles.title}>Bugdet</Text>
          <InputComponent
            keyBoardPad="decimal-pad"
            placeholder="Budget..."
            entry={false}
            onChangeText={text => handleFormChange('budget_for_category', text)}
          />
        </View>
      </View>
      <SelectComponent
        widthChoose={0.8}
        isBudget={false}
        labelFocus="Budget"
        placeholderFocus="Budget..."
        data={budgets}
        position="bottom"
        setID={setBudgetID}
        placeholder="Select Budget"
      />

      <ButtonComponent
        text="Create"
        onPress={() => createCategory(budgetId, walletInfo?.id, form)}
      />
    </View>
  );
};

export default CreateCategoryScreen;
