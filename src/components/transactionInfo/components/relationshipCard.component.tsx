import {StyleSheet, Text, View} from 'react-native';
import { height, primaryColor, width } from '../../../utils/constants/style.constants';

interface RelationShipCardProps {
  text: string | undefined;
}

const RelationshipCard = ({text}: RelationShipCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.27,
    width: width * 0.6,
    height: height * 0.06,
    justifyContent: 'center',
    backgroundColor: primaryColor,
    elevation: 6,
  },
  text: {
    color: 'white',
    fontSize: height * 0.017,
    paddingLeft: width * 0.05
  },
});

export default RelationshipCard;
