import {StyleSheet, Text, View} from 'react-native';
import { height, secondaryColor } from '../../../utils/constants/style.constants';

interface DetailComponentProps {
  nameDetail: string;
  info: string | null | undefined | number;
}

const DetailComponent = ({nameDetail, info}: DetailComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleInfo}>{nameDetail}</Text>
      <Text style={styles.info}>{Number.isFinite(info) || info ? `${info}` : 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: height * 0.014,
    marginLeft: 12
  },
  titleInfo: {
    color: 'white',
    fontSize: height * 0.019,
    fontWeight: '700'
  },
  info: {
    color: secondaryColor,
    fontStyle: 'italic'
  },
});

export default DetailComponent;
