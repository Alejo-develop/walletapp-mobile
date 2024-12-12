import {StyleSheet, Text, View} from 'react-native';
import {height, secondaryColor, width} from '../../../utils/constants/style.constants';

const HeaderSignUpComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Cashify</Text>

      <View>
        <Text style={styles.title}>Create an <Text style={styles.titleSpan}>Account</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  name: {
    color: 'white',
    position: 'relative',
    bottom: height * 0.170,
    left: width * 0.1,
    fontSize: height * 0.02,
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    fontSize: height * 0.035,
    color: 'white',
    fontWeight: '100',
  },
  titleSpan: {
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    fontSize: height * 0.035,
    color: secondaryColor,
    fontWeight: '100',
  }
});

export default HeaderSignUpComponent;
