import {Text, View} from 'react-native';
import styles from './styles';
import InputComponent from '../../../components/inputGeneric/input.component';
import ButtonComponent from '../../../components/buttonGeneric/button.component';
import CreateBudgetHook from '../../../hooks/screens/createBudget.hook';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

const CreateBudgetScreen = () => {
  const {form, walletInfo, createBudget, fetchWallet, handleFormChange} =
    CreateBudgetHook();

  useFocusEffect(
    useCallback(() => {
      fetchWallet();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Create Budget</Text>

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
            onChangeText={text => handleFormChange('budget', text)}
          />
        </View>
      </View>

      <ButtonComponent text="Create"  onPress={() => createBudget(form, walletInfo?.id)}/>
    </View>
  );
};

export default CreateBudgetScreen;
