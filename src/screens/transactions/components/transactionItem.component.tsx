import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TransactionResponseInterface} from '../../../interfaces/transactions.interface';
import {
  height,
  primaryColor,
  secondaryColor,
  width,
} from '../../../utils/constants/style.constants';

const TransactionCard = ({
  name,
  description,
  store,
  cost,
  budget,
  category,
  date
}: TransactionResponseInterface) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerMiniInfo}>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.titleRelationship}>
          {budget?.name} / {category?.name}
        </Text>
      </View>
      <View>
        <Text style={styles.cost}>-${cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    width: width * 0.9,
    height: height * 0.068,
    elevation: 6,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: width * 0.15
  },
  title: {
    color: 'white',
    fontSize: height * 0.017,
  },
  containerMiniInfo: {
    gap: height * 0.005,
  },
  titleRelationship: {
    color: secondaryColor,
    fontSize: height * 0.012,
  },
  cost: {
    color: 'white',
    fontSize: height * 0.017,
  }
});

export default TransactionCard;
