import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { height, width } from '../../../utils/constants/style.constants';
import { TransactionResponseInterface } from '../../../interfaces/transactions.interface';
import TransactionCard from './transactionItem.component';

const TransactionsList = ({ sections }: { sections: { title: string; data: TransactionResponseInterface[] }[] }) => {
  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }: { item: TransactionResponseInterface }) => (
    <TransactionCard {...item} />
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContainer}
        style={styles.sectionList}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    alignItems: 'center',
    marginBottom: height * 0.26,
  },
  listContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: height * 1,
    gap: 15,
  },
  sectionList: {
    paddingBottom: height * 0.1,
  },
  sectionHeader: {
    padding: 10,
    alignItems: 'center',
    width: width,
    paddingHorizontal: 30,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
});

export default TransactionsList;