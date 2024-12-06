import {StyleSheet, Text, View} from 'react-native';
import {height, width} from '../../../utils/constants/style.constants';

const HeaderLoginComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Cashify</Text>

      <View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.title}>Howard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    gap: height * 0.05,
  },
  name: {
    color: 'white',
    position: 'relative',
    bottom: height * 0.145,
    left: width * 0.1,
    fontSize: height * 0.02,
  },
  buttonsNav: {
    flexDirection: 'row',
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    fontSize: height * 0.035,
    color: 'white',
    fontWeight: '100',
  },
});

export default HeaderLoginComponent;
